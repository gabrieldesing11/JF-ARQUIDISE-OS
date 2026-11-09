import { ServiceItem, MaterialItem, FAQItem, ProjectItem } from '../types';

export const BRAND_CONFIG = {
  name: "JF ARQUIDISEÑOS",
  tagline: "Diseños que reflejan tu estilo",
  subtitle: "Diseño · Fabricación · Instalación de mobiliario a la medida",
  year: "2026",
  city: "Barranquilla",
  phone: "+57 300 193 3834",
  phoneDisplay: "(+57) 300 193 3834",
  whatsappUrl: "https://wa.me/573001933834",
  email: "contacto@jfarquidisenos.com",
  location: "Barranquilla, Atlántico · Colombia",
  showroomAddress: "Carrera 53 # 82 - 145, Alto Prado, Barranquilla",
  coverage: "Barranquilla, Villa Campestre, Puerto Colombia y Costa Caribe",
  socials: {
    instagram: "https://www.instagram.com/arquidisenojf?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw==",
    instagramHandle: "@arquidisenojf",
    tiktok: "https://www.tiktok.com/@arquidiseniojf?is_from_webapp=1&sender_device=pc",
    tiktokHandle: "@arquidiseniojf"
  },
  colors: {
    negro: "#020203",
    arena: "#E2CDA7",
    grisOscuro: "#57585A",
    grisMedio: "#888B90",
    grisClaro: "#CBC9CA",
    blanco: "#FFFFFF"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "cocinas",
    number: "01",
    title: "Cocinas Integrales",
    tagline: "Cocinas pensadas para vivirse.",
    description: "Islas monolíticas, herrajes de extracción total con cierre suave y superficies resistentes al calor y la humedad del Caribe.",
    blueprintImg: "/brand/service_01_cocinas.png",
    photoImg: "/images/projects/cocina_1.jpg",
    features: [
      "Islas en cuarzo y sinterizado sin juntas perceptibles",
      "Sistemas de gavetas Blum Legrabox con cierre suave",
      "Módulos para electrodomésticos empotrados",
      "Iluminación LED perimetral integrada"
    ],
    specs: [
      { label: "Material", value: "Tableros RH Hidrófugos 18mm" },
      { label: "Herrajes", value: "Blum Austria con garantía de por vida" },
      { label: "Cantos", value: "Termofusionado láser anti-humedad" },
      { label: "Instalación", value: "Técnicos propios en Barranquilla" }
    ]
  },
  {
    id: "closets",
    number: "02",
    title: "Closets & Vestidores",
    tagline: "Closets a la medida de tu rutina.",
    description: "Vestidores abiertos y closets estructurados con distribución milimétrica, islas de accesorios y puertas en perfilería de aluminio con cristal reflectivo.",
    blueprintImg: "/brand/service_02_closets.png",
    photoImg: "/images/projects/closet_1.jpg",
    features: [
      "Walk-in closets con islas centrales para accesorios",
      "Pantaloneros y zapateras extraíbles de gran capacidad",
      "Puertas con cristal ahumado y aluminio ultra delgado",
      "Encendido automático de iluminación al abrir"
    ],
    specs: [
      { label: "Estructura", value: "Módulos de piso a techo" },
      { label: "Correderas", value: "Amortiguadas de alta carga" },
      { label: "Interiores", value: "Texturados en roble o grafito" },
      { label: "Personalización", value: "Configurable a tu guardarropa" }
    ]
  },
  {
    id: "entretenimiento",
    number: "03",
    title: "Centros de Entretenimiento",
    tagline: "El punto focal arquitectónico de tu sala.",
    description: "Muros multimedia con paneles alistonados termoacústicos, consolas flotantes con gestión oculta de cables y nichos iluminados.",
    blueprintImg: "/brand/service_03_centros.png",
    photoImg: "/images/projects/entretenimiento_1.jpg",
    features: [
      "Panelados alistonados en roble o nogal natural",
      "Consolas suspendidas con uniones a 45°",
      "Ocultamiento técnico total de cables y tomas",
      "Compatibilidad con pantallas de hasta 98 pulgadas"
    ],
    specs: [
      { label: "Fijación", value: "Estructura interna oculta reforzada" },
      { label: "Acabados", value: "Lacas mate y maderas curadas" },
      { label: "Integración", value: "Audio, TV y barras de sonido" },
      { label: "Diseño", value: "Minimalista sin tornillos a la vista" }
    ]
  },
  {
    id: "banos",
    number: "04",
    title: "Divisiones de Baño",
    tagline: "Pureza visual, seguridad y máxima higiene.",
    description: "Sistemas en vidrio templado de 8mm y 10mm con herrajes en acero inoxidable 304 resistentes a la salinidad y humedad costera.",
    blueprintImg: "/brand/service_04_banos.png",
    photoImg: "/images/projects/bano_1.jpg",
    features: [
      "Puertas batientes con bisagras hidráulicas de retorno suave",
      "Sistemas corredizos suspendidos en acero inoxidable",
      "Vidrios con tratamiento repelente antical",
      "Tiradores en negro mate o cromo pulido"
    ],
    specs: [
      { label: "Cristal", value: "Templado de seguridad 8mm / 10mm" },
      { label: "Herrajes", value: "Acero Inoxidable AISI 304 náutico" },
      { label: "Sellado", value: "Silicona antimoho alemana" },
      { label: "Precisión", value: "Nivelación láser milimétrica" }
    ]
  },
  {
    id: "puertas",
    number: "05",
    title: "Puertas & Panelados",
    tagline: "Transiciones arquitectónicas con carácter.",
    description: "Puertas pivotantes monumentales y sistemas enrasados con marco invisible que se integran a la pared.",
    blueprintImg: "/brand/service_05_puertas.png",
    photoImg: "/images/projects/puerta_1.jpg",
    features: [
      "Puertas pivotantes de gran formato de hasta 3 metros",
      "Sistemas con marco oculto enrasados a la pared",
      "Cerraduras magnéticas silenciosas",
      "Aislamiento acústico con núcleo macizo estabilizado"
    ],
    specs: [
      { label: "Pivotes", value: "Ejes excéntricos ajustables en 3D" },
      { label: "Grosor", value: "45mm a 55mm de hoja maciza" },
      { label: "Cerraduras", value: "Magnéticas Italianas AGB" },
      { label: "Material", value: "Maderas nobles o melaminas de alta gama" }
    ]
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Asesoría & Toma de Medidas",
    description: "Visitamos tu espacio en Barranquilla o municipios vecinos sin costo. Realizamos el levantamiento de medidas exactas y definimos tus necesidades.",
  },
  {
    step: "02",
    title: "Diseño 3D & Planimetría",
    description: "Presentamos renders fotorrealistas con la paleta de materiales seleccionada para que apruebes cada detalle antes de la producción.",
  },
  {
    step: "03",
    title: "Fabricación de Precisión",
    description: "Mecanizado computarizado CNC, cantos láser sellados anti-humedad y ensamble previo en planta para verificar tolerancias.",
  },
  {
    step: "04",
    title: "Instalación Llave en Mano",
    description: "Montaje con técnicos propios, nivelación láser, limpieza de obra y entrega formal con certificado de garantía por escrito.",
  }
];

