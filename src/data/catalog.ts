
export interface CatalogItem {
  id: string;
  name_es: string;
  name_en: string;
  category: 'seats' | 'tables' | 'habitational' | 'outdoor' | 'office' | 'special' | 'services';
  description_es: string;
  description_en: string;
  price_info?: string;
  image: string;
  type: 'product' | 'service';
}

export const CATALOG_DATA: CatalogItem[] = [
  // SECCIÓN: ASIENTOS / SEATS
  {
    id: 'butaca-premium-akamara',
    name_es: 'Butaca Ejecutiva "Akamara Premium"',
    name_en: 'Executive Armchair "Akamara Premium"',
    category: 'seats',
    description_es: 'Butaca de alto confort con estructura de madera preciosa y tapicería en piel sintética náutica. Diseño ergonómico para largas jornadas de trabajo o áreas de espera VIP.',
    description_en: 'High-comfort armchair with precious wood structure and nautical synthetic leather upholstery. Ergonomic design for long working days or VIP waiting areas.',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800',
    type: 'product'
  },
  {
    id: 'sofa-modular-shango',
    name_es: 'Sofa Modular "Shangó" de 3 Plazas',
    name_en: '3-Seater "Shangó" Modular Sofa',
    category: 'seats',
    description_es: 'Sistema modular reconfigurable. Tejido de alta resistencia ideal para espacios públicos, hoteles y residencias modernas.',
    description_en: 'Reconfigurable modular system. High-resistance fabric ideal for public spaces, hotels, and modern residences.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800',
    type: 'product'
  },
  {
    id: 'silla-comedor-vanguardia',
    name_es: 'Silla de Comedor "Vanguardia"',
    name_en: '"Vanguardia" Dining Chair',
    category: 'seats',
    description_es: 'Silla minimalista con soporte lumbar y acabado en barniz mate. Combina elegancia y ligereza.',
    description_en: 'Minimalist chair with lumbar support and matte varnish finish. Combines elegance and lightness.',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800',
    type: 'product'
  },

  // SECCIÓN: MESAS / TABLES
  {
    id: 'mesa-raiz-caoba',
    name_es: 'Mesa de Centro "Raíz de Caoba"',
    name_en: '"Mahogany Root" Coffee Table',
    category: 'tables',
    description_es: 'Pieza única tallada a partir de raíces de caoba recuperadas. Una obra de arte funcional para recibidores de lujo.',
    description_en: 'Unique piece carved from reclaimed mahogany roots. A functional work of art for luxury foyers.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800',
    type: 'product'
  },
  {
    id: 'mesa-conferencia-imperial',
    name_es: 'Mesa de Conferencia "Imperial"',
    name_en: '"Imperial" Conference Table',
    category: 'tables',
    description_es: 'Mesa de gran formato para salas de juntas. Superficie de alto brillo con conectividad integrada para multimedia.',
    description_en: 'Large format table for boardrooms. High-gloss surface with integrated multimedia connectivity.',
    image: 'https://images.unsplash.com/photo-1542744094-3a5fc78d2243?q=80&w=800',
    type: 'product'
  },

  // SECCIÓN: HABITACIONAL / HABITATIONAL
  {
    id: 'cama-dujo-king',
    name_es: 'Cama King Size "Dujo Reborn"',
    name_en: 'King Size "Dujo Reborn" Bed',
    category: 'habitational',
    description_es: 'Juego de habitación completo que incluye cabecero con iluminación LED y mesitas de noche integradas.',
    description_en: 'Complete bedroom set including headboard with LED lighting and integrated nightstands.',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867821c?q=80&w=800',
    type: 'product'
  },
  {
    id: 'gavetero-horizonte',
    name_es: 'Gavetero "Horizonte" de 6 Gavetas',
    name_en: '6-Drawer "Horizonte" Dresser',
    category: 'habitational',
    description_es: 'Mueble de almacenamiento con correderas telescópicas y tiradores de aluminio. Acabado en madera clara.',
    description_en: 'Storage unit with telescopic slides and aluminum handles. Finished in light wood.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800',
    type: 'product'
  },

  // SECCIÓN: OFICINA / OFFICE
  {
    id: 'buro-tablero-pro',
    name_es: 'Buró Ejecutivo "El Tablero Pro"',
    name_en: '"The Board Pro" Executive Desk',
    category: 'office',
    description_es: 'Escritorio con ala auxiliar y credenza integrada. Diseñado para optimizar la productividad del directivo moderno.',
    description_en: 'Desk with side return and integrated credenza. Designed to optimize the productivity of the modern executive.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800',
    type: 'product'
  },

  // SECCION: EXTERIOR / OUTDOOR
  {
    id: 'tumbona-teca-olokun',
    name_es: 'Tumbona "Olokun" en Teca Real',
    name_en: '"Olokun" Real Teak Lounger',
    category: 'outdoor',
    description_es: 'Tumbona para piscinas y playas. Madera tratada para máxima durabilidad ante el sol y la humedad del Caribe.',
    description_en: 'Lounger for pools and beaches. Treated wood for maximum durability against Caribbean sun and humidity.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d59735288?q=80&w=800',
    type: 'product'
  },

  // SECCIÓN: SERVICIOS / SERVICES
  {
    id: 'servicio-interiorismo-360',
    name_es: 'Interiorismo Corporativo 360',
    name_en: 'Corporate Interior Design 360',
    category: 'services',
    description_es: 'Gestión integral de proyectos: diseño, fabricación de mobiliario a medida y montaje final para hoteles y oficinas.',
    description_en: 'Integral project management: design, custom furniture manufacturing, and final assembly for hotels and offices.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
    type: 'service'
  },
  {
    id: 'servicio-logistica-camino',
    name_es: 'Logística Especializada "El Camino"',
    name_en: 'Specialized Logistics "The Path"',
    category: 'services',
    description_es: 'Transporte y distribución de mercancías en Cuba. Flota propia y rastreo de envíos para asegurar su inversión.',
    description_en: 'Transport and distribution of goods in Cuba. Own fleet and shipment tracking to secure your investment.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800',
    type: 'service'
  },
  {
    id: 'servicio-catering-eventos',
    name_es: 'Catering Premium "Oshún"',
    name_en: '"Oshún" Premium Catering',
    category: 'services',
    description_es: 'Servicio gastronómico de alta gama para eventos corporativos, inauguraciones y cenas de gala.',
    description_en: 'High-end gastronomic service for corporate events, inaugurations, and gala dinners.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800',
    type: 'service'
  }
];
