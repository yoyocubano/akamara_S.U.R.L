import { Box, Home, Zap, Briefcase, Globe, Anchor } from 'lucide-react';

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
    nit: '900000000-1'
};

export const DIVISIONS = [
    {
        id: 1,
        title: 'DUJO Mobiliario',
        subtitle: 'La Forma',
        desc: 'Diseño y manufactura de mobiliario con identidad cubana y estándares globales.',
        icon: <Home size={32} />,
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
        path: '/dujo'
    },
    {
        id: 2,
        title: 'Energía Vital',
        subtitle: 'El Impulso',
        desc: 'Soluciones de energía renovable y sistemas eléctricos de alta eficiencia.',
        icon: <Zap size={32} />,
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
        path: '/energia'
    },
    {
        id: 3,
        title: 'Infraestructura',
        subtitle: 'La Base',
        desc: 'Construcción y mantenimiento de espacios comerciales y residenciales.',
        icon: <Briefcase size={32} />,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
        path: '/infra'
    },
    {
        id: 4,
        title: 'Logística Global',
        subtitle: 'El Flujo',
        desc: 'Importación y distribución de materias primas y equipamiento.',
        icon: <Globe size={32} />,
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
        path: '/logistica'
    },
    {
        id: 5,
        title: 'Consultoría',
        subtitle: 'La Mente',
        desc: 'Asesoría estratégica para el desarrollo de negocios en la región.',
        icon: <Anchor size={32} />,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        path: '/consultoria'
    },
    {
        id: 6,
        title: 'Pack & Move',
        subtitle: 'El Movimiento',
        desc: 'Soluciones de empaque y traslado para empresas y particulares.',
        icon: <Box size={32} />,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
        path: '/pack'
    }
];
