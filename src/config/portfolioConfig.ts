export interface Measurement {
  label: string;
  value: string;
}

export type CategoryTag = 'todos' | 'lingerie' | 'vestidos' | 'swimwear' | 'editorial-pb';

export interface EditorialWork {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  categoryTag: CategoryTag;
  image: string;
  aspectRatio: string;
  span?: string; // Para layout editorial variado (ex: 'col-span-1 md:col-span-2')
  credits: string;
  description: string;
}

export interface PortfolioConfig {
  model: {
    firstName: string;
    lastName: string;
    displayLine1: string; // Linha 1 da Hero (ex: JULIA)
    displayLine2: string; // Linha 2 da Hero (ex: MUTHEU)
    monogram: string;
    profession: string;
    representation: string;
    locations: string[];
    bio: string;
    quote: string;
    measurements: Measurement[];
  };
  contact: {
    bookingEmail: string;
    pressEmail: string;
    instagram: string;
    instagramUrl: string;
    phone: string;
    address: string;
  };
  images: {
    heroCutout: string;
    heroOriginal: string;
    aboutPortrait: string;
  };
  categories: {
    id: CategoryTag;
    label: string;
  }[];
  works: EditorialWork[];
}

export const portfolioConfig: PortfolioConfig = {
  model: {
    firstName: "JULIA",
    lastName: "MUTHEU",
    displayLine1: "JULIA",
    displayLine2: "MUTHEU",
    monogram: "JM",
    profession: "Editorial, Intimates & Runway Model",
    representation: "Vanguard Model Management • Paris / São Paulo / Milan",
    locations: ["Paris", "Milão", "São Paulo", "Nova York"],
    bio: "Julia Mutheu personifica a versatilidade da moda contemporânea — transitando com naturalidade impecável entre a alfaiataria conceitual de alta costura, campanhas sofisticadas de lingerie e biquíni, ensaios intimistas de boudoir e editoriais monocromáticos de vanguarda. Com presença marcante e expressão magnética diante das lentes, é requisitada por marcas de luxo internacionais.",
    quote: "A beleza editorial reside na autenticidade: cada pose, cada textura e cada tecido contam uma história visual única.",
    measurements: [
      { label: "Altura", value: "179 cm / 5'10.5\"" },
      { label: "Busto", value: "82 cm / 32\"" },
      { label: "Cintura", value: "60 cm / 23.5\"" },
      { label: "Quadril", value: "89 cm / 35\"" },
      { label: "Sapatos", value: "39 EU / 8.5 US" },
      { label: "Olhos", value: "Castanho Claro" },
      { label: "Cabelo", value: "Loiro Dourado" },
    ],
  },
  contact: {
    bookingEmail: "booking@juliamutheu.com",
    pressEmail: "press@juliamutheu.com",
    instagram: "@juliamutheu",
    instagramUrl: "https://instagram.com/juliamutheu",
    phone: "+55 11 99876-5432",
    address: "Booking Desk • Jardins, São Paulo / 8ème Arrondissement, Paris",
  },
  images: {
    heroCutout: "/assets/model-cutout.png",
    heroOriginal: "/assets/hero-original.jpg",
    aboutPortrait: "/assets/about-portrait.jpg",
  },
  categories: [
    { id: 'todos', label: 'Todos os Ensaios' },
    { id: 'lingerie', label: 'Lingerie & Intimates' },
    { id: 'vestidos', label: 'Vestidos & Alta Moda' },
    { id: 'swimwear', label: 'Swimwear' },
    { id: 'editorial-pb', label: 'Editorial P&B' },
  ],
  works: [
    {
      id: "work-01",
      title: "Terracota & Linho Rústico",
      subtitle: "Ensaio Intimates No. 01",
      year: "2026",
      category: "Lingerie & Intimates",
      categoryTag: "lingerie",
      image: "/Img/1.jpg",
      aspectRatio: "aspect-[3/4]",
      span: "col-span-1",
      credits: "Fotografia: Studio Vanguarda • Iluminação Natural • Styling Intimates",
      description: "Composição intimista com iluminação natural suave, realçando a renda terracota em contraste com a camisa de linho cru.",
    },
    {
      id: "work-02",
      title: "Silhueta Noir Assimétrica",
      subtitle: "Coleção Beachwear & Linhas Puras",
      year: "2026",
      category: "Swimwear",
      categoryTag: "swimwear",
      image: "/Img/2 (1).jpg",
      aspectRatio: "aspect-[3/4]",
      span: "col-span-1",
      credits: "Campanha Internacional • Direção de Arte: Minimal Atelier",
      description: "Biquíni com recorte assimétrico de ombro único e postura escultural contra a textura de cimento queimado.",
    },
    {
      id: "work-03",
      title: "Crochet Monocromático & Sombra",
      subtitle: "Série Editorial em Preto e Branco",
      year: "2026",
      category: "Editorial P&B",
      categoryTag: "editorial-pb",
      image: "/Img/2 (2).jpg",
      aspectRatio: "aspect-[16/10]",
      span: "col-span-1 md:col-span-2",
      credits: "Fotografia Zenital • Iluminação Dramática • Estudo de Textura",
      description: "Composição horizontal ampla com textura de crochet vazado, granulação cinematográfica e iluminação de alto contraste.",
    },
    {
      id: "work-04",
      title: "Renda Verde Oliva & Robe Seda",
      subtitle: "Linha Loungewear de Luxo",
      year: "2026",
      category: "Lingerie & Intimates",
      categoryTag: "lingerie",
      image: "/Img/2 (3).jpg",
      aspectRatio: "aspect-[3/4]",
      span: "col-span-1",
      credits: "Styling: Maison Privée • Beleza Natural",
      description: "Tons de sálvia e robe em seda pura em ambiente aconchegante de poltrona bouclé e plantas ornamentais.",
    },
    {
      id: "work-05",
      title: "Off-White Clássico & Marfim",
      subtitle: "Campanha Noivas & Delicadeza",
      year: "2026",
      category: "Lingerie & Intimates",
      categoryTag: "lingerie",
      image: "/Img/2 (4).jpg",
      aspectRatio: "aspect-[3/4]",
      span: "col-span-1",
      credits: "Fotografia de Luz de Janela • Ensaio Suíte",
      description: "Renda floral delicada em tonalidade marfim com luz difusa de janela e penteado suave.",
    },
    {
      id: "work-06",
      title: "Descontração & Alta Costura",
      subtitle: "Série Vestidos & Lifestyle",
      year: "2026",
      category: "Vestidos & Alta Moda",
      categoryTag: "vestidos",
      image: "/Img/2 (13).jpg",
      aspectRatio: "aspect-[16/10]",
      span: "col-span-1 md:col-span-2",
      credits: "Lookbook Primavera • Ambientação Retrô Chique",
      description: "Pose editorial espontânea com saia fluida preta longa, top minimalista e poltrona listrada com tote bag.",
    },
    {
      id: "work-07",
      title: "Midnight Blue & Alfaiataria",
      subtitle: "Editorial Conforto Urbano",
      year: "2025",
      category: "Lingerie & Intimates",
      categoryTag: "lingerie",
      image: "/Img/2 (5).jpg",
      aspectRatio: "aspect-[3/4]",
      span: "col-span-1",
      credits: "Studio Noir • Camisa de Linho Oversized",
      description: "Contraste entre o azul petróleo profundo da renda e a camisa de linho ampla desabotoada em pose de chão.",
    },
    {
      id: "work-08",
      title: "Teal Geométrico & Ateliê",
      subtitle: "Série Botânica Studio",
      year: "2025",
      category: "Lingerie & Intimates",
      categoryTag: "lingerie",
      image: "/Img/2 (6).jpg",
      aspectRatio: "aspect-[3/4]",
      span: "col-span-1",
      credits: "Ateliê & Luz de Tarde • Poltrona em Couro Envelhecido",
      description: "Pose clássica de mãos na cintura com conjunto azul-petróleo em iluminação quente de fim de tarde.",
    },
    {
      id: "work-09",
      title: "Bordeaux & Linho Natural",
      subtitle: "Campanha Boudoir Outono",
      year: "2025",
      category: "Lingerie & Intimates",
      categoryTag: "lingerie",
      image: "/Img/2 (7).jpg",
      aspectRatio: "aspect-[16/10]",
      span: "col-span-1 md:col-span-2",
      credits: "Produção de Moda • Cama de Linho Washed",
      description: "Composição horizontal ampla com renda vinho bordô sobre cama de linho claro em postura relaxada e elegante.",
    },
    {
      id: "work-10",
      title: "Terracota & Trança Francesa",
      subtitle: "Lookbook Editorial Intimates",
      year: "2025",
      category: "Lingerie & Intimates",
      categoryTag: "lingerie",
      image: "/Img/2 (8).jpg",
      aspectRatio: "aspect-[3/4]",
      span: "col-span-1",
      credits: "Maquiagem Glow • Ensaio Acolhedor",
      description: "Expressão suave e penteado despojado com trança lateral em tons terrosos quentes e aconchegantes.",
    },
    {
      id: "work-11",
      title: "Vestido & Saia Plissada Minimal",
      subtitle: "Coleção Primavera/Verão",
      year: "2025",
      category: "Vestidos & Alta Moda",
      categoryTag: "vestidos",
      image: "/Img/2 (9).jpg",
      aspectRatio: "aspect-[4/3]",
      span: "col-span-1",
      credits: "Campanha Lookbook • Maison Atelier Paris",
      description: "Contraste geométrico entre a saia maxi estruturada preta, regata branca limpa e ambientação de estúdio.",
    },
    {
      id: "work-12",
      title: "Noir & White Linen Serenity",
      subtitle: "Série Retrato Monocromático",
      year: "2025",
      category: "Editorial P&B",
      categoryTag: "editorial-pb",
      image: "/Img/2 (10).jpg",
      aspectRatio: "aspect-[16/10]",
      span: "col-span-1 md:col-span-2",
      credits: "Fotografia P&B Grão 35mm • Direção de Fotografia Studio",
      description: "Olhar direto e intimista em preto e branco de grão fino e luz dramática lateral sobre lençóis brancos.",
    },
    {
      id: "work-13",
      title: "Seda & Harmonia Terrosa",
      subtitle: "Ensaio Suíte de Luxo",
      year: "2025",
      category: "Lingerie & Intimates",
      categoryTag: "lingerie",
      image: "/Img/2 (11).jpg",
      aspectRatio: "aspect-[3/4]",
      span: "col-span-1",
      credits: "Luz Matinal Dourada • Design Escandinavo",
      description: "Luz dourada da manhã e elegância relaxada em ambiente minimalista de madeira nobre e cabeceira de cama.",
    },
    {
      id: "work-14",
      title: "Minimal Swim Escultural",
      subtitle: "Editorial Linhas & Arquitetura",
      year: "2025",
      category: "Swimwear",
      categoryTag: "swimwear",
      image: "/Img/2 (12).jpg",
      aspectRatio: "aspect-[3/4]",
      span: "col-span-1",
      credits: "Fotografia de Traje de Banho • Luz de Galeria",
      description: "Fotografia frontal completa valorizando as linhas geométricas do traje de banho preto e proporções esculturais.",
    },
  ],
};
