
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            es: {
                translation: {
                    nav: {
                        hub: 'Hub Principal',
                        legal: 'Expediente Legal',
                        furniture: 'Mobiliario',
                        contact: 'Contacto'
                    },
                    hero: {
                        title: 'Akamara',
                        subtitle: 'Antes del tiempo, Akamara',
                        creacion: 'Creación',
                        desc: 'Akamara nace como un ecosistema multiservicios en Cuba. Desde la fabricación de mobiliario de diseño, hasta soluciones logísticas y constructivas integrales.',
                        button_explore: 'Explorar Divisiones',
                        button_legal: 'Ver Credenciales'
                    },
                    divisions: {
                        estrategia: {
                            title: 'Estrategia',
                            subtitle: 'Orula / El Tablero',
                            desc: 'Consultoría estratégica y gestión de proyectos. El oráculo de Akamara para decisiones inteligentes y éxito sostenible.',
                            fullTitle: 'Estrategia y Consultoría Inteligente',
                            vision: 'La sabiduría de Orunmila guía cada decisión comercial, transformando la incertidumbre en destinos claros y prósperos.',
                            cta: 'Consultar el Oráculo Akamara',
                            points: {
                                0: 'Análisis de Mercado 360',
                                1: 'Optimización de Procesos SURL',
                                2: 'Gestión de Proyectos VIP',
                                3: 'Consultoría en Inversión Extranjera'
                            }
                        },
                        mobiliario: {
                            title: 'Mobiliario',
                            subtitle: 'Yemayá / La Forma',
                            desc: 'Diseño y fabricación de mobiliario de alto estándar. Maderas preciosas y acabados de lujo para espacios que fluyen como el mar.',
                            fullTitle: 'Mobiliario de Diseño y Confort',
                            vision: 'Como el abrazo de Yemayá, nuestros espacios fluyen con elegancia y serenidad, creando hogares y hoteles de ensueño.',
                            cta: 'Crear mi Espacio Ideal',
                            points: {
                                0: 'Mobiliario Contract (Hotelería)',
                                1: 'Línea Residencial de Lujo',
                                2: 'Diseño de Interiores Personalizado',
                                3: 'Carpintería de Maderas Preciosas'
                            }
                        },
                        construccion: {
                            title: 'Construcción',
                            subtitle: 'Shangó / Fuerza',
                            desc: 'Ejecución de obra civil y terminaciones con solidez estructural. Energía creativa y poder de realización.',
                            fullTitle: 'Construcción Civil e Ingeniería',
                            vision: 'La fuerza imparable de Shangó se materializa en estructuras sólidas, combinando la potencia de la obra con la belleza del rayo.',
                            cta: 'Iniciar mi Obra Maestra',
                            points: {
                                0: 'Mantenimiento Integral de Inmuebles',
                                1: 'Remodelación de Espacios Comerciales',
                                2: 'Infraestructura de Energía Renovables',
                                3: 'Brigadas Especialistas en Acabados'
                            }
                        },
                        gastronomia: {
                            title: 'Gastronomía',
                            subtitle: 'Olokun / Profundidad',
                            desc: 'Alimentación institucional y eventos. Tesoros culinarios desde las profundidades del sabor y la calidad.',
                            fullTitle: 'Gastronomía y Catering de Autor',
                            vision: 'Desde la profundidad de los secretos de Olokun, emergen banquetes que nutren el alma y elevan cualquier celebración.',
                            cta: 'Degustar la Excelencia',
                            points: {
                                0: 'Catering para Eventos Corporativos',
                                1: 'Servicio de Comedor Institucional',
                                2: 'Suministros Alimenticios de Calidad',
                                3: 'Gestión de Banquetes y Protocolo'
                            }
                        },
                        logistica: {
                            title: 'Logística',
                            subtitle: 'Eshú / El Camino',
                            desc: 'Flota especializada y logística 360. Abriendo caminos y asegurando que cada carga llegue a su destino con precisión.',
                            fullTitle: 'Logística y Transporte Nacional',
                            vision: 'Eshú abre los caminos y asegura que cada recurso fluya sin obstáculos a través de la geografía cubana.',
                            cta: 'Abrir nuevos Caminos',
                            points: {
                                0: 'Transporte de Carga Especializada',
                                1: 'Gestión de Almacenes y Distribución',
                                2: 'Mensajería y Envíos Express',
                                3: 'Logística de Abastecimiento Crítico'
                            }
                        }
                    }
                }
            },
        }
    },
        en: {
        translation: {
            nav: {
                hub: 'Main Hub',
                legal: 'Legal Documents',
                furniture: 'Furniture',
                contact: 'Contact'
            },
            hero: {
                title: 'Akamara',
                subtitle: 'Before time, Akamara',
                creacion: 'Creation',
                desc: 'Akamara is born as a multi-service ecosystem in Cuba. From professional furniture manufacturing to integral logistics and construction solutions.',
                button_explore: 'Explore Divisions',
                button_legal: 'Legal Credentials'
            },
            divisions: {
                estrategia: {
                    title: 'Strategy',
                    subtitle: 'Orula / The Board',
                    desc: 'Strategic consulting and project management. Akamara\'s oracle for smart decisions and sustainable success.',
                    fullTitle: 'Smart Strategy & Consulting',
                    vision: 'Orunmila\'s wisdom guides every commercial decision, transforming uncertainty into clear and prosperous destinations.',
                    cta: 'Consult the Akamara Oracle',
                    points: {
                        0: '360 Market Analysis',
                        1: 'SURL Process Optimization',
                        2: 'VIP Project Management',
                        3: 'Foreign Investment Consulting'
                    }
                },
                mobiliario: {
                    title: 'Furniture',
                    subtitle: 'Yemayá / The Form',
                    desc: 'Design and manufacture of high-standard furniture. Precious woods and luxury finishes for spaces that flow like the sea.',
                    fullTitle: 'Design & Comfort Furniture',
                    vision: 'Like Yemayá\'s embrace, our spaces flow with elegance and serenity, creating dream homes and hotels.',
                    cta: 'Create my Ideal Space',
                    points: {
                        0: 'Contract Furniture (Hospitality)',
                        1: 'Luxury Residential Line',
                        2: 'Custom Interior Design',
                        3: 'Precious Woods Carpentry'
                    }
                },
                construccion: {
                    title: 'Construction',
                    subtitle: 'Shangó / Strength',
                    desc: 'Civil work execution and finishes with structural solidity. Creative energy and power of realization.',
                    fullTitle: 'Civil Construction & Engineering',
                    vision: 'Shangó\'s unstoppable force materializes in solid structures, combining the power of the work with the beauty of lightning.',
                    cta: 'Start my Masterpiece',
                    points: {
                        0: 'Comprehensive Property Maintenance',
                        1: 'Commercial Space Remodeling',
                        2: 'Renewable Energy Infrastructure',
                        3: 'Specialist Finishing Brigades'
                    }
                },
                gastronomia: {
                    title: 'Gastronomy',
                    subtitle: 'Olokun / Depth',
                    desc: 'Institutional food and events. Culinary treasures from the depths of flavor and quality.',
                    fullTitle: 'Signature Gastronomy & Catering',
                    vision: 'From the depths of Olokun\'s secrets emerge banquets that nourish the soul and elevate any celebration.',
                    cta: 'Taste Excellence',
                    points: {
                        0: 'Corporate Event Catering',
                        1: 'Institutional Dining Service',
                        2: 'Quality Food Supplies',
                        3: 'Banquet & Protocol Management'
                    }
                },
                logistica: {
                    title: 'Logistics',
                    subtitle: 'Eshú / The Path',
                    desc: 'Specialized fleet and 360 logistics. Opening paths and ensuring every cargo reaches its destination with precision.',
                    fullTitle: 'National Logistics & Transport',
                    vision: 'Eshú opens the paths and ensures each resource flows without obstacles across Cuban geography.',
                    cta: 'Open New Paths',
                    points: {
                        0: 'Specialized Cargo Transport',
                        1: 'Warehouse & Distribution Management',
                        2: 'Express Messaging & Shipping',
                        3: 'Critical Supply Logistics'
                    }
                }
            }
        }
    }
        }
    });

export default i18n;
