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
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/IMG_5622_ca0bir.jpg',
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
    title: 'CINEMATIC SHOOTS',
    category: 'Destination',
    location: 'Shinjuku, Tokyo',
    year: '2025',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786278398/WhatsApp_Image_2026-08-09_at_17.55.58_p2jk9s.jpg',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786277325/final_video-compressed_jm7bql.mp4',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786278398/WhatsApp_Image_2026-08-09_at_17.55.58_p2jk9s.jpg',
      'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786279927/01-compressed_mudu00.mp4',
      'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786290172/gayatri_x_ajinkya_teaser-compressed_gbscub.mp4',
      'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786290761/pranjal_wedding_highlight_4k_-compressed_ugo07p.mp4',
      'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786292068/TEASER_F-compressed_ldy7bq.mp4',
      'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786294245/dimple-_teaser_4k_-compressed_a1fjav.mp4',
      'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786295087/sayaji_hotel--compressed_mqlqqq.mp4'
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
    title: 'DRONE SHOOT',
    category: 'Aerial',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786295461/WhatsApp_Image_2026-08-09_at_22.40.00_toqel3.jpg',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786295331/DJI_0095-compressed_nphdau.mp4',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786295331/DJI_0095-compressed_nphdau.mp4',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786295461/WhatsApp_Image_2026-08-09_at_22.40.00_toqel3.jpg'
    ],
    aspectRatio: 'wide',
    cameraSpecs: 'DJI Mavic 3 Pro | Master 4K HDR',
    filmStock: '4K Aerial Cinematography',
    clientNames: 'Fairytale Frames',
    description: 'Breathtaking 4K aerial drone footage capturing grand architectural landscapes, royal venues, and majestic celebrations.',
    featuredIn: 'Vogue Weddings',
  }
];

