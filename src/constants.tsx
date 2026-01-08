import { Armchair, Hammer, ChefHat, Truck, Sparkles } from 'lucide-react';

export const COLORS = {
    amber: {
        500: '#f59e0b',
        600: '#d97706',
    },
    slate: {
        300: '#cbd5e1',
        400: '#94a3b8',
        900: '#0f172a',
        950: '#020617',
    }
};

export const LEGAL_INFO = {
    name: "Akamara S.U.R.L.",
    nit: "50004324225",
    founded: "Octubre 2024",
    location: "La Habana, Cuba",
    gaceta: "GOC-2024-EX88",
    contact: {
        phone: "+53 5 8746866",
        email: "direccion@akamara.cu",
        person: "Jose Miguel Romero"
    }
};

export const DIVISIONS = [
    {
        id: 'estrategia',
        title: 'Estrategia',
        subtitle: 'Orula / El Tablero',
        desc: 'Consultoría estratégica y gestión de proyectos. El oráculo de Akamara para decisiones inteligentes y éxito sostenible.',
        icon: <Sparkles size={32} />,
        image: 'https://images.unsplash.com/photo-1454165833767-0274b24f6733?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Orunmila',
        color: 'from-green-500/20 to-yellow-500/20'
    },
    {
        id: 'mobiliario',
        title: 'Mobiliario',
        subtitle: 'Yemayá / La Forma',
        desc: 'Diseño y fabricación de mobiliario de alto estándar. Maderas preciosas y acabados de lujo para espacios que fluyen como el mar.',
        icon: <Armchair size={32} />,
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Yemaya',
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        id: 'construccion',
        title: 'Construcción',
        subtitle: 'Shangó / Fuerza',
        desc: 'Ejecución de obra civil y terminaciones con solidez estructural. Energía creativa y poder de realización.',
        icon: <Hammer size={32} />,
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Shango',
        color: 'from-red-500/20 to-orange-500/20'
    },
    {
        id: 'gastronomia',
        title: 'Gastronomía',
        subtitle: 'Olokun / Profundidad',
        desc: 'Alimentación institucional y eventos. Tesoros culinarios desde las profundidades del sabor y la calidad.',
        icon: <ChefHat size={32} />,
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Olokun',
        color: 'from-blue-900/40 to-indigo-900/40'
    },
    {
        id: 'logistica',
        title: 'Logística',
        subtitle: 'Eshú / El Camino',
        desc: 'Flota especializada y logística 360. Abriendo caminos y asegurando que cada carga llegue a su destino con precisión.',
        icon: <Truck size={32} />,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Eshu',
        color: 'from-red-600/20 to-black/20'
    }
];
