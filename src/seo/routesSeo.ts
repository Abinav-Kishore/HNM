/**
 * SEO Route Metadata, Structured Data (Schema.org), and Semantic Pre-rendered HTML
 * For Hikari no Matsuri (HNM 2027) & Isshoni Nihongo Club
 *
 * NOTE: The pre-rendered HTML matches the actual UI's navigation, dark matsuri theme,
 * and page structure so visitors see the authentic design from the first paint without
 * any jarring intermediate screens or perceived redirects, while providing 100% crawlable
 * content and Schema.org data for search engines and AI agents.
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

// Shared UI components matching the real Navbar & Footer
function renderNavbar(activePath: string): string {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Guests', path: '/guests' },
    { label: 'Cosplay', path: '/cosplay' },
    { label: 'Videos', path: '/videos' },
    { label: 'Vol. 2 Recap', path: '/recap' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Club', path: '/club' },
  ];

  const navLinksHtml = links
    .map((item) => {
      const isActive = item.path === activePath;
      const activeClass = isActive
        ? 'text-red-400 border-b-2 border-red-400 font-bold'
        : 'text-zinc-300 hover:text-red-400 border-transparent';
      return `<a href="${item.path}" class="py-1 transition-colors ${activeClass}">${item.label}</a>`;
    })
    .join('');

  return `
    <header class="sticky top-0 z-50 bg-[#08080A]/90 backdrop-blur-md border-b border-red-500/20 shadow-2xl shadow-[#08080A]/80 font-sans">
      <div class="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-950 border border-red-500/40 flex items-center justify-center text-white font-extrabold text-xs shadow-lg">
            HNM
          </div>
          <div>
            <div class="font-sans text-base font-extrabold tracking-wide text-white flex items-center gap-2">
              HNM 2027 <span class="text-[10px] font-sans font-extrabold bg-red-500/10 text-red-400 border border-red-500/30 px-2 py-0.5 rounded uppercase tracking-wider">光の祭り</span>
            </div>
            <div class="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-medium">
              Hikari no Matsuri • CIT Chennai
            </div>
          </div>
        </a>

        <nav aria-label="Main Navigation" class="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider font-sans">
          ${navLinksHtml}
        </nav>

        <a href="/tickets" class="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-md shadow-red-900/40 font-sans">
          Get Passes
        </a>
      </div>
    </header>
  `;
}

function renderFooter(): string {
  return `
    <footer class="bg-[#08080A] border-t border-red-500/20 pt-16 pb-12 text-xs text-zinc-300 font-sans relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-red-500/20">
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-950 border border-red-500/40 flex items-center justify-center text-white font-extrabold text-xs">
                HNM
              </div>
              <div>
                <div class="text-base font-bold text-white tracking-wide">
                  HIKARI NO MATSURI <span class="text-red-500 font-sans">2027</span>
                </div>
                <div class="text-[11px] text-red-400 font-serif">
                  光の祭り 2027 • Vol. 3
                </div>
              </div>
            </div>
            <p class="text-zinc-300 text-xs leading-relaxed max-w-md">
              The premier annual Japanese anime, cosplay, music, and cultural festival presented by <span class="text-white font-semibold">Isshoni Nihongo</span> at Chennai Institute of Technology. Celebrating unbreakable community bonds across languages and art forms.
            </p>
            <div class="text-xs text-zinc-400 pt-1">
              <span>January 8, 2027</span> • <span>Chennai Institute of Technology Campus</span>
            </div>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 font-sans">
              Navigation
            </h4>
            <ul class="space-y-2.5">
              <li><a href="/" class="hover:text-red-400 transition-colors">Home Portal</a></li>
              <li><a href="/about" class="hover:text-red-400 transition-colors">About HNM Festival</a></li>
              <li><a href="/schedule" class="hover:text-red-400 transition-colors">Matsuri Stage Schedule</a></li>
              <li><a href="/guests" class="hover:text-red-400 transition-colors">Guests & Performers</a></li>
              <li><a href="/cosplay" class="hover:text-red-400 transition-colors">Cosplay Masquerade</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 font-sans">
              Features
            </h4>
            <ul class="space-y-2.5">
              <li><a href="/tickets" class="hover:text-red-400 transition-colors">Festival Entry Passes</a></li>
              <li><a href="/videos" class="hover:text-red-400 transition-colors">Videos & Teasers</a></li>
              <li><a href="/recap" class="hover:text-red-400 transition-colors">HNM Vol. 2 Highlights</a></li>
              <li><a href="/faq" class="hover:text-red-400 transition-colors">Attendee FAQ</a></li>
              <li><a href="/club" class="hover:text-red-400 transition-colors">Isshoni Nihongo Club</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 font-sans">
              AI & Developer Resources
            </h4>
            <ul class="space-y-2.5">
              <li><a href="/llms.txt" class="hover:text-red-400 transition-colors">/llms.txt (AI Model Spec)</a></li>
              <li><a href="/llms-full.txt" class="hover:text-red-400 transition-colors">/llms-full.txt (Full AI Context)</a></li>
              <li><a href="/sitemap.xml" class="hover:text-red-400 transition-colors">XML Sitemap</a></li>
              <li><a href="/robots.txt" class="hover:text-red-400 transition-colors">Robots Directives</a></li>
            </ul>
          </div>
        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© 2027 Hikari no Matsuri. Organised by Lumos CIT & Isshoni Nihongo. All rights reserved.</p>
          <div class="flex items-center gap-4">
            <a href="/tickets" class="text-red-400 hover:underline">Get Tickets</a>
            <span>•</span>
            <a href="/faq" class="hover:text-zinc-300">FAQ</a>
            <span>•</span>
            <a href="/club" class="hover:text-zinc-300">Isshoni Nihongo</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderPageHeader(title: string, japaneseTitle: string, subtitle: string, breadcrumb: string): string {
  return `
    <div class="relative w-full bg-[#08080A] border-b border-red-500/20 overflow-hidden py-14 md:py-18">
      <div class="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs text-zinc-400 font-sans mb-4">
          <a href="/" class="hover:text-red-400 transition-colors">Home</a>
          <span class="text-red-500/60">/</span>
          <span class="text-red-400 font-medium">${breadcrumb}</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 text-red-400 font-serif text-xs md:text-sm uppercase tracking-widest mb-2">
              <span class="bg-red-500/10 border border-red-500/30 text-red-400 px-2 py-0.5 rounded text-[10px] font-mono">公式催事</span>
              <span>${japaneseTitle}</span>
            </div>
            <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 font-sans">
              ${title}
            </h1>
            <p class="text-zinc-300 text-sm md:text-base leading-relaxed">
              ${subtitle}
            </p>
          </div>

          <div class="flex items-center gap-3">
            <a href="/tickets" class="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-lg shadow-red-900/30 inline-flex items-center gap-2">
              Get Passes
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

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
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.9806,
          longitude: 80.0528,
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
          name: 'Student Pass',
          price: '99',
          priceCurrency: 'INR',
          url: `${baseUrl}/tickets`,
          availability: 'https://schema.org/InStock',
          validFrom: '2026-01-01',
        },
        {
          '@type': 'Offer',
          name: 'General Otaku Pass',
          price: '150',
          priceCurrency: 'INR',
          url: `${baseUrl}/tickets`,
          availability: 'https://schema.org/InStock',
          validFrom: '2026-01-01',
        },
        {
          '@type': 'Offer',
          name: 'VIP Matsuri Pass',
          price: '175',
          priceCurrency: 'INR',
          url: `${baseUrl}/tickets`,
          availability: 'https://schema.org/InStock',
          validFrom: '2026-01-01',
        },
      ],
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/')}

        <main id="main-content">
          <!-- Hero Section matching real UI -->
          <section class="relative w-full min-h-[calc(100vh-70px)] flex flex-col justify-center py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden bg-[#08080A] border-b border-red-500/20">
            <div class="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center py-6">
              <div class="max-w-3xl text-left">
                <div class="inline-flex items-center gap-2 text-red-400 font-mono font-bold text-xs tracking-wider uppercase mb-4 bg-red-500/10 border border-red-500/30 px-3 py-1.5 rounded-md">
                  <span class="text-red-400 font-extrabold">#1 JAPANESE & ANIME CULTURAL FESTIVAL</span>
                  <span class="text-zinc-500">•</span>
                  <span>JANUARY 8, 2027</span>
                </div>

                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4 font-sans">
                  HIKARI NO MATSURI <span class="text-red-500">2027</span>
                </h1>

                <div class="text-lg sm:text-xl md:text-2xl font-semibold text-red-400 font-serif mb-6 tracking-wide">
                  光の祭り 2027 • THEME: KIZUNA (絆 - UNBREAKABLE BONDS)
                </div>

                <p class="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8">
                  The grand single-day Japanese language, anime, cosplay, and cultural matsuri hosted at Chennai Institute of Technology in collaboration with Isshoni Nihongo. Experience live Anisong concerts, Cosplay Masquerade, Yatai street foods, and traditional Bon Odori dancing.
                </p>

                <div class="flex flex-wrap gap-4 items-center mb-10">
                  <a href="/tickets" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-lg shadow-red-900/40 inline-flex items-center gap-2">
                    Book Festival Passes
                  </a>
                  <a href="/schedule" class="border border-red-500/40 hover:bg-red-500/10 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors">
                    View Event Schedule
                  </a>
                </div>

                <div class="grid grid-cols-3 gap-4 max-w-lg text-left pt-6 border-t border-red-500/20">
                  <div>
                    <div class="text-[11px] font-mono text-zinc-400 uppercase">Date & Timing</div>
                    <div class="text-sm font-bold text-white">Jan 8, 2027 • 9AM-8:30PM</div>
                  </div>
                  <div>
                    <div class="text-[11px] font-mono text-zinc-400 uppercase">Venue Location</div>
                    <div class="text-sm font-bold text-white">CIT Campus Grounds</div>
                  </div>
                  <div>
                    <div class="text-[11px] font-mono text-zinc-400 uppercase">Passes From</div>
                    <div class="text-sm font-bold text-emerald-400">₹99 per attendee</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Festival Highlights Section -->
          <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-12">
              <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Cultural Zones & Attractions</span>
              <h2 class="text-3xl font-extrabold text-white mt-2 mb-4">EXPERIENCE JAPANESE POP & TRADITIONAL CULTURE</h2>
              <p class="text-zinc-400 text-sm">Every zone at Hikari no Matsuri 2027 is crafted to provide authentic cultural immersion and unforgettable anime celebration.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
                <h3 class="text-lg font-bold text-white mb-2">Cosplay Masquerade</h3>
                <p class="text-zinc-400 text-xs leading-relaxed mb-4">National competition with ₹50,000+ prize pool judged by international cosplay icons.</p>
                <a href="/cosplay" class="text-red-400 text-xs font-semibold hover:underline">Learn Rules & Entry →</a>
              </div>

              <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
                <h3 class="text-lg font-bold text-white mb-2">Notes of Nippon</h3>
                <p class="text-zinc-400 text-xs leading-relaxed mb-4">High-energy live J-Rock and Anisong concerts performing iconic anime opening themes.</p>
                <a href="/guests" class="text-red-400 text-xs font-semibold hover:underline">View Guest Performers →</a>
              </div>

              <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
                <h3 class="text-lg font-bold text-white mb-2">Yatai Food Street</h3>
                <p class="text-zinc-400 text-xs leading-relaxed mb-4">Authentic Takoyaki, Ramen, Taiyaki, Yakisoba, Onigiri, and Japanese street delights.</p>
                <a href="/about" class="text-red-400 text-xs font-semibold hover:underline">Explore Food Stalls →</a>
              </div>

              <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
                <h3 class="text-lg font-bold text-white mb-2">Bon Odori & Lanterns</h3>
                <p class="text-zinc-400 text-xs leading-relaxed mb-4">Evening grand finale with 1,000 glowing paper lanterns and traditional circle dances.</p>
                <a href="/schedule" class="text-red-400 text-xs font-semibold hover:underline">View Timeline →</a>
              </div>
            </div>
          </section>

          <!-- Ticket Tiers Overview -->
          <section class="py-16 px-4 md:px-8 bg-[#0D0D12] border-y border-red-500/20">
            <div class="max-w-7xl mx-auto">
              <div class="text-center max-w-2xl mx-auto mb-12">
                <span class="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">Book Tickets Online</span>
                <h2 class="text-3xl font-extrabold text-white mt-2 mb-4">OFFICIAL FESTIVAL PASS TIERS</h2>
                <p class="text-zinc-400 text-sm">Secure your entry pass online with secure Razorpay checkout. Spot entry is strictly limited.</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div class="bg-[#121217] border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span class="text-xs font-mono text-zinc-400 uppercase">Students</span>
                    <h3 class="text-xl font-bold text-white mt-1">Student Pass</h3>
                    <div class="text-3xl font-extrabold text-white mt-3 mb-4">₹99</div>
                    <ul class="text-xs text-zinc-300 space-y-2 mb-6">
                      <li>• Full festival grounds access</li>
                      <li>• Cultural pavilions & Bon Odori</li>
                      <li>• Student ID verification required</li>
                    </ul>
                  </div>
                  <a href="/tickets" class="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">Select Pass</a>
                </div>

                <div class="bg-[#121217] border border-red-500/50 p-6 rounded-2xl flex flex-col justify-between relative shadow-xl shadow-red-950/40">
                  <span class="absolute -top-3 right-6 bg-red-600 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">Most Popular</span>
                  <div>
                    <span class="text-xs font-mono text-red-400 uppercase">General Entry</span>
                    <h3 class="text-xl font-bold text-white mt-1">Otaku Pass</h3>
                    <div class="text-3xl font-extrabold text-white mt-3 mb-4">₹150</div>
                    <ul class="text-xs text-zinc-300 space-y-2 mb-6">
                      <li>• Complete festival & stage access</li>
                      <li>• Live Anisong concert viewing</li>
                      <li>• Esports tournament entry</li>
                      <li>• Commemorative festival wristband</li>
                    </ul>
                  </div>
                  <a href="/tickets" class="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">Select Pass</a>
                </div>

                <div class="bg-[#121217] border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span class="text-xs font-mono text-amber-400 uppercase">VIP All-Access</span>
                    <h3 class="text-xl font-bold text-white mt-1">VIP Matsuri Pass</h3>
                    <div class="text-3xl font-extrabold text-white mt-3 mb-4">₹175</div>
                    <ul class="text-xs text-zinc-300 space-y-2 mb-6">
                      <li>• Front-row reserved stage seating</li>
                      <li>• Priority express queue at Yatai</li>
                      <li>• Collectible metal VIP badge</li>
                      <li>• Personalized Shodo calligraphy souvenir</li>
                    </ul>
                  </div>
                  <a href="/tickets" class="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">Select Pass</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        ${renderFooter()}
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
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/about')}
        ${renderPageHeader('About Hikari no Matsuri', '光の祭りについて', 'The cultural mission, diplomatic legacy, and community story behind South India’s premier single-day Japanese matsuri.', 'About')}

        <main id="main-content" class="max-w-5xl mx-auto px-4 md:px-8 py-16 space-y-12">
          <section class="bg-[#121217] border border-red-500/20 p-8 rounded-2xl space-y-4">
            <h2 class="text-2xl font-bold text-white">The Origin & Meaning of Hikari no Matsuri</h2>
            <p class="text-zinc-300 text-sm leading-relaxed">
              "Hikari no Matsuri" translates to "Festival of Lights". Rooted in the rich festive traditions of summer and autumn matsuri in Japan, HNM was founded by student members of Lumos and Isshoni Nihongo at Chennai Institute of Technology. Our goal is to create a true cultural bridge between India and Japan.
            </p>
            <p class="text-zinc-300 text-sm leading-relaxed">
              HNM Vol. 2 (archived at hnmvol2.com) was graced by official Japanese diplomatic consulates, Japanese language educators, and corporate leaders. Vol. 3 on January 8, 2027 expands the festival grounds to accommodate over 5,000 visitors under the theme "Kizuna" (絆 - Unbreakable Bonds).
            </p>
          </section>

          <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
              <h3 class="text-lg font-bold text-white mb-2">Bilateral Friendship</h3>
              <p class="text-zinc-400 text-xs leading-relaxed">Fostering cross-cultural respect, student language exchange, and career pathways in Japan.</p>
            </div>
            <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
              <h3 class="text-lg font-bold text-white mb-2">Traditional Arts</h3>
              <p class="text-zinc-400 text-xs leading-relaxed">Preserving Chado (tea ceremonies), Shodo (brush calligraphy), and Taiko drumming.</p>
            </div>
            <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
              <h3 class="text-lg font-bold text-white mb-2">Modern Otaku Culture</h3>
              <p class="text-zinc-400 text-xs leading-relaxed">Celebrating anime, manga, competitive gaming, and the vibrant Indian cosplay community.</p>
            </div>
          </section>
        </main>

        ${renderFooter()}
      </div>
    `,
  },

  '/schedule': {
    path: '/schedule',
    title: 'Event Schedule & Timeline | Hikari no Matsuri 2027 (January 8)',
    description: 'Full single-day timeline for HNM 2027 on January 8, 2027. Inauguration, Notes of Nippon, Cosplay Masquerade, J-Rock concert, and Bon Odori finale.',
    keywords: ['HNM Schedule', 'Anime Fest Timeline', 'Cosplay Contest Time', 'Bon Odori Timings', 'January 8 Festival Schedule'],
    ogType: 'event',
    canonicalPath: '/schedule',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 0.9,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Hikari no Matsuri 2027 Schedule',
      startDate: '2027-01-08T09:00:00+05:30',
      endDate: '2027-01-08T20:30:00+05:30',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'Chennai Institute of Technology',
      },
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/schedule')}
        ${renderPageHeader('Festival Schedule & Timeline', '催事日程表', 'Friday, January 8, 2027 • 09:00 AM to 08:30 PM IST • Chennai Institute of Technology', 'Schedule')}

        <main id="main-content" class="max-w-5xl mx-auto px-4 md:px-8 py-16">
          <div class="bg-[#121217] border border-red-500/20 p-6 md:p-8 rounded-2xl overflow-x-auto">
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
                <tr><td class="py-3.5 px-4 font-mono text-red-400">10:30 AM</td><td class="py-3.5 px-4 font-bold text-white">Notes of Nippon: Traditional Koto & Shamisen Ensemble</td><td class="py-3.5 px-4">Acoustic Stage</td><td class="py-3.5 px-4">Music</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">11:30 AM</td><td class="py-3.5 px-4 font-bold text-white">Akihabara no Quest: Anime Trivia & Gaming Arena</td><td class="py-3.5 px-4">Esports Arena</td><td class="py-3.5 px-4">Esports</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">01:00 PM</td><td class="py-3.5 px-4 font-bold text-white">Shodo (Calligraphy) & Origami Masterclasses</td><td class="py-3.5 px-4">Cultural Pavilion</td><td class="py-3.5 px-4">Workshop</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">02:30 PM</td><td class="py-3.5 px-4 font-bold text-white">Cosplay Masquerade & Runway Championship</td><td class="py-3.5 px-4">Main Stage</td><td class="py-3.5 px-4">Contest</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">04:30 PM</td><td class="py-3.5 px-4 font-bold text-white">Anime Voice Acting & Dubbing Showdown</td><td class="py-3.5 px-4">Auditorium</td><td class="py-3.5 px-4">Interactive</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">06:00 PM</td><td class="py-3.5 px-4 font-bold text-white">J-Rock Anisong Live Concert Extravaganza</td><td class="py-3.5 px-4">Main Stage</td><td class="py-3.5 px-4">Concert</td></tr>
                <tr><td class="py-3.5 px-4 font-mono text-red-400">07:30 PM</td><td class="py-3.5 px-4 font-bold text-white">Lantern Lighting & Bon Odori Community Dance</td><td class="py-3.5 px-4">Matsuri Courtyard</td><td class="py-3.5 px-4">Tradition</td></tr>
              </tbody>
            </table>
          </div>
        </main>

        ${renderFooter()}
      </div>
    `,
  },

  '/guests': {
    path: '/guests',
    title: 'Guests & Performers | Hikari no Matsuri 2027',
    description: 'Meet the special guests, cultural masters, Anisong rock bands, and cosplay judges featured at Hikari no Matsuri 2027.',
    keywords: ['HNM Guests', 'Anime Cosplay Judges', 'Kenji Takahashi', 'Aoi Sora Cosplay', 'The Tokyo Echoes', 'Anisong Band Chennai'],
    ogType: 'article',
    canonicalPath: '/guests',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.8,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      name: 'Hikari no Matsuri 2027 Guests',
      description: 'Special guests, Japanese cultural masters, and performers for Hikari no Matsuri 2027.',
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/guests')}
        ${renderPageHeader('Guests & Performers', '特別来賓・出演者', 'Cultural masters, international cosplayers, and rock musicians gracing HNM 2027.', 'Guests')}

        <main id="main-content" class="max-w-5xl mx-auto px-4 md:px-8 py-16">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
              <span class="text-xs font-mono text-red-400 uppercase">Calligraphy Master</span>
              <h2 class="text-xl font-bold text-white mt-1 mb-2">Kenji Takahashi</h2>
              <p class="text-zinc-400 text-xs leading-relaxed">Tokyo-based master calligrapher and Shakuhachi flute performer conducting live Shodo demonstrations and masterclasses.</p>
            </div>
            <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
              <span class="text-xs font-mono text-red-400 uppercase">Head Cosplay Judge</span>
              <h2 class="text-xl font-bold text-white mt-1 mb-2">Aoi Sora Cosplay</h2>
              <p class="text-zinc-400 text-xs leading-relaxed">Award-winning international armor crafter and prop artisan evaluating the HNM 2027 Cosplay Championship runway.</p>
            </div>
            <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
              <span class="text-xs font-mono text-red-400 uppercase">Live J-Rock Band</span>
              <h2 class="text-xl font-bold text-white mt-1 mb-2">The Tokyo Echoes</h2>
              <p class="text-zinc-400 text-xs leading-relaxed">Electric 5-piece tribute band headlining the festival with covers of legendary anime anthems and modern rock hits.</p>
            </div>
          </div>
        </main>

        ${renderFooter()}
      </div>
    `,
  },

  '/cosplay': {
    path: '/cosplay',
    title: 'Cosplay Masquerade Championship | Hikari no Matsuri 2027',
    description: 'Enter the HNM 2027 Cosplay Masquerade on January 8, 2027. Compete for ₹50,000+ in cash prizes across craftsmanship, performance, and armor categories.',
    keywords: ['Cosplay Contest Chennai', 'Anime Masquerade India', 'HNM Cosplay Rules', 'Armor Crafting Contest', 'Cosplay Prize Pool'],
    ogType: 'article',
    canonicalPath: '/cosplay',
    isIndexable: true,
    changefreq: 'weekly',
    priority: 0.9,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'HNM 2027 Cosplay Masquerade',
      startDate: '2027-01-08T14:30:00+05:30',
      description: 'National competitive cosplay championship at Chennai Institute of Technology.',
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/cosplay')}
        ${renderPageHeader('Cosplay Masquerade Championship', 'コスプレ大会', '₹50,000+ Cash Prize Pool • Runway Showdown • National Stage', 'Cosplay')}

        <main id="main-content" class="max-w-5xl mx-auto px-4 md:px-8 py-16 space-y-8">
          <section class="bg-[#121217] border border-red-500/20 p-8 rounded-2xl space-y-4">
            <h2 class="text-2xl font-bold text-white">Championship Categories & Judging</h2>
            <p class="text-zinc-300 text-sm leading-relaxed">
              The HNM Cosplay Masquerade celebrates costume craftsmanship, character embodiment, and theatrical stage performance. Whether you craft foam armor, sew historical kimono, or portray anime legends, the HNM stage is your canvas.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <span class="font-bold text-red-400 block mb-1">Craftsmanship (40%)</span>
                <span class="text-zinc-400">Clean seams, material choice, prop stability, and costume detailing.</span>
              </div>
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <span class="font-bold text-red-400 block mb-1">Performance (35%)</span>
                <span class="text-zinc-400">Stage walk, pose accuracy, dialogue delivery, and audience charisma.</span>
              </div>
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <span class="font-bold text-red-400 block mb-1">Accuracy (25%)</span>
                <span class="text-zinc-400">Fidelity to source material character aesthetics and silhouette.</span>
              </div>
            </div>
          </section>
        </main>

        ${renderFooter()}
      </div>
    `,
  },

  '/videos': {
    path: '/videos',
    title: 'Festival Videos & Highlights | Hikari no Matsuri 2027',
    description: 'Watch festival trailers, aftermovies, cosplay highlights, and musical showcases from Hikari no Matsuri.',
    keywords: ['HNM Videos', 'Anime Fest Aftermovie', 'Matsuri Trailers', 'Cosplay Showcase Video'],
    ogType: 'article',
    canonicalPath: '/videos',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.7,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'VideoGallery',
      name: 'Hikari no Matsuri Video Showcase',
      description: 'Official festival videos, trailers, and cultural highlights.',
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/videos')}
        ${renderPageHeader('Festival Videos & Highlights', '映像集', 'Cinematic aftermovies, stage recaps, and teaser releases.', 'Videos')}

        <main id="main-content" class="max-w-5xl mx-auto px-4 md:px-8 py-16">
          <div class="bg-[#121217] border border-red-500/20 p-8 rounded-2xl text-center">
            <h2 class="text-2xl font-bold text-white mb-2">Cinematic Video Showcase</h2>
            <p class="text-zinc-400 text-sm max-w-xl mx-auto mb-6">Explore the high-energy atmosphere, theatrical performances, and musical sets captured from HNM editions.</p>
            <a href="/tickets" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition-colors inline-block">Experience It Live On Jan 8 →</a>
          </div>
        </main>

        ${renderFooter()}
      </div>
    `,
  },

  '/recap': {
    path: '/recap',
    title: 'HNM Vol. 2 Recap & Historical Archives | Hikari no Matsuri',
    description: 'Review the diplomatic and cultural milestones of Hikari no Matsuri Vol. 2 (hnmvol2.com). Highlights, delegate addresses, and attendance records.',
    keywords: ['HNM Vol 2', 'hnmvol2.com', 'Hikari no Matsuri History', 'Past Edition Highlights'],
    ogType: 'article',
    canonicalPath: '/recap',
    isIndexable: true,
    changefreq: 'monthly',
    priority: 0.7,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'ArchiveComponent',
      name: 'HNM Vol. 2 Retrospective',
      description: 'Historical archive of Hikari no Matsuri Vol. 2.',
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/recap')}
        ${renderPageHeader('Vol. 2 Retrospective Archive', '前回記録', 'Milestones and official diplomatic acclaim from HNM Vol. 2.', 'Recap')}

        <main id="main-content" class="max-w-5xl mx-auto px-4 md:px-8 py-16 space-y-8">
          <section class="bg-[#121217] border border-red-500/20 p-8 rounded-2xl space-y-4">
            <h2 class="text-2xl font-bold text-white">The Legacy of HNM Vol. 2 (hnmvol2.com)</h2>
            <p class="text-zinc-300 text-sm leading-relaxed">
              Hikari no Matsuri Vol. 2 set a historic precedent as Chennai’s largest collegiate Japanese cultural fest, welcoming distinguished diplomatic dignitaries from the Consulate-General of Japan in Chennai.
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-center">
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <div class="text-2xl font-bold text-red-400">3,500+</div>
                <div class="text-[11px] text-zinc-400 uppercase mt-1">Attendees</div>
              </div>
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <div class="text-2xl font-bold text-red-400">40+</div>
                <div class="text-[11px] text-zinc-400 uppercase mt-1">Cosplayers</div>
              </div>
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <div class="text-2xl font-bold text-red-400">12</div>
                <div class="text-[11px] text-zinc-400 uppercase mt-1">Yatai Stalls</div>
              </div>
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <div class="text-2xl font-bold text-red-400">100%</div>
                <div class="text-[11px] text-zinc-400 uppercase mt-1">Sold Out</div>
              </div>
            </div>
          </section>
        </main>

        ${renderFooter()}
      </div>
    `,
  },

  '/tickets': {
    path: '/tickets',
    title: 'Festival Passes & Booking | Hikari no Matsuri 2027 (HNM Vol. 3)',
    description: 'Book official entry passes for Hikari no Matsuri 2027. Student Pass (₹99), Otaku Pass (₹150), VIP Matsuri Pass (₹175). Instant online payment with Razorpay.',
    keywords: ['HNM Tickets', 'Hikari no Matsuri Passes', 'Anime Fest Tickets Chennai', 'Book HNM 2027', 'Razorpay Checkout'],
    ogType: 'website',
    canonicalPath: '/tickets',
    isIndexable: true,
    changefreq: 'daily',
    priority: 0.95,
    jsonLd: (baseUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'TicketReservation',
      name: 'Hikari no Matsuri 2027 Pass Booking',
      underName: {
        '@type': 'Festival',
        name: 'Hikari no Matsuri 2027',
      },
      reservationFor: {
        '@type': 'Festival',
        name: 'Hikari no Matsuri 2027 (HNM Vol. 3)',
        startDate: '2027-01-08T09:00:00+05:30',
        location: {
          '@type': 'Place',
          name: 'Chennai Institute of Technology',
        },
      },
    }),
    prerenderedHtml: (baseUrl: string) => `
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/tickets')}
        ${renderPageHeader('Official Festival Passes', '入場券予約', 'Secure your pass for Friday, January 8, 2027 with seamless Razorpay checkout.', 'Tickets')}

        <main id="main-content" class="max-w-5xl mx-auto px-4 md:px-8 py-16">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-[#121217] border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span class="text-xs font-mono text-zinc-400 uppercase">Students</span>
                <h2 class="text-xl font-bold text-white mt-1">Student Pass</h2>
                <div class="text-3xl font-extrabold text-white mt-3 mb-4">₹99</div>
                <ul class="text-xs text-zinc-300 space-y-2 mb-6">
                  <li>• Access to general festival grounds</li>
                  <li>• Cultural pavilions & Bon Odori dance</li>
                  <li>• Valid student ID card required at gate</li>
                </ul>
              </div>
              <a href="/tickets" class="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">Book ₹99 Pass</a>
            </div>

            <div class="bg-[#121217] border border-red-500/60 p-6 rounded-2xl flex flex-col justify-between relative shadow-xl shadow-red-950/40">
              <span class="absolute -top-3 right-6 bg-red-600 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">Most Popular</span>
              <div>
                <span class="text-xs font-mono text-red-400 uppercase">General Public & Students</span>
                <h2 class="text-xl font-bold text-white mt-1">General Otaku Pass</h2>
                <div class="text-3xl font-extrabold text-white mt-3 mb-4">₹150</div>
                <ul class="text-xs text-zinc-300 space-y-2 mb-6">
                  <li>• Complete festival grounds access</li>
                  <li>• Live J-Rock & Anisong stage viewing</li>
                  <li>• Akihabara gaming tournament entry</li>
                  <li>• Commemorative festival wristband</li>
                </ul>
              </div>
              <a href="/tickets" class="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">Book ₹150 Pass</a>
            </div>

            <div class="bg-[#121217] border border-amber-500/40 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span class="text-xs font-mono text-amber-400 uppercase">VIP All-Access</span>
                <h2 class="text-xl font-bold text-white mt-1">VIP Matsuri Pass</h2>
                <div class="text-3xl font-extrabold text-white mt-3 mb-4">₹175</div>
                <ul class="text-xs text-zinc-300 space-y-2 mb-6">
                  <li>• Priority front-row reserved concert seating</li>
                  <li>• Express queue at Yatai food street</li>
                  <li>• Collectible metal VIP badge</li>
                  <li>• Personalized Shodo calligraphy souvenir</li>
                </ul>
              </div>
              <a href="/tickets" class="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">Book ₹175 Pass</a>
            </div>
          </div>
        </main>

        ${renderFooter()}
      </div>
    `,
  },

  '/faq': {
    path: '/faq',
    title: 'Frequently Asked Questions (FAQ) | Hikari no Matsuri 2027',
    description: 'Got questions about HNM 2027? Check ticketing, transport to CIT Chennai, cosplay rules, spot registration, food options, and schedule details.',
    keywords: ['HNM FAQ', 'Anime Fest Help', 'CIT Campus Location', 'Cosplay Props Guidelines', 'Tickets Help'],
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
    prerenderedHtml: (baseUrl: string) => `
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/faq')}
        ${renderPageHeader('Frequently Asked Questions', 'よくある質問', 'Everything you need to know about attending HNM 2027.', 'FAQ')}

        <main id="main-content" class="max-w-4xl mx-auto px-4 md:px-8 py-16 space-y-6">
          <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
            <h2 class="text-base font-bold text-white mb-2">Who can attend Hikari no Matsuri 2027?</h2>
            <p class="text-zinc-300 text-xs leading-relaxed">Anyone! The festival is open to college students from all institutions, school students, anime fans, Japanese language learners, and culture enthusiasts.</p>
          </div>
          <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
            <h2 class="text-base font-bold text-white mb-2">Where is the festival held?</h2>
            <p class="text-zinc-300 text-xs leading-relaxed">Chennai Institute of Technology (CIT) Campus Grounds, Sarathy Nagar, Kundrathur, Chennai, Tamil Nadu 600069. College shuttles operate from nearby metro and transit hubs.</p>
          </div>
          <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
            <h2 class="text-base font-bold text-white mb-2">What time does the festival run on January 8, 2027?</h2>
            <p class="text-zinc-300 text-xs leading-relaxed">Gates open at 09:00 AM IST and events run continuously through 08:30 PM IST, concluding with the illuminated Bon Odori finale.</p>
          </div>
          <div class="bg-[#121217] border border-red-500/20 p-6 rounded-2xl">
            <h2 class="text-base font-bold text-white mb-2">Can I purchase tickets on-spot on January 8?</h2>
            <p class="text-zinc-300 text-xs leading-relaxed">A limited spot allocation is available at gate counters, but passes frequently sell out. Online booking via https://hnm3.vercel.app/tickets is recommended to avoid disappointment.</p>
          </div>
        </main>

        ${renderFooter()}
      </div>
    `,
  },

  '/club': {
    path: '/club',
    title: 'Isshoni Nihongo (一緒に日本語) | Japanese Language & Culture Club',
    description: 'CIT Chennai’s premier Japanese language club. JLPT coaching (N5-N1), conversational circles, cultural immersion workshops, and student community portal.',
    keywords: ['Isshoni Nihongo', 'Japanese Club CIT', 'JLPT Preparation Chennai', 'Study in Japan Club', 'Japanese Language Learning'],
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
    prerenderedHtml: (baseUrl: string) => `
      <div class="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans relative">
        ${renderNavbar('/club')}
        ${renderPageHeader('Isshoni Nihongo Japanese Club', '一緒に日本語', 'Language fluency, cultural appreciation, and bilateral career pathways at CIT Chennai.', 'Club')}

        <main id="main-content" class="max-w-5xl mx-auto px-4 md:px-8 py-16 space-y-8">
          <section class="bg-[#121217] border border-red-500/20 p-8 rounded-2xl space-y-4">
            <h2 class="text-2xl font-bold text-white">About Isshoni Nihongo (一緒に日本語)</h2>
            <p class="text-zinc-300 text-sm leading-relaxed">
              Isshoni Nihongo is Chennai Institute of Technology's premier student organisation dedicated to Japanese language mastery and bilateral India-Japan cultural appreciation.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <span class="font-bold text-red-400 block mb-1">JLPT Coaching</span>
                <span class="text-zinc-400">Structured training modules for JLPT N5 through N1 certification.</span>
              </div>
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <span class="font-bold text-red-400 block mb-1">Cultural Immersion</span>
                <span class="text-zinc-400">Origami workshops, anime discussions, and annual Hikari no Matsuri.</span>
              </div>
              <div class="bg-[#08080A] p-4 rounded-xl border border-zinc-800">
                <span class="font-bold text-red-400 block mb-1">Career Pathways</span>
                <span class="text-zinc-400">Internship and higher education mentorship for opportunities in Japan.</span>
              </div>
            </div>
          </section>
        </main>

        ${renderFooter()}
      </div>
    `,
  },
};

export function getSeoMetadata(pathname: string, baseUrl: string = 'https://hnm3.vercel.app'): RouteSeoConfig | null {
  const normalized = pathname.replace(/\/$/, '') || '/';
  return SEO_ROUTES[normalized] || null;
}