export const BEST_CAPTURES: PortfolioItem[] = [
  {
    id: 'best-cap-1',
    title: 'ROYAL HERITAGE',
    category: 'Weddings',
    location: 'Royal Palace, India',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/IMG_5622_ca0bir.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/IMG_5622_ca0bir.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785866523/%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A5%82%E0%A4%B0_%EF%B8%8F._weddingvibes_weddingmoments_indianwedding_weddingrituals_bridegroom_weddingphot_d5otre.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785867313/The_easiest_Yes_and_the_beginning_of_forever._%EF%B8%8F_Engagement_CoupleShoot_LoveStory_Engagem_za1nnm.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785868097/Aniket_x_pallavi_hnyxky.jpg'
    ],
    aspectRatio: 'wide',
    cameraSpecs: 'Sony A1 | 85mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A regal portrait capturing royal heritage, vibrant traditional attire, and timeless elegance.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-2',
    title: 'CELESTIAL MOMENTS',
    category: 'Weddings',
    location: 'Destination Wedding',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/DSC08356_eqdbzt.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/DSC08356_eqdbzt.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/IMG_5622_ca0bir.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785866523/%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A5%82%E0%A4%B0_%EF%B8%8F._weddingvibes_weddingmoments_indianwedding_weddingrituals_bridegroom_weddingphot_d5otre.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Fujifilm Pro 400H',
    clientNames: 'Fairytale Frames',
    description: 'An intimate bridal capture filled with emotional depth, golden light, and authentic passion.',
    featuredIn: 'Harper’s Bazaar Bride',
  },
  {
    id: 'best-cap-3',
    title: 'SILKEN SILHOUETTE',
    category: 'Weddings',
    location: 'Udaipur, Rajasthan',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003975/compressed-KRN07144_lr4l2l.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003975/compressed-KRN07144_lr4l2l.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/DSC08356_eqdbzt.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/IMG_5622_ca0bir.jpg'
    ],
    aspectRatio: 'tall',
    cameraSpecs: 'Leica SL2 | 35mm Summilux-SL',
    filmStock: 'Kodak Tri-X 400',
    clientNames: 'Fairytale Frames',
    description: 'A striking fine-art portrait capturing grace, intricate craftsmanship, and golden sunset tones.',
    featuredIn: 'Brides Magazine',
  },
  {
    id: 'best-cap-4',
    title: 'VALENTINE BLISS',
    category: 'Weddings',
    location: 'Jaipur, Rajasthan',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785867894/468852340_18379839511110187_372767587454749387_n_gxezgn.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785867894/468852340_18379839511110187_372767587454749387_n_gxezgn.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003975/compressed-KRN07144_lr4l2l.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/DSC08356_eqdbzt.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/IMG_5622_ca0bir.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 85mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'An ethereal romantic moment bathed in soft ambient lighting, capturing delicate emotion.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-5',
    title: 'ELEGANCE UNVEILED',
    category: 'Weddings',
    location: 'Palace Estate',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786280044/DSC02292_1_ouie8i.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786280044/DSC02292_1_ouie8i.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785867894/468852340_18379839511110187_372767587454749387_n_gxezgn.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003975/compressed-KRN07144_lr4l2l.jpg'
    ],
    aspectRatio: 'wide',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'An exquisite portrait framing timeless bridal poise, fine embroidery details, and cinematic depth.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-6',
    title: 'FOREVER BEGINS',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785865902/Mohit_x_Pranjal_Forever_starts_here_%EF%B8%8FMemories_made_timeless_by_Fairytale_Frames_Photography..jpg_xkcvu3.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785865902/Mohit_x_Pranjal_Forever_starts_here_%EF%B8%8FMemories_made_timeless_by_Fairytale_Frames_Photography..jpg_xkcvu3.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786280044/DSC02292_1_ouie8i.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785867894/468852340_18379839511110187_372767587454749387_n_gxezgn.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Mohit x Pranjal',
    description: 'Forever starts here—timeless wedding memories captured in rich golden hues and emotional resonance.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-7',
    title: 'GOLDEN ELEGANCE',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869454/653601529_18425943268140436_5194173069579135860_n_gy8xzr.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869454/653601529_18425943268140436_5194173069579135860_n_gy8xzr.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785865902/Mohit_x_Pranjal_Forever_starts_here_%EF%B8%8FMemories_made_timeless_by_Fairytale_Frames_Photography..jpg_xkcvu3.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786280044/DSC02292_1_ouie8i.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 85mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A glowing candid moment capturing pure joy, tradition, and radiant celebratory warmth.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-8',
    title: 'ROYAL GRACE',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291170/KRN08638_vm4xxi.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291170/KRN08638_vm4xxi.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869454/653601529_18425943268140436_5194173069579135860_n_gy8xzr.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785865902/Mohit_x_Pranjal_Forever_starts_here_%EF%B8%8FMemories_made_timeless_by_Fairytale_Frames_Photography..jpg_xkcvu3.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'An enchanting fine-art bridal portrait showcasing timeless royal grace and intricate regal attire.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-9',
    title: 'TIMELESS CELEBRATION',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291167/IMG_2739.JPG_pkjhjy.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291167/IMG_2739.JPG_pkjhjy.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291170/KRN08638_vm4xxi.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869454/653601529_18425943268140436_5194173069579135860_n_gy8xzr.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 85mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A vibrant, unforgettable portrait highlighting festive emotion, royal charm, and timeless elegance.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-10',
    title: 'REGAL SPLENDOR',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291175/IMG_2745.JPG_oxfpxu.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291175/IMG_2745.JPG_oxfpxu.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291167/IMG_2739.JPG_pkjhjy.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291170/KRN08638_vm4xxi.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A breathtaking regal portrait capturing majestic bridal aura and intimate celebration details.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-11',
    title: 'GOLDEN GLOW',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291506/15_unjvw5.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291506/15_unjvw5.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291175/IMG_2745.JPG_oxfpxu.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291167/IMG_2739.JPG_pkjhjy.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A glowing masterpiece reflecting sublime romance and timeless celebration artistry.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-12',
    title: 'PURE ELEGANCE',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291506/03_vwrr0k.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291506/03_vwrr0k.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291506/15_unjvw5.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291175/IMG_2745.JPG_oxfpxu.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 85mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'An ethereal portrait capturing pure emotion, elegant silhouettes, and golden light.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-13',
    title: 'SUBLIME SPLENDOR',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786293622/DSC01508_1_hl6ro5.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786293622/DSC01508_1_hl6ro5.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291506/03_vwrr0k.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291506/15_unjvw5.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A sublime fine-art wedding photograph showcasing regal grandeur, candid laughter, and timeless beauty.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-14',
    title: 'RADIANT EMOTION',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294263/IMG-20260505-WA0006_zch7nl.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294263/IMG-20260505-WA0006_zch7nl.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786293622/DSC01508_1_hl6ro5.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786291506/03_vwrr0k.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A radiant celebratory capture filled with heartfelt warmth, royal elegance, and authentic happiness.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-15',
    title: 'GOLDEN HARMONY',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294263/DSC03334_nhervq.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294263/DSC03334_nhervq.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03522_pcyayr.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03824_vh123x.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'An enchanting portrait bathed in golden warmth, celebrating eternal togetherness and fine-art romance.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-16',
    title: 'ETHEREAL BLISS',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03522_pcyayr.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03522_pcyayr.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294263/DSC03334_nhervq.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03824_vh123x.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 85mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A delicate candid moment capturing blissful romance, intricate details, and royal elegance.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-17',
    title: 'ROYAL NOCTURNE',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03824_vh123x.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03824_vh123x.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/t_phto/SAM_3845_zwuluw.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03522_pcyayr.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A striking portrait highlighting regal splendor, golden evening tones, and intimate connection.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-18',
    title: 'CELESTIAL MOMENT',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/t_phto/SAM_3845_zwuluw.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/t_phto/SAM_3845_zwuluw.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03824_vh123x.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294263/DSC03334_nhervq.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'An unforgettable fine-art capture showcasing grand celebration lights and timeless elegance.',
    featuredIn: 'Vogue Weddings',
  },
  {
    id: 'best-cap-19',
    title: 'ROYAL NOSTALGIA',
    category: 'Weddings',
    location: 'Royal Destination',
    year: '2026',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869481/10_w4m0fq.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785869481/10_w4m0fq.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/t_phto/SAM_3845_zwuluw.jpg',
      'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786294266/DSC03824_vh123x.jpg'
    ],
    aspectRatio: 'portrait',
    cameraSpecs: 'Sony A1 | 50mm f/1.2 GM',
    filmStock: 'Kodak Portra 400',
    clientNames: 'Fairytale Frames',
    description: 'A captivating bridal portrait reflecting timeless nostalgia, intricate heritage embroidery, and royal grace.',
    featuredIn: 'Vogue Weddings',
  },
  PORTFOLIO_ITEMS[0],
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
    thumbnailUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786297553/Screenshot_2026-08-09_231534_o1wa3v.png',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786277325/final_video-compressed_jm7bql.mp4',
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
    thumbnailUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786295863/Screenshot_2026-08-09_224715_xh2hmn.png',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786279927/01-compressed_mudu00.mp4',
    directorNotes: 'Combining 16mm analog reel footage with aerial drone movements over lavender fields at twilight.',
    specs: 'Kodak 16mm Film + RED V-Raptor 8K | Live Acoustic Cello',
    awardBadge: 'Vogue Cinema Selection'
  },
  {
    id: 'film-3',
    title: 'GAYATRI X AJINKYA',
    subtitle: 'A Cinematic Wedding Teaser of Gayatri & Ajinkya',
    location: 'Royal Destination',
    duration: '03:30 Mins',
    thumbnailUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786296152/Screenshot_2026-08-09_225203_z5ffvz.png',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786290172/gayatri_x_ajinkya_teaser-compressed_gbscub.mp4',
    directorNotes: 'An emotional cinematic teaser capturing golden light, regal decor, and tender unscripted moments.',
    specs: 'Sony A1 8K | Custom Score',
    awardBadge: 'Featured Wedding Film'
  },
  {
    id: 'film-4',
    title: 'PRANJAL WEDDING HIGHLIGHT',
    subtitle: '4K Cinematic Wedding Highlight Film',
    location: 'Royal Palace',
    duration: '05:10 Mins',
    thumbnailUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786296249/Screenshot_2026-08-09_225342_nwmkpa.png',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786290761/pranjal_wedding_highlight_4k_-compressed_ugo07p.mp4',
    directorNotes: 'A majestic 4K wedding highlight reel showcasing royal traditions, glowing celebrations, and heartfelt romance.',
    specs: 'Sony A1 8K | Mastered 4K HDR',
    awardBadge: 'Vogue Highlight Selection'
  },
  {
    id: 'film-5',
    title: 'CINEMATIC TEASER',
    subtitle: '4K Fine-Art Cinematic Wedding Film Teaser',
    location: 'Royal Destination',
    duration: '04:10 Mins',
    thumbnailUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786297378/Screenshot_2026-08-09_230907_jm6fjf.png',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786292068/TEASER_F-compressed_ldy7bq.mp4',
    directorNotes: 'A sublime high-contrast cinematic teaser capturing romantic movements, golden twilight hues, and grand architectural beauty.',
    specs: 'Sony A1 8K | Mastered 4K HDR',
    awardBadge: 'Cinema Teaser Selection'
  },
  {
    id: 'film-6',
    title: 'DIMPLE WEDDING TEASER',
    subtitle: '4K Cinematic Wedding Film Teaser of Dimple',
    location: 'Royal Destination',
    duration: '03:45 Mins',
    thumbnailUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786298007/Screenshot_2026-08-09_232247_uwxtrv.png',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786294245/dimple-_teaser_4k_-compressed_a1fjav.mp4',
    directorNotes: 'A captivating 4K wedding teaser capturing heartfelt emotion, regal decorations, and timeless moments.',
    specs: 'Sony A1 8K | Mastered 4K HDR',
    awardBadge: 'Dimple Teaser Selection'
  },
  {
    id: 'film-7',
    title: 'SAYAJI HOTEL HIGHLIGHT',
    subtitle: '4K Cinematic Destination Wedding Film',
    location: 'Sayaji Hotel',
    duration: '04:20 Mins',
    thumbnailUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786298224/Screenshot_2026-08-09_232643_dsefha.png',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786295087/sayaji_hotel--compressed_mqlqqq.mp4',
    directorNotes: 'A breathtaking 4K cinematic highlight capturing opulent venue elegance, joyous traditions, and glowing romance.',
    specs: 'Sony A1 8K | Mastered 4K HDR',
    awardBadge: 'Sayaji Selection'
  },
  {
    id: 'film-8',
    title: 'KIRAN X VAIDIK FILM',
    subtitle: '4K Cinematic Wedding Film of Kiran & Vaidik',
    location: 'Royal Destination',
    duration: '04:45 Mins',
    thumbnailUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786298668/Screenshot_2026-08-09_233345_jcjrth.png',
    videoUrl: 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786298296/kiran_vaidik_final_-compressed_o3jnke.mp4',
    directorNotes: 'A magnificent 4K wedding film capturing tender romance, royal celebrations, and timeless wedding memories.',
    specs: 'Sony A1 8K | Mastered 4K HDR',
    awardBadge: 'Kiran & Vaidik Selection'
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
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003392/compressed-DSC03837_k6nnoz.jpg',
    caption: 'Capturing real emotions and timeless wedding stories. #FairytaleFrames #NashikWeddings #IndianWeddingPhotographer',
    likes: 4820,
    comments: 184,
    permalink: 'https://www.instagram.com/fairytale_frames._?igsh=bDJhc2ZjNWJ3MGpm'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003577/compressed-DSC04451_geuvgj.jpg',
    caption: 'Unscripted joy and cinematic candid moments. #FairytaleFrames #WeddingCinematography #EditorialWeddings',
    likes: 6190,
    comments: 245,
    permalink: 'https://www.instagram.com/fairytale_frames._?igsh=bDJhc2ZjNWJ3MGpm'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003742/compressed-KRN05243_ooroc9.jpg',
    caption: 'Frames that feel like a fairytale dream. #FairytaleFrames #DestinationWeddings #BrideAndGroom',
    likes: 5410,
    comments: 198,
    permalink: 'https://www.instagram.com/fairytale_frames._?igsh=bDJhc2ZjNWJ3MGpm'
  },
  {
    id: 'ig-4',
    imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786003879/compressed-jsjsj_iusoys.jpg',
    caption: 'Elegance in every frame & tradition reimagined. #FairytaleFrames #PreWeddingFilms #LuxuryWeddings',
    likes: 7230,
    comments: 312,
    permalink: 'https://www.instagram.com/fairytale_frames._?igsh=bDJhc2ZjNWJ3MGpm'
  }
];

export const PRESS_LOGOS = [
  { name: 'VOGUE WEDDINGS', subtitle: 'Featured Studio 2024 - 2026' },
  { name: "HARPER'S BAZAAR", subtitle: 'Top World Photographers' },
  { name: 'BRIDES', subtitle: 'Global Luxury Award Winner' },
  { name: 'AWWWARDS', subtitle: 'Site of the Day Winner' },
  { name: 'ELLE BRIDE', subtitle: 'Haute Fashion Spotlight' }
];
