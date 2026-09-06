/**
 * Clean SEO Route Metadata and Schema.org JSON-LD Configuration
 * For Hikari no Matsuri (HNM 2027) & Isshoni Nihongo Club
 *
 * Provides standards-based titles, descriptions, Open Graph data,
 * canonical paths, sitemap config, and valid Schema.org structured data.
 */

export interface RouteSeoConfig {
  path: string;
  title: string;
  description: string;
  ogType: 'website' | 'article' | 'event';
  canonicalPath: string;
  isIndexable: boolean;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  jsonLd: (baseUrl: string) => Record<string, any>;
}

export const FESTIVAL_NAME = 'Hikari no Matsuri (HNM 2027)';
export const CLUB_NAME = 'Isshoni Nihongo (一緒に日本語)';
export const EVENT_DATE = '2027-01-08';
export const EVENT_VENUE = 'Chennai Institute of Technology (CIT), Kundrathur, Chennai, Tamil Nadu, India';

export const SEO_ROUTES: Record<string, RouteSeoConfig> = {
  '/': {
    path: '/',
    title: 'Hikari no Matsuri 2027 (HNM Vol. 3) | Premier Japanese & Anime Cultural Fest',
    description: 'Join Hikari no Matsuri 2027 on January 8, 2027 at Chennai Institute of Technology (CIT). Experience Bon Odori, Cosplay Masquerade, Yatai Food Street, Live J-Rock Anisong, and Japanese Cultural Pavilions.',
    ogType: 'event',
    canonicalPath: '/',
    isIndexable: true,
    changefreq: 'daily',
    priority: 1.0,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'Festival',
      name: 'Hikari no Matsuri 2027 (HNM Vol. 3)',
      alternateName: '光の祭り 2027',
      startDate: '2027-01-08T09:00:00+05:30',
      endDate: '2027-01-08T20:30:00+05:30',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Chennai Institute of Technology (CIT) Campus',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sarathy Nagar, Kundrathur',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
          postalCode: '600069',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.9806,
          longitude: 80.0528,
        },
      },
      image: [
        `${baseUrl}/assets/images/anime_festival_hero_1785824642040.jpg`,
      ],
      description: 'The premier annual Japanese anime, cosplay, music, and cultural festival presented by Isshoni Nihongo and Lumos at CIT Chennai.',
      organizer: {
        '@type': 'Organization',
        name: 'Isshoni Nihongo & Lumos CIT',
        url: `${baseUrl}/club`,
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '99',
        highPrice: '175',
        offerCount: '3',
        url: `${baseUrl}/tickets`,
        availability: 'https://schema.org/InStock',
        validFrom: '2026-09-01T00:00:00+05:30',
      },
      performer: [
        {
          '@type': 'PerformingGroup',
          name: 'The Anisong Project Live Band',
        },
        {
          '@type': 'PerformingGroup',
          name: 'Chennai Cosplay Guild',
        },
      ],
    }),
  },

  '/about': {
    path: '/about',
    title: 'About Hikari no Matsuri 2027 | Origin, Story & Cultural Heritage',
    description: 'Discover the legacy of Hikari no Matsuri at CIT Chennai. Learn about our celebration of Japanese traditions, Bon Odori, tea ceremonies, and cross-cultural community.',
    ogType: 'article',
    canonicalPath: '/about',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 0.9,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      mainEntity: {
        '@type': 'Festival',
        name: 'Hikari no Matsuri 2027',
        description: 'Annual Japanese cultural and anime celebration created to bridge Indian youth and Japanese artistic traditions.',
        organizer: {
          '@type': 'Organization',
          name: 'Isshoni Nihongo (一緒に日本語)',
          url: `${baseUrl}/club`,
        },
      },
    }),
  },

  '/schedule': {
    path: '/schedule',
    title: 'Festival Schedule & Timeline | Hikari no Matsuri 2027',
    description: 'Complete 1-day itinerary for HNM 2027 on January 8, 2027. Timetable for Opening Ceremony, Cosplay Runway, Voice Acting Showcase, Live Band, and Bon Odori finale.',
    ogType: 'event',
    canonicalPath: '/schedule',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 0.85,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Hikari no Matsuri 2027 Stage Itinerary',
      startDate: '2027-01-08T09:00:00+05:30',
      endDate: '2027-01-08T20:30:00+05:30',
      location: {
        '@type': 'Place',
        name: 'CIT Chennai Main Amphitheatre',
      },
      subEvent: [
        {
          '@type': 'Event',
          name: 'Matsuri Taiko Opening & Lighting of Lanterns',
          startDate: '2027-01-08T09:30:00+05:30',
        },
        {
          '@type': 'Event',
          name: 'National Cosplay Masquerade & Runway',
          startDate: '2027-01-08T11:00:00+05:30',
        },
        {
          '@type': 'Event',
          name: 'Live Anisong J-Rock Band Concert',
          startDate: '2027-01-08T17:30:00+05:30',
        },
        {
          '@type': 'Event',
          name: 'Grand Bon Odori Circle Dance & Finale',
          startDate: '2027-01-08T19:30:00+05:30',
        },
      ],
    }),
  },

  '/guests': {
    path: '/guests',
    title: 'Special Guests, Cosplayers & Performers | Hikari no Matsuri 2027',
    description: 'Meet the headliners of HNM 2027: international anime voice artists, championship cosplayers, calligraphy masters, and live J-Rock performers.',
    ogType: 'article',
    canonicalPath: '/guests',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 0.85,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      name: 'Hikari no Matsuri 2027 Featured Guests',
      description: 'Special guest lineup for HNM 2027 anime and Japanese cultural festival.',
    }),
  },

  '/cosplay': {
    path: '/cosplay',
    title: 'Cosplay Masquerade & Championship | Hikari no Matsuri 2027',
    description: 'Participate in the South India Cosplay Championship at HNM 2027. Armor crafting, skits, runway judging criteria, prop safety rules, and cash prizes.',
    ogType: 'event',
    canonicalPath: '/cosplay',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 0.85,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'HNM 2027 Cosplay Championship Masquerade',
      startDate: '2027-01-08T11:00:00+05:30',
      endDate: '2027-01-08T14:00:00+05:30',
      location: {
        '@type': 'Place',
        name: 'CIT Chennai Main Stage',
      },
    }),
  },

  '/videos': {
    path: '/videos',
    title: 'Trailers, Stage Performances & Media | Hikari no Matsuri 2027',
    description: 'Watch cinematic trailers, aftermovies, cosplay performance showcases, and concert reels from previous Hikari no Matsuri festivals.',
    ogType: 'website',
    canonicalPath: '/videos',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.75,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Hikari no Matsuri Video & Trailer Archive',
      description: 'Official video highlights, stage trailers, and aftermovies.',
    }),
  },

  '/recap': {
    path: '/recap',
    title: 'Vol. 2 (2025) Photo Archive & Recap | Hikari no Matsuri',
    description: 'Relive the unforgettable moments from Hikari no Matsuri Vol. 2 in 2025. 2,000+ attendees, 150+ cosplayers, Japanese food street, and stage highlights.',
    ogType: 'article',
    canonicalPath: '/recap',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.75,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Hikari no Matsuri Vol. 2 Gallery',
      description: 'High resolution photo archive from the 2025 edition of Hikari no Matsuri at CIT Chennai.',
    }),
  },

  '/tickets': {
    path: '/tickets',
    title: 'Passes & Registration | Hikari no Matsuri 2027',
    description: 'Reserve entry passes for HNM 2027. Early Bird (₹99), Standard Matsuri Pass (₹150), and VIP All-Access (₹175) via Razorpay secure checkout.',
    ogType: 'website',
    canonicalPath: '/tickets',
    isIndexable: true,
    changefreq: 'daily',
    priority: 0.95,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Hikari no Matsuri 2027 Official Passes',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Early Bird General Pass',
          price: '99',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Standard Matsuri Pass',
          price: '150',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'VIP All-Access Pass',
          price: '175',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      ],
    }),
  },

  '/faq': {
    path: '/faq',
    title: 'Frequently Asked Questions (FAQ) | Hikari no Matsuri 2027',
    description: 'Answers about HNM 2027 passes, transport to CIT Chennai, cosplay prop guidelines, spot registration, and festival timings on January 8, 2027.',
    ogType: 'article',
    canonicalPath: '/faq',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 0.8,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who can attend Hikari no Matsuri 2027?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anyone! HNM is open to all college students, school students, anime fans, cosplayers, Japanese language learners, and general enthusiasts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is the festival held?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Chennai Institute of Technology (CIT) Campus Grounds, Sarathy Nagar, Kundrathur, Chennai, Tamil Nadu 600069.',
          },
        },
        {
          '@type': 'Question',
          name: 'What time does the festival run on January 8, 2027?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gates open at 09:00 AM IST and the celebrations conclude with the Bon Odori circle dance at 08:30 PM IST.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I purchase passes on-spot on January 8?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A limited quota of spot passes will be available at CIT gates, but passes sold out rapidly in previous editions. Online pre-booking via https://hnm3.vercel.app/tickets is strongly advised.',
          },
        },
      ],
    }),
  },

  '/club': {
    path: '/club',
    title: 'Isshoni Nihongo (一緒に日本語) | Japanese Language & Culture Club',
    description: 'CIT Chennai’s premier Japanese language club. JLPT coaching (N5-N1), conversational circles, cultural immersion workshops, and student community portal.',
    ogType: 'website',
    canonicalPath: '/club',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.85,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Isshoni Nihongo (一緒に日本語)',
      url: `${baseUrl}/club`,
      description: 'Japanese language and cultural community based at Chennai Institute of Technology.',
      parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: 'Chennai Institute of Technology',
      },
    }),
  },
};

export function getSeoMetadata(pathname: string, baseUrl: string = 'https://hnm3.vercel.app'): RouteSeoConfig | null {
  const normalized = pathname.replace(/\/$/, '') || '/';
  return SEO_ROUTES[normalized] || null;
}
