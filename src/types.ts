export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Destination' | 'Haute Couture' | 'Fine Art';
  location: string;
  year: string;
  imageUrl: string;
  videoUrl?: string;
  galleryImages?: string[];
  aspectRatio?: 'tall' | 'wide' | 'square' | 'portrait';
  cameraSpecs?: string;
  filmStock?: string;
  clientNames?: string;
  description: string;
  featuredIn?: string;
}

export interface FeaturedStory {
  id: string;
  title: string;
  subtitle: string;
  couple: string;
  location: string;
  date: string;
  coverImage: string;
  galleryImages: string[];
  editorialText: string;
  vibe: string;
  filmQuote: string;
  specs: {
    medium: string;
    duration: string;
    location: string;
    masterPhotographer: string;
  };
}

export interface ColorGradeSample {
  id: string;
  title: string;
  location: string;
  beforeImage: string; // RAW capture
  afterImage: string; // Signature Film Color Grade
  description: string;
  filmEmulation: string;
}

export interface CinematicFilm {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl?: string; // sample high quality video stream / loop
  directorNotes: string;
  specs: string;
  awardBadge?: string;
}

export interface Testimonial {
  id: string;
  coupleNames: string;
  eventLocation: string;
  eventType: string;
  quote: string;
  fullStorySnippet: string;
  avatarUrl: string;
  publication?: string;
  rating: number;
  featuredImage: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  permalink: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: 'Destination Wedding' | 'Editorial Wedding' | 'Cinematic Film' | 'Haute Fashion Portrait' | 'Private Event';
  eventDate: string;
  eventLocation: string;
  estimatedGuests: string;
  budgetRange?: string;
  howDidYouHear: string;
  visionDetails: string;
}
