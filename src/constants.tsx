import { Armchair, Hammer, ChefHat, Truck } from 'lucide-react';

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
        id: 'mobiliario',
        title: 'Mobiliario',
        subtitle: 'La Forma',
        desc: 'Diseño y fabricación de mobiliario de alto estándar para hotelería y residencias de lujo. Maderas preciosas y acabados de metal.',
        icon: <Armchair size={32} />,
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'construccion',
        title: 'Construcción',
        subtitle: 'Infraestructura',
        desc: 'Ejecución de obra civil y terminaciones con brigadas especializadas. Solidez estructural y estética refinada.',
        icon: <Hammer size={32} />,
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'gastronomia',
        title: 'Gastronomía',
        subtitle: 'Catering & Eventos',
        desc: 'Servicios de alimentación institucional y eventos corporativos con los más altos estándares sanitarios.',
        icon: <ChefHat size={32} />,
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'transporte',
        title: 'Logística',
        subtitle: 'Transporte',
        desc: 'Flota especializada para movimiento de carga y logística de distribución en todo el territorio nacional.',
        icon: <Truck size={32} />,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000'
    }
];
