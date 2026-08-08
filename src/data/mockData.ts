import { PortfolioItem, FeaturedStory, ColorGradeSample, CinematicFilm, Testimonial, InstagramPost } from '../types';

export const HERO_SLIDES = [
  {
    id: 'hero-1',
    title: 'POETRY IN MOTION & LIGHT',
    subtitle: 'High-Society Editorial Wedding Photography & Medium Format Cinematography',
    location: 'Château de Chantilly, France',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=2400',
    tag: 'Haute Couture Romance',
    medium: '35mm Kodak Portra 400 + Hasselblad H6D',
  },
  {
    id: 'hero-2',
    title: 'THE ART OF UNGUARDED EMOTION',
    subtitle: 'Capturing Timeless Heirloom Moments Across the Mediterranean',
    location: 'Villa Balbiano, Lake Como',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=2400',
    tag: 'Destination Wedding',
    medium: 'Arri Alexa Mini LF + Leica M11',
  },
  {
    id: 'hero-3',
    title: 'ELEGANCE PRESERVED IN SILK',
    subtitle: 'Vogue-Style Fashion & Bespoke Bridal Storytelling',
    location: 'Grand Hotel Tremezzo, Amalfi',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=2400',
    tag: 'Editorial Portraiture',
    medium: 'Medium Format Analog Film',
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'WEDDINGS',
    category: 'Weddings',
    location: 'Royal Palace, India',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785866523/%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A5%82%E0%A4%B0_%EF%B8%8F._weddingvibes_weddingmoments_indianwedding_weddingrituals_bridegroom_weddingphot_d5otre.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785866523/%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A5%82%E0%A4%B0_%EF%B8%8F._weddingvibes_weddingmoments_indianwedding_weddingrituals_bridegroom_weddingphot_d5otre.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785867313/The_easiest_Yes_and_the_beginning_of_forever._%EF%B8%8F_Engagement_CoupleShoot_LoveStory_Engagem_za1nnm.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785868097/Aniket_x_pallavi_hnyxky.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785867633/Sanket_X_akshada_gqvrqw.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785867812/In_frame_-_ashwini.deshmukh007_tejasd007_q3ygzt.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785867894/468852340_18379839511110187_372767587454749387_n_gxezgn.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785868012/468958117_18379839514110187_179631270199352313_n_latxgc.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785868262/preweddingphotography_preweddingphotos_preweddingphotoshoots_preweddingphotoshot_preweddin_gq5tn3.jpg'
    ],
    aspectRatio: 'wide',
    cameraSpecs: 'Leica M11 | Summilux 35mm f/1.4',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Mohit & Pranjal',
    description: 'A timeless wedding ritual capturing sacred moments, emotion, and heritage by Fairytale Frames Photography.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'port-2',
    title: 'BABY SHOOT',
    category: 'Fine Art',
    location: 'SoHo District, New York',
    year: '2025',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869483/9_copy_udndwy.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869483/9_copy_udndwy.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869481/06_zaqji8.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869453/622488857_18208030087321994_6605771579631903286_n_go4oti.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785870537/A_beautiful_little_canvas_of_Maharashtrian_culture_and_heritage__hire.kiran__raw.ravina__vire_uiykcl.webp',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869452/%EF%B8%8F_bgzmsl.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869453/Baby_shoot_babyshootingfrankfurt_babyshootingmagdeburg_babyshoot_babyshootingwien_prilaga_fnyxie.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869454/653601529_18425943268140436_5194173069579135860_n_gy8xzr.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Hasselblad 907X | 45mm f/3.5',
    filmStock: 'Ilford HP5 Plus Monochrome',
    clientNames: 'Gallerest Collection',
    description: 'High-contrast black and white architectural study capturing moments of quiet reflection amidst iron cobblestone streets.',
    featuredIn: 'Architectural Digest',
  },
  {
    id: 'port-3',
    title: 'JOY IN MOTION',
    category: 'Weddings',
    location: 'Villa Balbiano, Lake Como',
    year: '2025',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003392/compressed-DSC03837_k6nnoz.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003392/compressed-DSC03837_k6nnoz.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003577/compressed-DSC04451_geuvgj.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003742/compressed-KRN05243_ooroc9.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003879/compressed-jsjsj_iusoys.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003975/compressed-KRN07144_lr4l2l.jpg'
    ],
    aspectRatio: 'wide',
    cameraSpecs: 'Hasselblad H6D-100c | 100mm f/2.2',
    filmStock: '35mm Kodak Portra 400',
    clientNames: 'Camille & Julien',
    description: 'A grand staircase entrance framed by crystal chandeliers and unscripted laughter as the bride and groom descended.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'port-4',
    title: 'RUSHLIGHT',
    category: 'Destination',
    location: 'Shinjuku, Tokyo',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=85&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1528164344705-475426879e0d?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=85&w=1600'
    ],
    aspectRatio: 'wide',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Cinestill 800T',
    clientNames: 'Kenji & Aria',
    description: 'Bespoke twilight streetscape featuring glowing neon signs and golden street lights in motion.',
    featuredIn: "Harper's Bazaar",
  },
  {
    id: 'port-5',
    title: 'TOWARD THE HORIZON',
    category: 'Fine Art',
    location: 'Amalfi Pier, Italy',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&q=85&w=1600'
    ],
    aspectRatio: 'wide',
    cameraSpecs: 'Contax 645 | Zeiss 80mm f/2.0',
    filmStock: 'Kodak Ektar 100',
    clientNames: 'Elena & Matteo',
    description: 'Minimalist coastal photography featuring calm ocean tides extending infinitely toward the golden horizon.',
    featuredIn: 'Kinfolk Magazine',
  },
  {
    id: 'port-6',
    title: 'AURA OF ELEGANZA',
    category: 'Haute Couture',
    location: 'Palazzo Corsini, Florence',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=85&w=1600'
    ],
    aspectRatio: 'tall',
    cameraSpecs: 'Leica SL2 | 90mm f/2 APO',
    filmStock: 'Fuji 400H',
    clientNames: 'Isabella V.',
    description: 'Chiaroscuro lighting and silk bridal drapery in a 16th-century Florentine palace gallery.',
    featuredIn: 'Elle Wedding International',
  }
];

