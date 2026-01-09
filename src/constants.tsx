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
        title: 'divisions.estrategia.title',
        subtitle: 'divisions.estrategia.subtitle',
        desc: 'divisions.estrategia.desc',
        icon: <Sparkles size={32} />,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Orunmila',
        color: 'from-green-500/20 to-yellow-500/20'
    },
    {
        id: 'mobiliario',
        title: 'divisions.mobiliario.title',
        subtitle: 'divisions.mobiliario.subtitle',
        desc: 'divisions.mobiliario.desc',
        icon: <Armchair size={32} />,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Yemaya',
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        id: 'construccion',
        title: 'divisions.construccion.title',
        subtitle: 'divisions.construccion.subtitle',
        desc: 'divisions.construccion.desc',
        icon: <Hammer size={32} />,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Shango',
        color: 'from-red-500/20 to-orange-500/20'
    },
    {
        id: 'gastronomia',
        title: 'divisions.gastronomia.title',
        subtitle: 'divisions.gastronomia.subtitle',
        desc: 'divisions.gastronomia.desc',
        icon: <ChefHat size={32} />,
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Olokun',
        color: 'from-blue-900/40 to-indigo-900/40'
    },
    {
        id: 'logistica',
        title: 'divisions.logistica.title',
        subtitle: 'divisions.logistica.subtitle',
        desc: 'divisions.logistica.desc',
        icon: <Truck size={32} />,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
        orisha: 'Eshu',
        color: 'from-red-600/20 to-black/20'
    }
];