// Exactly 5 projects per category = 25 projects in Barranquilla & Atlántico
export const PROJECTS: ProjectItem[] = [
  // 1. COCINAS INTEGRALES (5)
  {
    id: "cocina-alto-prado",
    title: "Cocina Abierta & Isla Monolítica",
    category: "Cocinas Integrales",
    location: "Alto Prado, Barranquilla",
    image: "/images/projects/cocina_1.jpg",
    year: "2026",
    details: "Isla de 3.40m en cuarzo blanco Calacatta, frentes en tono arena mate y alacenas de piso a techo.",
    materials: ["Cuarzo Calacatta", "Melamina RH 18mm", "Herrajes Blum", "LED Cálido"]
  },
  {
    id: "cocina-villa-campestre",
    title: "Cocina Lineal con Barra Desayunador",
    category: "Cocinas Integrales",
    location: "Villa Campestre, Barranquilla",
    image: "/images/projects/cocina_2.jpg",
    year: "2026",
    details: "Diseño contemporáneo en negro grafito mate combinado con madera roble natural y mesón antibacteriano.",
    materials: ["Piedra Sinterizada", "Tableros RH", "Gavetas Legrabox", "Torre de Hornos"]
  },
  {
    id: "cocina-riomar",
    title: "Cocina Gourmet en U con Despensa Oculta",
    category: "Cocinas Integrales",
    location: "Riomar, Barranquilla",
    image: "/images/projects/cocina_3.jpg",
    year: "2025",
    details: "Aprovechamiento total de esquinas con esquineros extraíbles LeMans y campana de extracción oculta.",
    materials: ["Cuarzo Gris Perla", "Cantos Láser", "Bisagras Blumotion", "Perfil Gola"]
  },
  {
    id: "cocina-el-golf",
    title: "Cocina Escultórica & Cava Integrada",
    category: "Cocinas Integrales",
    location: "El Golf, Barranquilla",
    image: "/images/projects/cocina_4.jpg",
    year: "2025",
    details: "Isla central en cuarzo con cascada lateral, cava climatizada empotrada y frentes en laca mate.",
    materials: ["Cuarzo Negro Marquina", "Laca Poliuretano", "Herrajes Tip-On", "Iluminación Indirecta"]
  },
  {
    id: "cocina-puerto-colombia",
    title: "Cocina Abierta Casa Campestre",
    category: "Cocinas Integrales",
    location: "Puerto Colombia, Atlántico",
    image: "/images/projects/cocina_5.jpg",
    year: "2026",
    details: "Acabados resistentes a la brisa marina, combinación de arena y madera nogal con barra social amplia.",
    materials: ["Tableros RH Tropicalizados", "Mesón Dekton", "Acero Inoxidable 304", "LED 3000K"]
  },

  // 2. CLOSETS & VESTIDORES (5)
  {
    id: "closet-buenavista",
    title: "Walk-in Closet Master Suite",
    category: "Closets & Vestidores",
    location: "Buenavista, Barranquilla",
    image: "/images/projects/closet_1.jpg",
    year: "2026",
    details: "Vestidor en dos alas con isla para relojería, cristales templados gris humo y perfiles de aluminio negro.",
    materials: ["Melamina Lino Textil", "Cristal Reflectivo", "Correderas Tandembox", "Sensor LED"]
  },
  {
    id: "closet-el-golf",
    title: "Vestidor Abierto Iluminado",
    category: "Closets & Vestidores",
    location: "El Golf, Barranquilla",
    image: "/images/projects/closet_2.jpg",
    year: "2026",
    details: "Estructura suspendida de piso a techo con zapateras deslizables y pantaloneros de doble capacidad.",
    materials: ["Roble Arena", "Aluminio Negro Mate", "Herrajes Blum", "Perfiles Difusores"]
  },
  {
    id: "closet-villa-campestre",
    title: "Closet Empotrado con Puertas Corredizas",
    category: "Closets & Vestidores",
    location: "Villa Campestre, Barranquilla",
    image: "/images/projects/closet_3.jpg",
    year: "2025",
    details: "Puertas corredizas de piso a techo con frenado suave amortiguado y distribución interior personalizada.",
    materials: ["Melamina RH Blanca Mate", "Rieles Embutidos", "Cajones Ocultos", "Organizador"]
  },
  {
    id: "closet-alto-prado",
    title: "Closet Habitación Principal con Tocador",
    category: "Closets & Vestidores",
    location: "Alto Prado, Barranquilla",
    image: "/images/projects/closet_4.jpg",
    year: "2025",
    details: "Módulo continuo integrado con área de tocador, espejo retroiluminado y gavetas con divisiones en pana.",
    materials: ["Madera Nogal", "Espejo LED", "Cierres Suaves", "Tiradores Embutidos"]
  },
  {
    id: "closet-ciudad-mallorquin",
    title: "Closet Lineal Moderno de 4 Metros",
    category: "Closets & Vestidores",
    location: "Ciudad Mallorquín, Barranquilla",
    image: "/images/projects/closet_5.jpg",
    year: "2026",
    details: "Diseño funcional para apartamento nuevo con espacios dedicados para maletas, calzado y ropa larga.",
    materials: ["Tableros RH 18mm", "Aluminio Anodizado", "Guías Suaves", "Luz de Cortesía"]
  },

  // 3. CENTROS DE ENTRETENIMIENTO (5)
  {
    id: "entretenimiento-riomar",
    title: "Muro Multimedia Alistonado & Consola",
    category: "Centros de Entretenimiento",
    location: "Riomar, Barranquilla",
    image: "/images/projects/entretenimiento_1.jpg",
    year: "2026",
    details: "Panel de listones de madera de piso a techo con nicho para pantalla de 85 pulgadas y consola flotante.",
    materials: ["Madera Roble Curada", "Laca Grafito Mate", "Gestión Oculta Cables", "LED Cálido"]
  },
  {
    id: "entretenimiento-alto-prado",
    title: "Centro de TV con Piedra Sinterizada",
    category: "Centros de Entretenimiento",
    location: "Alto Prado, Barranquilla",
    image: "/images/projects/entretenimiento_2.jpg",
    year: "2026",
    details: "Fondo en piedra sinterizada con vetas doradas, nichos laterales iluminados y chimenea de bioetanol.",
    materials: ["Piedra Sinterizada", "Tablero RH Negro", "Perfilería Arena", "Bioetanol"]
  },
  {
    id: "entretenimiento-el-golf",
    title: "Mueble Multimedia Sala Principal",
    category: "Centros de Entretenimiento",
    location: "El Golf, Barranquilla",
    image: "/images/projects/entretenimiento_3.jpg",
    year: "2025",
    details: "Composición flotante con módulos inferiores de apertura push y estantería superior para arte y libros.",
    materials: ["Nogal Canaletto", "Herrajes Blum Tip-On", "Corte 45 Grados", "Puntos Eléctricos Ocultos"]
  },
  {
    id: "entretenimiento-puerto-colombia",
    title: "Panelado Acústico Living Campestre",
    category: "Centros de Entretenimiento",
    location: "Puerto Colombia, Atlántico",
    image: "/images/projects/entretenimiento_4.jpg",
    year: "2026",
    details: "Panel alistonado continuo con aislamiento acústico posterior y barra de sonido empotrada.",
    materials: ["Alistonado Roble", "Manto Acústico", "Consola Suspendida", "Iluminación 2700K"]
  },
  {
    id: "entretenimiento-miramar",
    title: "Centro de Entretenimiento Apartamento",
    category: "Centros de Entretenimiento",
    location: "Miramar, Barranquilla",
    image: "/images/projects/entretenimiento_5.jpg",
    year: "2025",
    details: "Solución compacta y elegante para apartamento, con gavetas para consolas y repisas decorativas.",
    materials: ["Melamina Arena y Blanco", "Correderas Ocultas", "Soporte TV Móvil", "LED Integrado"]
  },

  // 4. DIVISIONES DE BAÑO (5)
  {
    id: "bano-alto-prado",
    title: "División Spa con Puerta Pivotante",
    category: "Divisiones de Baño",
    location: "Alto Prado, Barranquilla",
    image: "/images/projects/bano_1.jpg",
    year: "2026",
    details: "Vidrio templado extra claro de 10mm con bisagras pivotantes y toallero en acero inoxidable negro mate.",
    materials: ["Templado 10mm Extra Claro", "Acero Inox AISI 304", "Sellos Magnéticos", "Tratamiento Antical"]
  },
  {
    id: "bano-el-golf",
    title: "Cerramiento Ducha Sistema Corredizo",
    category: "Divisiones de Baño",
    location: "El Golf, Barranquilla",
    image: "/images/projects/bano_2.jpg",
    year: "2026",
    details: "Sistema corredizo con rodamientos superiores ocultos y freno neumático en ambos extremos.",
    materials: ["Cristal Templado 8mm", "Riel Acero Pulido", "Manijas Embutidas", "Sellado Antifugas"]
  },
  {
    id: "bano-villa-campestre",
    title: "División de Baño Cristal Ahumado Bronce",
    category: "Divisiones de Baño",
    location: "Villa Campestre, Barranquilla",
    image: "/images/projects/bano_3.jpg",
    year: "2025",
    details: "Vidrio templado en tono bronce con perfilería perimetral delgada en latón cepillado.",
    materials: ["Cristal Bronce 8mm", "Perfilería Latón", "Bisagras Hidráulicas", "Vidrio de Seguridad"]
  },
  {
    id: "bano-riomar",
    title: "Mampara Fija Walk-in Minimalista",
    category: "Divisiones de Baño",
    location: "Riomar, Barranquilla",
    image: "/images/projects/bano_4.jpg",
    year: "2025",
    details: "Panel fijo sin puerta con brazo tensor a techo en acero negro mate, ideal para duchas amplias.",
    materials: ["Vidrio Templado 10mm", "Tensor a Techo 304", "Perfil U Embutido", "Acabado Negro Mate"]
  },
  {
    id: "bano-puerto-colombia",
    title: "División Baño Suite Principal Casa Mar",
    category: "Divisiones de Baño",
    location: "Puerto Colombia, Atlántico",
    image: "/images/projects/bano_5.jpg",
    year: "2026",
    details: "Herrajes de grado marino resistentes a la corrosión por salitre y cristales tratados contra gotas de agua.",
    materials: ["Cristal Templado 10mm", "Acero Inoxidable Náutico", "Guías Soft-Close", "Silicona Marina"]
  },

  // 5. PUERTAS & PANELADOS (5)
  {
    id: "puerta-el-golf",
    title: "Puerta Principal Pivotante 3 Metros",
    category: "Puertas & Panelados",
    location: "El Golf, Barranquilla",
    image: "/images/projects/puerta_1.jpg",
    year: "2026",
    details: "Puerta de acceso monumental de una sola hoja en madera teca curada con pivote excéntrico de alta carga.",
    materials: ["Madera Teca Curada", "Pivote Ajustable 3D", "Cerradura Magnética", "Manijón 2.20m"]
  },
  {
    id: "puerta-alto-prado",
    title: "Puertas de Paso Filomuro enrasadas",
    category: "Puertas & Panelados",
    location: "Alto Prado, Barranquilla",
    image: "/images/projects/puerta_2.jpg",
    year: "2026",
    details: "Sistema con marco invisible de aluminio empotrado en la pared, logrando continuidad total con la pintura.",
    materials: ["Marco Invisible Aluminio", "Bisagras Ocultas 3D", "Cerradura Silenciosa", "Hoja Alveolar Maciza"]
  },
  {
    id: "puerta-villa-campestre",
    title: "Puerta Pivotante de Alcoba Principal",
    category: "Puertas & Panelados",
    location: "Villa Campestre, Barranquilla",
    image: "/images/projects/puerta_3.jpg",
    year: "2025",
    details: "Hoja de 1.20m de ancho con acabado en laca poliuretano mate y picaporte magnético.",
    materials: ["Laca Mate Premium", "Pivote Hidráulico", "Madera Estabilizada", "Sello Acústico"]
  },
  {
    id: "puerta-riomar",
    title: "Revestimiento de Muro con Puerta Integrada",
    category: "Puertas & Panelados",
    location: "Riomar, Barranquilla",
    image: "/images/projects/puerta_4.jpg",
    year: "2025",
    details: "Pared panelada en roble que oculta por completo la puerta de acceso al área de servicios.",
    materials: ["Panelado Roble Natural", "Puerta Secreta", "Herrajes Pivotantes", "Alineación Continua"]
  },
  {
    id: "puerta-puerto-colombia",
    title: "Puerta Corrediza Gran Formato Estilo Granero Moderno",
    category: "Puertas & Panelados",
    location: "Puerto Colombia, Atlántico",
    image: "/images/projects/puerta_5.jpg",
    year: "2026",
    details: "Puerta divisoria entre sala y estudio con riel suspendido oculto y acabado en madera texturada.",
    materials: ["Madera Roble Macizo", "Riel Suspendido Amortiguado", "Tirador Embutido", "Guía Inferior Cero Ruido"]
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: "tableros-rh",
    name: "Tableros Hidrófugos RH",
    category: "superficies",
    colorHex: "#57585A",
    description: "Sustratos de madera tratados con resina hidrófuga que impiden la hinchazón por humedad en el clima cálido de Barranquilla.",
    highlights: ["Resistencia comprobada a la humedad", "Corte limpio sin desportillados", "Certificación ambiental"]
  },
  {
    id: "cuarzo-sinterizado",
    name: "Cuarzo & Piedra Sinterizada",
    category: "superficies",
    colorHex: "#E2CDA7",
    description: "Mesones y cubiertas sin porosidad. Inmunes a manchas de limón o grasas, y resistentes al calor directo.",
    highlights: ["Cero absorción de líquidos", "Alta dureza contra rayones", "Juntas milimétricas pulidas"]
  },
  {
    id: "herrajes-blum",
    name: "Sistemas Blum Austria",
    category: "herrajes",
    colorHex: "#888B90",
    description: "Herrajes europeos de gama alta. Bisagras y correderas con cierre suave garantizadas de por vida.",
    highlights: ["Cierre suave silencioso", "Apertura total de gavetas", "Garantía oficial vitalicia"]
  },
  {
    id: "vidrio-seguridad",
    name: "Cristal Templado 8/10mm",
    category: "vidrios",
    colorHex: "#CBC9CA",
    description: "Vidrios de seguridad procesados térmicamente con herrajes en acero inoxidable 304 resistentes al salitre.",
    highlights: ["5 veces más resistente al impacto", "Herrajes inoxidables náuticos", "Fácil mantenimiento"]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "¿Cuál es el tiempo de entrega de una cocina o closet?",
    answer: "Nuestro ciclo de fabricación es de 18 a 25 días hábiles a partir de la aprobación del diseño 3D. La instalación en sitio toma habitualmente entre 2 y 4 días.",
    category: "Tiempos"
  },
  {
    question: "¿La visita técnica en Barranquilla tiene costo?",
    answer: "No. En Barranquilla, Villa Campestre y Puerto Colombia la visita de asesoría y levantamiento de medidas es totalmente gratuita al cotizar tu proyecto.",
    category: "Asesoría"
  },
  {
    question: "¿Qué garantía tienen los muebles?",
    answer: "Ofrecemos 5 años de garantía escrita sobre estructuras y ensamble, más garantía de por vida en herrajes mecánicos Blum.",
    category: "Garantía"
  }
];