export const FEATURED_STORIES: FeaturedStory[] = [
  {
    id: 'story-1',
    title: 'SOLSTICE AT VILLA BALBIANO',
    subtitle: 'A Three-Day Celebration of Romance & High Art in Lake Como',
    couple: 'Charlotte & William Spencer',
    location: 'Lake Como, Italy',
    date: 'June 21 - 23, 2025',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=2000',
    galleryImages: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=85&w=1600'
    ],
    editorialText: 'Nestled on the western shore of Lake Como, Villa Balbiano provided a breathtaking backdrop for Charlotte & William’s three-day midsummer affair. From a sunset Riva boat cocktail welcome to a midnight fireworks spectacle over the lake, our studio captured every frame using a combination of medium-format analog film and 4K anamorphic cinema glass.',
    vibe: 'Opulent, Romantic, Cinematic, Unhurried',
    filmQuote: '"Maison Lumière didn’t just photograph our wedding; they translated our love into a gallery-worthy film that brought our families to tears."',
    specs: {
      medium: '35mm Film + 4K Anamorphic Cinema',
      duration: '3-Day Full Documentation',
      location: 'Villa Balbiano & Grand Hotel Tremezzo',
      masterPhotographer: 'Jean-Luc Moreau & Elena Vance'
    }
  },
  {
    id: 'story-2',
    title: 'PROVENCE LAVENDER SUNSET',
    subtitle: 'An Organic Fine-Art Celebration Surrounded by Ancient Olive Groves',
    couple: 'Genevieve & Marc de Saint Germain',
    location: 'Gordes, France',
    date: 'August 14, 2025',
    coverImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=85&w=2000',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1600',
      'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&q=85&w=1600'
    ],
    editorialText: 'Under the golden sky of Provence, Genevieve & Marc exchanged vows surrounded by blooming lavender and centuries-old cypress trees. The aesthetic balanced organic French countryside simplicity with haute fashion sophistication.',
    vibe: 'Luminous, Warm, Pastoral Luxury, Sun-Drenched',
    filmQuote: '"Every photograph feels like a painting pulled from a museum wall in Paris."',
    specs: {
      medium: 'Medium Format Film (Kodak Portra 800)',
      duration: '2-Day Celebration',
      location: 'Domaine de Fontenille, Provence',
      masterPhotographer: 'Elena Vance'
    }
  }
];

export const COLOR_GRADE_SAMPLES: ColorGradeSample[] = [
  {
    id: 'cg-1',
    title: 'The Signature Lumière Warm Film Grade',
    location: 'Amalfi Coast, Italy',
    beforeImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1600&sat=-40&con=10', // flatter RAW look simulation
    afterImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1600', // vibrant rich film look
    description: 'Our proprietary color science lifts shadow tones into warm rose gold while retaining organic skin texture and rich emerald greens.',
    filmEmulation: 'Kodak Portra 400 + Custom Master LUT'
  },
  {
    id: 'cg-2',
    title: 'Chiaroscuro Black & White Fine Art',
    location: 'Place Vendôme, Paris',
    beforeImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=85&w=1600&sat=-100',
    afterImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=85&w=1600',
    description: 'Deep velvet shadows paired with luminous highlights that accentuate silk gown drapes and natural facial expressions.',
    filmEmulation: 'Ilford HP5 Plus 400 Grain Profile'
  }
];

