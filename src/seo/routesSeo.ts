/**
 * SEO Route Metadata, Structured Data (Schema.org), and Semantic Pre-rendered HTML
 * For Hikari no Matsuri (HNM 2027) & Isshoni Nihongo Club
 */

export interface RouteSeoConfig {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  ogType: 'website' | 'article' | 'event';
  ogImage?: string;
  canonicalPath: string;
  isIndexable: boolean;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  jsonLd: (baseUrl: string) => Record<string, any>;
  prerenderedHtml: (baseUrl: string) => string;
}

export const FESTIVAL_NAME = 'Hikari no Matsuri (HNM 2027)';
export const CLUB_NAME = 'Isshoni Nihongo (一緒に日本語)';
export const EVENT_DATE = '2027-01-08';
export const EVENT_VENUE = 'Chennai Institute of Technology (CIT) Campus Grounds, Kundrathur, Chennai, Tamil Nadu, India';

export const SEO_ROUTES: Record<string, RouteSeoConfig> = {
  '/': {
    path: '/',
    title: 'Hikari no Matsuri 2027 (HNM Vol. 3) | Premier Japanese & Anime Cultural Fest',
    description: 'Join Hikari no Matsuri 2027 on January 8, 2027 at Chennai Institute of Technology (CIT). Experience Bon Odori, Cosplay Masquerade, Yatai Food Street, Live J-Rock Anisong, and Japanese Cultural Pavilions.',
    keywords: [
      'Hikari no Matsuri',
      'HNM 2027',
      'HNM Vol 3',
      'Chennai Institute of Technology',
      'Anime Festival Chennai',
      'Japanese Cultural Festival India',
      'Isshoni Nihongo',
      'Lumos CIT',
      'Cosplay Chennai',
      'Anisong Live Concert',
      'January 8 2027'
    ],
    ogType: 'website',
    canonicalPath: '/',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 1.0,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'Festival',
      name: 'Hikari no Matsuri 2027 (HNM Vol. 3)',
      alternateName: ['光の祭り 2027', 'HNM 2027', 'Hikari no Matsuri Vol. 3'],
      description: 'The premier Japanese and Anime cultural festival organized by Lumos at Chennai Institute of Technology in collaboration with Isshoni Nihongo. Featuring Cosplay Contests, Bon Odori dances, live Anisong music, and authentic Yatai food streets.',
      startDate: '2027-01-08T09:00:00+05:30',
      endDate: '2027-01-08T20:30:00+05:30',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Chennai Institute of Technology (CIT) Exhibition Grounds',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sarathy Nagar, Kundrathur',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
          postalCode: '600069',
          addressCountry: 'IN',
        },
      },
      organizer: {
        '@type': 'Organization',
        name: 'Isshoni Nihongo & Lumos CIT',
        url: `${baseUrl}/club`,
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'General Festival Pass',
          price: '150',
          priceCurrency: 'INR',
          url: `${baseUrl}/tickets`,
          availability: 'https://schema.org/InStock',
          validFrom: '2026-01-01',
        },
        {
          '@type': 'Offer',
          name: 'Premium All-Access Pass',
          price: '175',
          priceCurrency: 'INR',
          url: `${baseUrl}/tickets`,
          availability: 'https://schema.org/InStock',
          validFrom: '2026-01-01',
        },
        {
          '@type': 'Offer',
          name: 'Student Pass',
          price: '99',
          priceCurrency: 'INR',
          url: `${baseUrl}/tickets`,
          availability: 'https://schema.org/InStock',
          validFrom: '2026-01-01',
        },
      ],
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#08080A] text-white p-6 md:p-12 font-sans">
        <header class="max-w-5xl mx-auto mb-10 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase bg-red-950/60 border border-red-500/30 px-3 py-1 rounded-full inline-block mb-3">
            #1 Japanese & Anime Cultural Festival • January 8, 2027
          </span>
          <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            HIKARI NO MATSURI 2027 (光の祭り)
          </h1>
          <p class="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            The grand single-day Japanese language, anime, cosplay, and cultural matsuri hosted at Chennai Institute of Technology (CIT) in collaboration with Isshoni Nihongo.
          </p>
        </header>

        <main id="main-content" class="max-w-5xl mx-auto space-y-12">
          <section class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
              <h2 class="text-xs font-mono text-red-400 uppercase mb-1">Event Date & Time</h2>
              <p class="text-xl font-bold text-white">January 8, 2027</p>
              <p class="text-xs text-zinc-400 mt-1">09:00 AM – 08:30 PM IST</p>
            </div>
            <div class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
              <h2 class="text-xs font-mono text-red-400 uppercase mb-1">Festival Venue</h2>
              <p class="text-xl font-bold text-white">CIT Campus Grounds</p>
              <p class="text-xs text-zinc-400 mt-1">Kundrathur, Chennai, Tamil Nadu</p>
            </div>
            <div class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
              <h2 class="text-xs font-mono text-red-400 uppercase mb-1">Passes & Entry</h2>
              <p class="text-xl font-bold text-emerald-400">Starting from ₹99</p>
              <a href="/tickets" class="text-xs text-red-400 underline font-semibold mt-1 inline-block">Book Festival Passes →</a>
            </div>
          </section>

          <section class="bg-[#121217] border border-red-500/30 p-8 rounded-2xl space-y-4">
            <h2 class="text-2xl font-bold text-white">Festival Highlights & Stages</h2>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Hikari no Matsuri brings authentic Japanese festival traditions together with contemporary anime fandom. Enjoy traditional Bon Odori circle dancing under glowing lanterns, live thunder Taiko drumming, Japanese tea ceremony (Chado), Shodo calligraphy workshops, the high-stakes Akihabara no Quest trivia tournament, and an electric live J-Rock Anisong concert.
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
              <div class="p-3 bg-[#08080A] rounded-xl border border-red-500/20">
                <span class="font-bold text-red-400 block mb-1">Cosplay Runway</span>
                <span class="text-zinc-400">Cash prizes & armor craftsmanship showcase</span>
              </div>
              <div class="p-3 bg-[#08080A] rounded-xl border border-red-500/20">
                <span class="font-bold text-red-400 block mb-1">Yatai Street Food</span>
                <span class="text-zinc-400">Fresh Takoyaki, Dango, and authentic Ramen</span>
              </div>
              <div class="p-3 bg-[#08080A] rounded-xl border border-red-500/20">
                <span class="font-bold text-red-400 block mb-1">Special Guests</span>
                <span class="text-zinc-400">Japanese Consulate diplomats & cosplay icons</span>
              </div>
              <div class="p-3 bg-[#08080A] rounded-xl border border-red-500/20">
                <span class="font-bold text-red-400 block mb-1">Notes of Nippon</span>
                <span class="text-zinc-400">Live band performing iconic anime opening themes</span>
              </div>
            </div>
          </section>

          <nav aria-label="Festival Site Navigation" class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-sm font-bold uppercase tracking-wider text-red-400 mb-4 font-mono">Explore Festival Pages</h2>
            <ul class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <li><a href="/about" class="text-zinc-300 hover:text-red-400 transition-colors">About HNM Festival</a></li>
              <li><a href="/schedule" class="text-zinc-300 hover:text-red-400 transition-colors">Event Schedule & Timings</a></li>
              <li><a href="/guests" class="text-zinc-300 hover:text-red-400 transition-colors">Special Guests & Judges</a></li>
              <li><a href="/cosplay" class="text-zinc-300 hover:text-red-400 transition-colors">Cosplay Masquerade</a></li>
              <li><a href="/tickets" class="text-zinc-300 hover:text-red-400 transition-colors">Reserve Festival Passes</a></li>
              <li><a href="/videos" class="text-zinc-300 hover:text-red-400 transition-colors">Festival Trailers & Videos</a></li>
              <li><a href="/recap" class="text-zinc-300 hover:text-red-400 transition-colors">Vol. 2 (2025) Gallery</a></li>
              <li><a href="/faq" class="text-zinc-300 hover:text-red-400 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="/club" class="text-zinc-300 hover:text-red-400 transition-colors">Isshoni Nihongo Club Portal</a></li>
            </ul>
          </nav>
        </main>
      </div>
    `,
  },

  '/about': {
    path: '/about',
    title: 'About Hikari no Matsuri 2027 | Japanese Culture & Anime Festival',
    description: 'Discover the cultural mission, pillars, and story behind Hikari no Matsuri (HNM 2027) organized by Lumos CIT and Isshoni Nihongo Japanese Language Club.',
    keywords: ['About HNM', 'Japanese Culture Chennai', 'Tea Ceremony', 'Taiko Drums', 'Isshoni Nihongo', 'Lumos CIT', 'Kizuna Theme'],
    ogType: 'article',
    canonicalPath: '/about',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.9,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Hikari no Matsuri 2027',
      description: 'The story, cultural mission, and pillars of Hikari no Matsuri Japanese Cultural Festival at Chennai Institute of Technology.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Isshoni Nihongo',
        url: `${baseUrl}/club`,
      },
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#08080A] text-white p-6 md:p-12 font-sans">
        <header class="max-w-4xl mx-auto mb-8 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Cultural Heritage & Modern Fandom</span>
          <h1 class="text-3xl md:text-5xl font-extrabold mt-2 mb-4">ABOUT HIKARI NO MATSURI (光の祭り)</h1>
          <p class="text-zinc-300 max-w-2xl mx-auto">
            Honoring unbreakable bonds (絆 - Kizuna) through Japanese arts, traditions, and youth pop culture.
          </p>
        </header>
        <main id="main-content" class="max-w-4xl mx-auto space-y-8">
          <section class="bg-[#121217] border border-red-500/30 p-8 rounded-2xl">
            <h2 class="text-2xl font-bold mb-3">Our Mission</h2>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Founded as a collaborative initiative between Lumos (the student community of Chennai Institute of Technology) and Isshoni Nihongo (the premier Japanese language and culture club), Hikari no Matsuri celebrates the deep cultural ties between Japan and India. The festival brings together over 5,000 attendees, diplomatic delegates, language learners, and anime fans for an immersive celebration.
            </p>
          </section>
          <section class="bg-[#121217] border border-red-500/30 p-8 rounded-2xl">
            <h2 class="text-2xl font-bold mb-4">Traditional Cultural Pillars</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-[#08080A] rounded-xl border border-red-500/20">
                <h3 class="font-bold text-red-400 text-base mb-1">Chado (茶道) - The Way of Tea</h3>
                <p class="text-zinc-400">Masterful matcha preparation, mindful hospitality, and traditional Japanese sweets tasting.</p>
              </div>
              <div class="p-4 bg-[#08080A] rounded-xl border border-red-500/20">
                <h3 class="font-bold text-red-400 text-base mb-1">Taiko Drums (和太鼓)</h3>
                <p class="text-zinc-400">Thunderous rhythmic drum performances embodying ancient festival spirit and energetic discipline.</p>
              </div>
              <div class="p-4 bg-[#08080A] rounded-xl border border-red-500/20">
                <h3 class="font-bold text-red-400 text-base mb-1">Shodo Calligraphy (書道)</h3>
                <p class="text-zinc-400">Expressive kanji brushwork guided by certified Japanese instructors and student scholars.</p>
              </div>
              <div class="p-4 bg-[#08080A] rounded-xl border border-red-500/20">
                <h3 class="font-bold text-red-400 text-base mb-1">Yukata Dressing & Photography</h3>
                <p class="text-zinc-400">Authentic cotton summer kimono try-ons with festive wooden geta footwear and traditional fan accessories.</p>
              </div>
            </div>
          </section>
          <div class="text-center pt-4">
            <a href="/tickets" class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-sm transition-colors">
              Reserve Your Festival Pass →
            </a>
          </div>
        </main>
      </div>
    `,
  },

  '/schedule': {
    path: '/schedule',
    title: 'HNM 2027 Schedule & Timings | All Stages & Events (Jan 8, 2027)',
    description: 'View the complete timeline and stage schedule for Hikari no Matsuri 2027 on January 8, 2027. Inauguration, Cosplay Championship, Bon Odori, and Anisong concerts.',
    keywords: ['HNM Schedule', 'Festival Timings', 'CIT Chennai Events', 'Cosplay Contest Time', 'Anisong Concert Time', 'Bon Odori Schedule'],
    ogType: 'event',
    canonicalPath: '/schedule',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 0.9,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'Schedule',
      name: 'Hikari no Matsuri 2027 Full Day Schedule',
      startDate: '2027-01-08T09:00:00+05:30',
      endDate: '2027-01-08T20:30:00+05:30',
      description: 'Detailed stage timeline for HNM Vol. 3 including Cosplay Contest, Live Band, Lantern Parade, and Workshops.',
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#08080A] text-white p-6 md:p-12 font-sans">
        <header class="max-w-4xl mx-auto mb-8 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Single-Day Festival Timeline</span>
          <h1 class="text-3xl md:text-5xl font-extrabold mt-2 mb-4">HNM 2027 EVENT SCHEDULE</h1>
          <p class="text-zinc-300">Friday, January 8, 2027 • 09:00 AM to 08:30 PM IST • Chennai Institute of Technology</p>
        </header>
        <main id="main-content" class="max-w-4xl mx-auto">
          <div class="bg-[#121217] border border-red-500/30 p-6 md:p-8 rounded-2xl overflow-x-auto">
            <table class="w-full text-left text-sm" aria-label="HNM 2027 Timeline Table">
              <thead>
                <tr class="border-b border-red-500/30 text-red-400 font-mono text-xs uppercase">
                  <th class="py-3 px-4">Time</th>
                  <th class="py-3 px-4">Event Title</th>
                  <th class="py-3 px-4">Stage / Zone</th>
                  <th class="py-3 px-4">Category</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-800 text-zinc-300">
                <tr><td class="py-3.5 px-4 font-mono text-red-400">09:30 AM</td><td class="py-3.5 px-4 font-bold text-white">Inauguration & Japanese Delegate Address</td><td class="py-3.5 px-4">Main Stage</td><td class="py-3.5 px-4">Ceremony</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">10:30 AM</td><td class="py-3.5 px-4 font-bold text-white">Notes of Nippon - Live Anisong Band</td><td class="py-3.5 px-4">Main Stage</td><td class="py-3.5 px-4">Performance</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">11:30 AM</td><td class="py-3.5 px-4 font-bold text-white">Akihabara no Quest (Anime Quiz Tournament)</td><td class="py-3.5 px-4">Culture Arena</td><td class="py-3.5 px-4">Contest</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">12:30 PM</td><td class="py-3.5 px-4 font-bold text-white">NIHON TRIVIA & Shodo Calligraphy Class</td><td class="py-3.5 px-4">Workshop Zone</td><td class="py-3.5 px-4">Workshop</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">01:30 PM</td><td class="py-3.5 px-4 font-bold text-white">O-Talku Zone! & NIHON DIVE Virtual Booth</td><td class="py-3.5 px-4">Exhibition Hall</td><td class="py-3.5 px-4">Workshop</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">02:30 PM</td><td class="py-3.5 px-4 font-bold text-white">MANGAMIND & Speech Contest</td><td class="py-3.5 px-4">Culture Arena</td><td class="py-3.5 px-4">Contest</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">03:30 PM</td><td class="py-3.5 px-4 font-bold text-white">ANIFLIX LOUNGE Screenings & Kendo Demo</td><td class="py-3.5 px-4">Main Stage</td><td class="py-3.5 px-4">Performance</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">04:30 PM</td><td class="py-3.5 px-4 font-bold text-white">Grand COSPLAY CONTEST Championship</td><td class="py-3.5 px-4">Main Stage</td><td class="py-3.5 px-4">Contest</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">06:30 PM</td><td class="py-3.5 px-4 font-bold text-white">Lantern Parade, Yatai Games & Bon Odori</td><td class="py-3.5 px-4">Main Courtyard</td><td class="py-3.5 px-4">Ceremony</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">07:45 PM</td><td class="py-3.5 px-4 font-bold text-white">Awards Ceremony, Grand Raffle & Closing Lights</td><td class="py-3.5 px-4">Main Stage</td><td class="py-3.5 px-4">Ceremony</td></tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    `,
  },

  '/guests': {
    path: '/guests',
    title: 'HNM 2027 Special Guests & Judges | Japanese Dignitaries & Cosplayers',
    description: 'Meet the esteemed guests of Hikari no Matsuri 2027: Consul General of Japan Taga Masayuki san, Japan Foundation directors, international cosplay judges, and character hosts.',
    keywords: ['HNM Guests', 'Consul General of Japan', 'Taga Masayuki', 'Japan Foundation', 'Cosplay Judges', 'Yuki Kuran'],
    ogType: 'article',
    canonicalPath: '/guests',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.8,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      name: 'Special Guests of Hikari no Matsuri 2027',
      description: 'Diplomatic chief guests, cultural leaders, and award-winning cosplay judges appearing at HNM 2027.',
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#08080A] text-white p-6 md:p-12 font-sans">
        <header class="max-w-4xl mx-auto mb-8 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Diplomats & Artists</span>
          <h1 class="text-3xl md:text-5xl font-extrabold mt-2 mb-4">SPECIAL FESTIVAL GUESTS</h1>
          <p class="text-zinc-300">Distinguished diplomatic delegates and renowned artists headlining HNM 2027.</p>
        </header>
        <main id="main-content" class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-xl font-bold text-white">Taga Masayuki san (多賀 政幸 氏)</h2>
            <p class="text-xs font-mono text-red-400 mt-1 mb-3">Consul General of Japan (Chief Guest)</p>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Consul General of Japan, honored chief guest strengthening cultural diplomacy, Indo-Japanese exchange, and youth community engagement. Keynote address at 09:30 AM Main Stage Inauguration.
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-xl font-bold text-white">Sonu Gupta san (ソヌ グプタ 氏)</h2>
            <p class="text-xs font-mono text-red-400 mt-1 mb-3">Assistant Director, Japan Foundation New Delhi</p>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Spearheading Japanese language learning programs, JLPT resources, and cultural initiatives across Indian institutions.
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-xl font-bold text-white">Yuki Kuran (幸 蔵人)</h2>
            <p class="text-xs font-mono text-red-400 mt-1 mb-3">International Cosplay Championship Judge</p>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Award-winning cosplayer with over 8 years of armor crafting experience. Judging the 04:30 PM Grand Cosplay Runway.
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-xl font-bold text-white">Moe Moe Maid Cafe Crew (萌えカフェ)</h2>
            <p class="text-xs font-mono text-red-400 mt-1 mb-3">Akihabara Maid Cafe & O-Talku Lounge Host</p>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Bringing authentic Akihabara hospitality, matcha latte art, O-Talku Zone games, and cute omurice performances.
            </p>
          </article>
        </main>
      </div>
    `,
  },

  '/cosplay': {
    path: '/cosplay',
    title: 'HNM 2027 Cosplay Championship & Masquerade | Rules & Registration',
    description: 'Enter the Grand Cosplay Contest at Hikari no Matsuri 2027. Compete for trophies, cash prizes, and recognition across armor, prop, and performance categories.',
    keywords: ['Cosplay Contest Chennai', 'HNM Cosplay', 'Anime Costume Competition', 'Cosplay Rules', 'CIT Cosplay Masquerade'],
    ogType: 'article',
    canonicalPath: '/cosplay',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 0.9,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'HNM 2027 Grand Cosplay Championship',
      startDate: '2027-01-08T16:30:00+05:30',
      endDate: '2027-01-08T18:30:00+05:30',
      description: 'The premier cosplay masquerade runway where armor crafters and performers compete for trophies and cash prizes.',
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#08080A] text-white p-6 md:p-12 font-sans">
        <header class="max-w-4xl mx-auto mb-8 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Runway & Masquerade</span>
          <h1 class="text-3xl md:text-5xl font-extrabold mt-2 mb-4">GRAND COSPLAY CHAMPIONSHIP</h1>
          <p class="text-zinc-300">Showcase your anime, manga, and game character creations on the HNM 2027 Main Stage.</p>
        </header>
        <main id="main-content" class="max-w-4xl mx-auto space-y-8">
          <section class="bg-[#121217] border border-red-500/30 p-8 rounded-2xl space-y-4">
            <h2 class="text-2xl font-bold">Championship Details</h2>
            <p class="text-sm text-zinc-300 leading-relaxed">
              The HNM Cosplay Championship gathers the most dedicated cosplayers, armor builders, and stage performers in South India. Participants are evaluated on costume accuracy, craftsmanship, stage presence, and creative prop construction by international judges.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
              <div class="p-4 bg-[#08080A] rounded-xl border border-red-500/20">
                <span class="font-bold text-red-400 block text-sm mb-1">Armor & Prop Category</span>
                <span class="text-zinc-400">Judging foam fabrication, 3D print work, wiring, and detailing.</span>
              </div>
              <div class="p-4 bg-[#08080A] rounded-xl border border-red-500/20">
                <span class="font-bold text-red-400 block text-sm mb-1">Needlework & Tailoring</span>
                <span class="text-zinc-400">Judging stitch quality, fabric choice, wig styling, and accuracy.</span>
              </div>
              <div class="p-4 bg-[#08080A] rounded-xl border border-red-500/20">
                <span class="font-bold text-red-400 block text-sm mb-1">Stage Skit & Walk</span>
                <span class="text-zinc-400">Judging in-character dialogue, choreography, and audience impact.</span>
              </div>
            </div>
          </section>
          <div class="text-center">
            <a href="/tickets" class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-sm transition-colors">
              Get Premium Pass (Includes Contest Entry) →
            </a>
          </div>
        </main>
      </div>
    `,
  },

  '/videos': {
    path: '/videos',
    title: 'HNM 2027 Official Trailers & Videos | Live Highlights & Aftermovies',
    description: 'Watch official trailers, aftermovies, taiko performances, and live stage clips from Hikari no Matsuri archived at hnmvol2.com and CIT.',
    keywords: ['HNM Videos', 'Anime Festival Aftermovie', 'Taiko Performance Video', 'Cosplay Runway Video'],
    ogType: 'article',
    canonicalPath: '/videos',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.7,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'VideoGallery',
      name: 'Hikari no Matsuri Video Highlights',
      description: 'Official aftermovies and performance videos from HNM.',
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#08080A] text-white p-6 md:p-12 font-sans">
        <header class="max-w-4xl mx-auto mb-8 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Promotional Media</span>
          <h1 class="text-3xl md:text-5xl font-extrabold mt-2 mb-4">FESTIVAL VIDEOS & TRAILERS</h1>
          <p class="text-zinc-300">Relive the lantern illumination, high-octane stage energy, and unforgettable festival moments.</p>
        </header>
        <main id="main-content" class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-lg font-bold text-white mb-2">HNM Vol. 2 Official Festival Teaser & Recap</h2>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Relive the electric energy, lantern lights, and vibrant cosplay energy from HNM 2024/2025 archived at hnmvol2.com.
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-lg font-bold text-white mb-2">Thunder Taiko Drum Ensemble Live Opening</h2>
            <p class="text-xs text-zinc-400 leading-relaxed">
              High-octane traditional drum performance echoing authentic Japanese rhythm and festival spirit.
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-lg font-bold text-white mb-2">Cosplay Masquerade Runway Championship</h2>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Sensational anime costume craft, prop mastery, and character skits live on the HNM main stage.
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-lg font-bold text-white mb-2">Anisong & J-Rock Live Band Concert</h2>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Crowd singing along to legendary opening themes from Demon Slayer, Jujutsu Kaisen, and Naruto.
            </p>
          </article>
        </main>
      </div>
    `,
  },

  '/recap': {
    path: '/recap',
    title: 'HNM Vol. 2 Retrospective & Photo Gallery | Festival History',
    description: 'Explore the photo archive and milestone recap of Hikari no Matsuri Vol. 2, welcoming over 2,800 attendees, diplomatic guests, and 20+ flagship events.',
    keywords: ['HNM Recap', 'HNM Vol 2', 'hnmvol2.com', 'Festival Archive', 'CIT Japanese Fest Gallery'],
    ogType: 'article',
    canonicalPath: '/recap',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.7,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Hikari no Matsuri Vol. 2 Gallery',
      description: 'Historical photos and stats from the landmark HNM Vol. 2 festival at CIT.',
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#08080A] text-white p-6 md:p-12 font-sans">
        <header class="max-w-4xl mx-auto mb-8 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Archived Milestones</span>
          <h1 class="text-3xl md:text-5xl font-extrabold mt-2 mb-4">HNM VOL. 2 RECAP & GALLERY</h1>
          <p class="text-zinc-300">Celebrating our rich history and unforgettable community turnout at hnmvol2.com.</p>
        </header>
        <main id="main-content" class="max-w-4xl mx-auto space-y-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div class="bg-[#121217] border border-red-500/30 p-4 rounded-xl">
              <span class="text-2xl font-bold text-red-400">2,800+</span>
              <p class="text-xs text-zinc-400 mt-1">Festival Attendees</p>
            </div>
            <div class="bg-[#121217] border border-red-500/30 p-4 rounded-xl">
              <span class="text-2xl font-bold text-red-400">150+</span>
              <p class="text-xs text-zinc-400 mt-1">Active Cosplayers</p>
            </div>
            <div class="bg-[#121217] border border-red-500/30 p-4 rounded-xl">
              <span class="text-2xl font-bold text-red-400">20+</span>
              <p class="text-xs text-zinc-400 mt-1">Flagship Events</p>
            </div>
            <div class="bg-[#121217] border border-red-500/30 p-4 rounded-xl">
              <span class="text-2xl font-bold text-red-400">₹50,000+</span>
              <p class="text-xs text-zinc-400 mt-1">Prize Pool Awarded</p>
            </div>
          </div>
        </main>
      </div>
    `,
  },

  '/tickets': {
    path: '/tickets',
    title: 'HNM 2027 Festival Passes & Tickets | General, Premium & Student Passes',
    description: 'Book passes for Hikari no Matsuri 2027 (Jan 8, 2027). General Pass ₹150, Premium All-Access ₹175, Student Pass ₹99. Razorpay instant checkout with UPI, Cards & NetBanking.',
    keywords: ['HNM Tickets', 'Festival Passes', 'Buy Anime Fest Tickets', 'General Pass ₹150', 'Premium Pass ₹175', 'Razorpay Checkout HNM'],
    ogType: 'website',
    canonicalPath: '/tickets',
    isIndexable: true,
    changefreq: 'daily',
    priority: 0.95,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Hikari no Matsuri 2027 Passes & Ticketing',
      startDate: '2027-01-08T09:00:00+05:30',
      endDate: '2027-01-08T20:30:00+05:30',
      location: {
        '@type': 'Place',
        name: 'Chennai Institute of Technology Campus (CIT)',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'General Festival Pass',
          price: '150',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${baseUrl}/tickets`,
        },
        {
          '@type': 'Offer',
          name: 'Premium All-Access Pass',
          price: '175',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${baseUrl}/tickets`,
        },
        {
          '@type': 'Offer',
          name: 'Student Pass',
          price: '99',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${baseUrl}/tickets`,
        },
      ],
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#08080A] text-white p-6 md:p-12 font-sans">
        <header class="max-w-4xl mx-auto mb-8 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Single-Day Event Passes • January 8, 2027</span>
          <h1 class="text-3xl md:text-5xl font-extrabold mt-2 mb-4">FESTIVAL PASS TIERS & BOOKING</h1>
          <p class="text-zinc-300">Choose your festival pass to secure entry, fast-track access, and workshop seats.</p>
        </header>
        <main id="main-content" class="max-w-5xl mx-auto space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl space-y-4">
              <span class="text-xs font-mono text-red-400 font-bold">Standard Tier</span>
              <h2 class="text-xl font-bold text-white">Student / Early Bird Pass</h2>
              <div class="text-3xl font-mono font-bold text-white">₹99</div>
              <ul class="text-xs text-zinc-300 space-y-2 list-disc list-inside">
                <li>Single Day Entry on January 8, 2027</li>
                <li>Main Stage & Yatai Alley Access</li>
                <li>Akihabara no Quest Spectator</li>
                <li>Digital Certificate of Participation</li>
              </ul>
            </article>
            <article class="bg-[#121217] border-2 border-red-500 p-6 rounded-2xl space-y-4 relative shadow-lg shadow-red-500/10">
              <span class="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded uppercase">Most Popular</span>
              <h2 class="text-xl font-bold text-white">General Festival Pass</h2>
              <div class="text-3xl font-mono font-bold text-red-400">₹150</div>
              <ul class="text-xs text-zinc-300 space-y-2 list-disc list-inside">
                <li>Full Festival Day Access (Jan 8, 2027)</li>
                <li>Akihabara no Quest (Anime Quiz Entry)</li>
                <li>O-Talku Zone & Notes of Nippon Concert</li>
                <li>Artist Alley & Anime Weeb Shop</li>
                <li>Yatai Street Food Alley Access</li>
                <li>Digital Certificate of Participation</li>
              </ul>
            </article>
            <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl space-y-4">
              <span class="text-xs font-mono text-red-400 font-bold">VIP Tier</span>
              <h2 class="text-xl font-bold text-white">Premium All-Access Pass</h2>
              <div class="text-3xl font-mono font-bold text-white">₹175</div>
              <ul class="text-xs text-zinc-300 space-y-2 list-disc list-inside">
                <li>ALL General Pass Benefits included</li>
                <li>Exclusive Entry to ANIFLIX LOUNGE</li>
                <li>NIHON DIVE (Virtual Japan Experience)</li>
                <li>Official COSPLAY CONTEST Entry Ticket</li>
                <li>NIHON TRIVIA, MANGAMIND & SPEECH CONTEST</li>
                <li>VIP Front Seat Access for Main Stage Shows</li>
              </ul>
            </article>
          </div>
          <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl text-center space-y-2 text-xs text-zinc-400">
            <p class="text-zinc-200 font-bold">Secure Payment Gateway Powered by Razorpay</p>
            <p>Supports UPI (Google Pay, PhonePe, Paytm), Debit & Credit Cards, and NetBanking with instant digital QR ticket issuance.</p>
          </div>
        </main>
      </div>
    `,
  },

  '/faq': {
    path: '/faq',
    title: 'HNM 2027 FAQ & Venue Rules | Important Questions Answered',
    description: 'Find answers to frequently asked questions about Hikari no Matsuri 2027: venue directions, entry guidelines, ticket differences, cosplay rules, and food policies.',
    keywords: ['HNM FAQ', 'Festival Rules', 'CIT Chennai Directions', 'Cosplay Props Policy', 'Pass Difference', 'Event Queries'],
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
          name: 'What is Hikari no Matsuri (HNM)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hikari no Matsuri (光の祭り) is the flagship Japanese x Anime cultural festival organized by Lumos (student community of Chennai Institute of Technology) in collaboration with Isshoni Nihongo. Check out our archive at hnmvol2.com!',
          },
        },
        {
          '@type': 'Question',
          name: 'When and where is HNM Vol. 3 taking place?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HNM Vol. 3 takes place on January 8, 2027 at Chennai Institute of Technology (CIT) Campus Grounds. Doors open at 09:00 AM IST.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between General Pass (₹150) and Premium All-Access Pass (₹175)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The General Pass (₹150) gives full festival day entry, Akihabara no Quest, O-Talku Zone, Notes of Nippon concert, and Artist Alley. The Premium Pass (₹175) adds exclusive access to the ANIFLIX LOUNGE, NIHON DIVE, COSPLAY CONTEST registration, MANGAMIND, NIHON TRIVIA, SPEECH CONTEST, and VIP front stage seating.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I participate in the COSPLAY CONTEST?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cosplay Contest entry is included with the Premium All-Access Pass (₹175). Simply reserve a Premium pass and register your character on our Cosplay Page!',
          },
        },
        {
          '@type': 'Question',
          name: 'What events are available at HNM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Events include Akihabara no Quest (Anime Quiz), Notes of Nippon (Music), ANIFLIX LOUNGE (Screenings), NIHON DIVE (Virtual Japan), MANGAMIND, Speech Contest, Cosplay Championship, Bon Odori Dance, Lantern Parade, Kendo, Shodo Calligraphy, and Yatai Street Food!',
          },
        },
      ],
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#08080A] text-white p-6 md:p-12 font-sans">
        <header class="max-w-4xl mx-auto mb-8 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Knowledge Base</span>
          <h1 class="text-3xl md:text-5xl font-extrabold mt-2 mb-4">FREQUENTLY ASKED QUESTIONS</h1>
          <p class="text-zinc-300">All you need to know before attending Hikari no Matsuri on January 8, 2027.</p>
        </header>
        <main id="main-content" class="max-w-4xl mx-auto space-y-6">
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-lg font-bold text-red-400 mb-2">What is Hikari no Matsuri (HNM)?</h2>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Hikari no Matsuri (光の祭り) is the flagship Japanese x Anime cultural festival organized by Lumos (student community of Chennai Institute of Technology) in collaboration with Isshoni Nihongo. Check out our archive at hnmvol2.com!
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-lg font-bold text-red-400 mb-2">When and where is HNM Vol. 3 taking place?</h2>
            <p class="text-sm text-zinc-300 leading-relaxed">
              HNM Vol. 3 takes place on January 8, 2027 at Chennai Institute of Technology (CIT) Campus Grounds. Doors open at 09:00 AM IST.
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-lg font-bold text-red-400 mb-2">What is the difference between General Pass (₹150) and Premium All-Access Pass (₹175)?</h2>
            <p class="text-sm text-zinc-300 leading-relaxed">
              The General Pass (₹150) gives full festival day entry, Akihabara no Quest, O-Talku Zone, Notes of Nippon concert, and Artist Alley. The Premium Pass (₹175) adds exclusive access to the ANIFLIX LOUNGE, NIHON DIVE, COSPLAY CONTEST registration, MANGAMIND, NIHON TRIVIA, SPEECH CONTEST, and VIP front stage seating.
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-lg font-bold text-red-400 mb-2">How do I participate in the COSPLAY CONTEST?</h2>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Cosplay Contest entry is included with the Premium All-Access Pass (₹175). Simply reserve a Premium pass and register your character on our Cosplay Page!
            </p>
          </article>
          <article class="bg-[#121217] border border-red-500/30 p-6 rounded-2xl">
            <h2 class="text-lg font-bold text-red-400 mb-2">What events are available at HNM?</h2>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Events include Akihabara no Quest (Anime Quiz), Notes of Nippon (Music), ANIFLIX LOUNGE (Screenings), NIHON DIVE (Virtual Japan), MANGAMIND, Speech Contest, Cosplay Championship, Bon Odori Dance, Lantern Parade, Kendo, Shodo Calligraphy, and Yatai Street Food!
            </p>
          </article>
        </main>
      </div>
    `,
  },

  '/club': {
    path: '/club',
    title: 'Isshoni Nihongo (一緒に日本語) | Japanese Language & Cultural Club Portal',
    description: 'Explore the official portal of Isshoni Nihongo, the Japanese language and culture club at CIT. JLPT study circles, conversational Kaiwa practice, and cultural festivals.',
    keywords: ['Isshoni Nihongo', 'Japanese Club CIT', 'Learn Japanese Chennai', 'JLPT Study Group', 'Japanese Cultural Club'],
    ogType: 'website',
    canonicalPath: '/club',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.85,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Isshoni Nihongo (一緒に日本語)',
      alternateName: 'Isshoni Nihongo Japanese Language & Culture Club',
      url: `${baseUrl}/club`,
      description: 'The student-led Japanese language and cultural community fostering bilingual fluency, cultural mastery, and festival collaborations.',
      parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: 'Chennai Institute of Technology',
      },
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="server-seo-container min-h-screen bg-[#FAF8F5] text-stone-900 p-6 md:p-12 font-sans">
        <header class="max-w-4xl mx-auto mb-8 text-center">
          <span class="text-xs font-mono font-bold tracking-widest text-red-700 uppercase bg-red-100 px-3 py-1 rounded-full inline-block mb-3">
            Official Japanese Language & Culture Community
          </span>
          <h1 class="text-3xl md:text-5xl font-extrabold text-stone-900 mb-3">
            ISSHONI NIHONGO (一緒に日本語)
          </h1>
          <p class="text-stone-600 max-w-2xl mx-auto">
            "Together in Japanese" • Fostering linguistic fluency, traditional arts appreciation, and international cultural exchange at Chennai Institute of Technology.
          </p>
        </header>
        <main id="main-content" class="max-w-4xl mx-auto space-y-6">
          <section class="bg-white border border-stone-200 p-8 rounded-2xl shadow-sm space-y-4">
            <h2 class="text-2xl font-bold text-stone-900">About the Club</h2>
            <p class="text-sm text-stone-700 leading-relaxed">
              Isshoni Nihongo is the vibrant Japanese language and cultural club uniting students, educators, and language enthusiasts. From JLPT N5 through N2 preparation circles and conversational Kaiwa practice sessions to co-organizing South India's largest Japanese festival, Hikari no Matsuri, we create an open gateway to Japan.
            </p>
          </section>
          <div class="text-center pt-4">
            <a href="/" class="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-xl text-sm transition-colors">
              Visit Hikari no Matsuri (HNM 2027) Festival Portal →
            </a>
          </div>
        </main>
      </div>
    `,
  },
};

export function getSeoMetadata(pathname: string, baseUrl: string): RouteSeoConfig | null {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return SEO_ROUTES[normalized] || null;
}
