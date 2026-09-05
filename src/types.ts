export type ActiveTab = 'home' | 'journey' | 'experiences' | 'events' | 'resources' | 'about' | 'hnm2026';

export type HnmPageSection = 'hero' | 'about' | 'schedule' | 'activities' | 'tickets' | 'cosplay' | 'vol2-recap' | 'venue' | 'faq';

export interface EventScheduleItem {
  id: string;
  time: string;
  title: string;
  japaneseTitle: string;
  stage: 'Main Stage' | 'Culture Zone' | 'Workshop Area' | 'Cosplay Arena' | 'Culture Arena' | 'Exhibition Hall' | 'Main Courtyard' | 'Workshop Zone' | 'Yatai Alley' | string;
  day?: 1 | 2 | number | string;
  description: string;
  performer?: string;
  tag: 'Performance' | 'Contest' | 'Workshop' | 'Ceremony' | string;
}

export interface TicketTier {
  id: string;
  name: string;
  japaneseName: string;
  price: number;
  period: string;
  popular?: boolean;
  features: string[];
  badge?: string;
}

export interface HnmGalleryItem {
  id: string;
  title: string;
  caption: string;
  year: '2025' | '2026' | '2027' | 'Vol. 2' | 'Vol. 3' | string;
  category: 'Cosplay' | 'Food' | 'Stage' | 'Workshops' | 'Crowd' | string;
  imageUrl: string;
}

export interface SpecialGuest {
  id: string;
  name: string;
  japaneseName: string;
  role: string;
  imageUrl: string;
  bio: string;
  animeWorks: string[];
  day?: string;
  sessionTime?: string;
}

export interface VideoClip {
  id: string;
  title: string;
  category: 'Aftermovie' | 'Cosplay' | 'Performance' | 'Trailer' | string;
  videoUrl?: string;
  embedYoutubeId: string;
  duration: string;
  thumbnailUrl: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  japaneseText?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Tickets' | 'Cosplay' | 'Vendors' | 'Events' | string;
}