export const CINEMATIC_FILMS: CinematicFilm[] = [
  {
    id: 'film-1',
    title: 'ECHOES OF COMO',
    subtitle: 'The 4K Anamorphic Wedding Film of Victoria & Alexander',
    location: 'Bellagio, Lake Como',
    duration: '06:42 Mins',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=2000',
    directorNotes: 'Shot exclusively on Arri Alexa Mini LF with vintage Cooke Anamorphic lenses to create lush bokeh and timeless film texture.',
    specs: 'Arri Alexa Mini LF | Cooke Anamorphic 40mm/75mm | Custom Score',
    awardBadge: 'Awwwards Best Wedding Film 2025'
  },
  {
    id: 'film-2',
    title: 'LES RÊVES DE PROVENCE',
    subtitle: 'A Short Film Celebrating Love in the Heart of the Luberon',
    location: 'Provence, France',
    duration: '04:15 Mins',
    thumbnailUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=85&w=2000',
    directorNotes: 'Combining 16mm analog reel footage with aerial drone movements over lavender fields at twilight.',
    specs: 'Kodak 16mm Film + RED V-Raptor 8K | Live Acoustic Cello',
    awardBadge: 'Vogue Cinema Selection'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    coupleNames: 'Lady Victoria & Lord Charles Sterling',
    eventLocation: 'Ayrshire Castle, Scotland',
    eventType: 'Destination Wedding',
    quote: 'Maison Lumière redefined how we view wedding photography. They moved through our weekend like quiet ghosts, catching moments of pure poetry we didn’t even know happened.',
    fullStorySnippet: 'Featured across 14 editorial pages in Vogue Weddings.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    publication: 'Vogue Weddings Cover Feature',
    rating: 5,
    featuredImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1200'
  },
  {
    id: 'test-2',
    coupleNames: 'Seraphina & Harrison Vance',
    eventLocation: 'Capri, Italy',
    eventType: 'High Society Celebration',
    quote: 'From the crispness of our medium format portraits to the breathtaking 4K film trailer, every single image feels like an investment in art that our children will cherish.',
    fullStorySnippet: 'Featured in Harper’s Bazaar Bride International.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    publication: "Harper's Bazaar",
    rating: 5,
    featuredImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=85&w=1200'
  },
  {
    id: 'test-3',
    coupleNames: 'Camille & Dr. Laurent Dubois',
    eventLocation: 'Château de Versailles, France',
    eventType: 'Haute Gala & Vows',
    quote: 'Their eye for light, fashion, and effortless movement is unparalleled. They captured the true soul of our celebration without ever forcing a single awkward pose.',
    fullStorySnippet: 'Selected for Awwwards Visual Excellence.',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    publication: 'Brides Luxury Issue',
    rating: 5,
    featuredImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1200'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    caption: 'Golden light cascading over Villa Balbiano. Medium format Kodak Portra 400. #MaisonLumiere #LakeComoWedding',
    likes: 4820,
    comments: 184,
    permalink: 'https://instagram.com'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=600',
    caption: 'The art of black & white portraiture. Captured on Leica M11 in Ravello. #VogueWeddings #MonochromeFineArt',
    likes: 6190,
    comments: 245,
    permalink: 'https://instagram.com'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600',
    caption: 'Winter vows in Parisian romance. Silk gown custom fitted by Dior. #ParisWedding #EditorialBrides',
    likes: 5410,
    comments: 198,
    permalink: 'https://instagram.com'
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600',
    caption: 'Alpine silence in St. Moritz. A love story written in the snow. #DestinationWeddings #LuxuryStudio',
    likes: 7230,
    comments: 312,
    permalink: 'https://instagram.com'
  }
];

export const PRESS_LOGOS = [
  { name: 'VOGUE WEDDINGS', subtitle: 'Featured Studio 2024 - 2026' },
  { name: "HARPER'S BAZAAR", subtitle: 'Top World Photographers' },
  { name: 'BRIDES', subtitle: 'Global Luxury Award Winner' },
  { name: 'AWWWARDS', subtitle: 'Site of the Day Winner' },
  { name: 'ELLE BRIDE', subtitle: 'Haute Fashion Spotlight' }
];
