/**
 * 🦅 AKAMARA MULTI-IA CHAT ENDPOINT
 * Failover System: GitHub Models -> DeepSeek -> OpenRouter -> Gemini
 */

export const onRequestPost = async (context) => {
    const { env, request } = context;

    // 1. Verificar Origen y Seguridad
    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        const { messages } = await request.json();
        if (!messages || !Array.isArray(messages)) {
            return new Response(JSON.stringify({ error: "Messages array required" }), { status: 400, headers: corsHeaders });
        }

        // 2. Extraer Identidad (Basado en la lógica original de OriChatBot.tsx)
        const YUNIOR_END_DATE = new Date("2026-02-16T23:59:59"); // Extendida un poco para la demo
        const now = new Date();
        const isYuniorMode = now < YUNIOR_END_DATE;

        const systemPrompt = isYuniorMode
            ? `Eres Yunior GPT, un asistente virtual cubano con estilo "repartero". Tu slogan es "que bolero el mio". Hablas con jerga cubana urbana de forma moderada pero auténtica (asere, qué volá, en la talla, fula, muela). 
        
        **CONOCIMIENTO DE AKAMARA (MANIFIESTO):**
        Trabajas para Akamara S.U.R.L., un ecosistema de creación inspirado en los Orishas.
        - Estrategia (Orunmila), Diseño (Yemayá), Construcción (Shangó), Gastronomía (Olokun), Logística (Eshú).
        
        Tu misión es resolver problemas "en la talla" y vender estos servicios a clientes corporativos y particulares con un tono relajado pero experto.`
            : `Eres Ori IA, la asistente virtual oficial de Akamara S.U.R.L. Tu tono es profesional, eficiente, cortés y altamente analítico.
        
        **MANIFIESTO DE AKAMARA:**
        Akamara es un "Ecosistema de Creación" inspirado en la excelencia y la herencia cultural (filosofía Orisha).
        Tu objetivo es brindar información precisa y ayudar a los clientes a canalizar sus proyectos hacia las divisiones de Diseño, Construcción, Gastronomía o Logística de Akamara.`;

        const fullMessages = [
            { role: "system", content: systemPrompt },
            ...messages
        ];

        // 3. SECUENCIA DE FAILOVER (Misma lógica que Welux)
        const apiKeys = {
            github: env.GITHUB_TOKEN,
            deepseek: env.DEEPSEEK_API_KEY,
            openrouter: env.OPENROUTER_API_KEY,
            gemini: env.GEMINI_API_KEY
        };

        let result = null;
        let errorLog = [];

        // --- NIVEL 1: GitHub Models (Gratis/Alta Resolución) ---
        if (apiKeys.github && !result) {
            try {
                const ghResponse = await fetch("https://models.inference.ai.azure.com/chat/completions", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKeys.github}` },
                    body: JSON.stringify({ model: "gpt-4o", messages: fullMessages, max_tokens: 1000 })
                });
                if (ghResponse.ok) {
                    const data = await ghResponse.json();
                    result = data.choices[0].message.content;
                } else { errorLog.push(`GH Error: ${ghResponse.status}`); }
            } catch (e) { errorLog.push(`GH Exception: ${e.message}`); }
        }

        // --- NIVEL 2: DeepSeek (Costo Eficiente) ---
        if (apiKeys.deepseek && !result) {
            try {
                const dsResponse = await fetch("https://api.deepseek.com/chat/completions", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKeys.deepseek}` },
                    body: JSON.stringify({ model: "deepseek-chat", messages: fullMessages })
                });
                if (dsResponse.ok) {
                    const data = await dsResponse.json();
                    result = data.choices[0].message.content;
                } else { errorLog.push(`DeepSeek Error: ${dsResponse.status}`); }
            } catch (e) { errorLog.push(`DeepSeek Exception: ${e.message}`); }
        }

        // --- NIVEL 3: OpenRouter ---
        if (apiKeys.openrouter && !result) {
            try {
                const orResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKeys.openrouter}` },
                    body: JSON.stringify({ model: "mythic/model-switcher", messages: fullMessages })
                });
                if (orResponse.ok) {
                    const data = await orResponse.json();
                    result = data.choices[0].message.content;
                } else { errorLog.push(`OpenRouter Error: ${orResponse.status}`); }
            } catch (e) { errorLog.push(`OpenRouter Exception: ${e.message}`); }
        }

        // --- NIVEL 4: Gemini Flash (Pánico) ---
        if (apiKeys.gemini && !result) {
            try {
                const gemResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKeys.gemini}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ contents: [{ parts: [{ text: JSON.stringify(fullMessages) }] }] })
                });
                if (gemResponse.ok) {
                    const data = await gemResponse.json();
                    result = data.candidates[0].content.parts[0].text;
                }
            } catch (e) { errorLog.push(`Gemini Exception: ${e.message}`); }
        }

        if (!result) {
            return new Response(JSON.stringify({
                error: "All AI providers failed",
                details: isYuniorMode ? "Asere, se cayó el sistema. Tira un WhatsApp." : "Technical failure. Contact support."
            }), { status: 502, headers: corsHeaders });
        }

        return new Response(JSON.stringify({ content: result }), { headers: corsHeaders });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
    }
};
