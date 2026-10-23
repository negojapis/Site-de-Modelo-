export interface Measurement {
  label: string;
  value: string;
}

export interface EditorialWork {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  image: string;
  aspectRatio: string;
  credits: string;
  description: string;
}

export interface PortfolioConfig {
  model: {
    firstName: string;
    lastName: string;
    displayLine1: string; // Used for Hero Line 1 (default JULIA or JANE)
    displayLine2: string; // Used for Hero Line 2 (default MUTHEU)
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
    typographyCutout?: string;
  };
  works: EditorialWork[];
}

export const portfolioConfig: PortfolioConfig = {
  model: {
    firstName: "JULIA",
    lastName: "MUTHEU",
    displayLine1: "JULIA",
    displayLine2: "MUTHEU",
    monogram: "JM",
    profession: "Editorial & Runway Model",
    representation: "Vanguard Model Management • Paris / São Paulo / Milan",
    locations: ["Paris", "Milão", "São Paulo", "Nova York"],
    bio: "Julia Mutheu é reconhecida pela sua presença cênica monumental, postura arquitetônica e olhar magnético. Com passagens por editoriais internacionais de alta costura e campanhas minimalistas de vanguarda, personifica a elegância contemporânea de corte impecável e contraste dramático em preto e branco.",
    quote: "A moda não é apenas a roupa que se veste, mas o espaço e o silêncio que a silhueta ocupa diante da lente.",
    measurements: [
      { label: "Altura", value: "179 cm / 5'10.5\"" },
      { label: "Busto", value: "82 cm / 32\"" },
      { label: "Cintura", value: "60 cm / 23.5\"" },
      { label: "Quadril", value: "89 cm / 35\"" },
      { label: "Sapatos", value: "39 EU / 8.5 US" },
      { label: "Olhos", value: "Castanho Escuro" },
      { label: "Cabelo", value: "Castanho Escuro" },
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
    typographyCutout: "/assets/julia-mutheu-extracted.png",
  },
  works: [
    {
      id: "work-01",
      title: "Silhueta Arquitetônica",
      subtitle: "Editorial No. 01 — Alfaiataria Desconstruída",
      year: "2026",
      category: "Capa & Ensaio Editorial",
      image: "/assets/editorial-silhouette.jpg",
      aspectRatio: "aspect-[3/4]",
      credits: "Fotografia: Studio Vanguarda • Styling: Minimal Atelier • Beleza: Studio Noir",
      description: "Exploração de ombros marcados, corte sob medida e proporções monumentais em iluminação de alto contraste.",
    },
    {
      id: "work-02",
      title: "Noir Eyewear & Detalhes",
      subtitle: "Campanha Internacional de Acessórios",
      year: "2026",
      category: "Campanha Comercial",
      image: "/assets/editorial-portrait.jpg",
      aspectRatio: "aspect-[4/5]",
      credits: "Fotografia: Paris Light Works • Direção de Arte: Vanguard Press",
      description: "Close-up focado nas linhas angulares dos óculos de sol geométricos, pele perfeita e brinco escultural.",
    },
    {
      id: "work-03",
      title: "Textura & Riscado de Giz",
      subtitle: "Série Monocromática",
      year: "2025",
      category: "Ensaio de Moda",
      image: "/assets/editorial-tailoring.jpg",
      aspectRatio: "aspect-square",
      credits: "Styling: Alta Costura • Tecidos: Lã Fina & Seda",
      description: "O detalhe do blazer estruturado de risca de giz com gola alta e calça de pregas com mãos nos bolsos.",
    },
    {
      id: "work-04",
      title: "Presença & Postura",
      subtitle: "Lookbook Exclusivo de Vanguarda",
      year: "2025",
      category: "Lookbook",
      image: "/assets/editorial-profile.jpg",
      aspectRatio: "aspect-[3/4]",
      credits: "Fotografia & Iluminação de Estúdio • Milano",
      description: "Composição minimalista ressaltando a simetria facial, atitude sóbria e o corte de cabelo impecável.",
    },
  ],
};
