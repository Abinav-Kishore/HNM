import { EventScheduleItem, TicketTier, HnmGalleryItem, FAQItem, SpecialGuest, VideoClip, QuizQuestion } from '../types';

import animeFestivalHeroImg from '../assets/images/anime_festival_hero_1785824642040.jpg';
import animeCosplayerGuestImg from '../assets/images/anime_cosplayer_guest_1785824665808.jpg';
import animeMaidCafeImg from '../assets/images/anime_maid_cafe_1785824684296.jpg';
import hnmAnimeHeroCharacterImg from '../assets/images/hnm_anime_hero_character_1785828763942.jpg';
import hnmPurpleHeroCharacterImg from '../assets/images/hnm_purple_hero_character_1785829123535.jpg';
import hnmHeroCinematicImg from '../assets/images/hnm_hero_cinematic_1785831742085.jpg';
import mobileHeroAnimeImg from '../assets/images/mobile_hero_anime_1785987709335.jpg';
import tabletHeroAnimeImg from '../assets/images/tablet_hero_anime_1785987728845.jpg';
import hnmHeroAnimeDesktopImg from '../assets/images/hnm_hero_anime_desktop_1787109580468.jpg';
import animePopoutFigureImg from '../assets/images/anime_popout_figure_1787110306521.jpg';
import lanternGuyPopoutImg from '../assets/images/lantern_guy_popout_1787110564322.jpg';
import hnmRedBlackHeroImg from '../assets/images/hnm_red_black_hero_1787110582329.jpg';

export { animeFestivalHeroImg, animeCosplayerGuestImg, animeMaidCafeImg, hnmAnimeHeroCharacterImg, hnmPurpleHeroCharacterImg, hnmHeroCinematicImg, mobileHeroAnimeImg, tabletHeroAnimeImg, hnmHeroAnimeDesktopImg, animePopoutFigureImg, lanternGuyPopoutImg, hnmRedBlackHeroImg };

export const HNM_EVENT_DETAILS = {
  edition: 'Vol. 3',
  year: '2027',
  fullTitle: 'Hikari no Matsuri',
  japaneseTitle: '光の祭り 2027',
  tagline: 'A Festival of Lights & Japanese x Anime Cultural Fest',
  theme: 'Kizuna (絆 - Unbreakable Bonds)',
  organizer: 'Lumos (Student Community of CIT) & Isshoni Nihongo',
  dates: 'January 8, 2027',
  time: '09:00 AM - 08:30 PM IST',
  venue: 'Chennai Institute of Technology Campus (CIT) Exhibition Grounds',
  expectedAttendees: '5,000+',
  vol2Url: 'https://hnmvol2.com/',
  heroAnimeImage: hnmRedBlackHeroImg,
  heroAnimeImageTablet: tabletHeroAnimeImg,
  heroAnimeImageMobile: mobileHeroAnimeImg,
  popoutFigureImage: lanternGuyPopoutImg,
  description: 'Hikari no Matsuri (光の祭り) is the premier Japanese x Anime cultural festival organized by Lumos at Chennai Institute of Technology in collaboration with Isshoni Nihongo. Honored at hnmvol2.com with official Japanese diplomatic delegates, HNM Vol. 3 on January 8, 2027 brings lantern-lit celebrations, Bon Odori dances, ANIFLIX LOUNGE, NIHON DIVE, Akihabara no Quest, Cosplay Contests, Notes of Nippon live music, and authentic Yatai food streets in a grand single-day cultural experience.',
};

export interface AnimeCharacterGuest {
  id: string;
  name: string;
  japaneseName: string;
  animeSeries: string;
  roleAtHnm: string;
  quote: string;
  badgeColor: string;
  imageUrl: string;
}

export const ANIME_CHARACTERS: AnimeCharacterGuest[] = [
  {
    id: 'char-gojo',
    name: 'Satoru Gojo',
    japaneseName: '五条 悟',
    animeSeries: 'Jujutsu Kaisen',
    roleAtHnm: 'Main Stage Domain Expansion Ambassador',
    quote: "Throughout heaven and earth, Hikari no Matsuri is the honored anime festival!",
    badgeColor: 'from-[#8B5CF6] to-[#60A5FA]',
    imageUrl: hnmHeroCinematicImg,
  },
  {
    id: 'char-tanjiro',
    name: 'Tanjiro Kamado',
    japaneseName: '竈門 炭治郎',
    animeSeries: 'Demon Slayer (Kimetsu no Yaiba)',
    roleAtHnm: 'Lantern Parade & Bon Odori Leader',
    quote: "No matter how tough it gets, the lights of Kizuna at HNM 2027 will guide our way!",
    badgeColor: 'from-emerald-500 to-teal-400',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'char-luffy',
    name: 'Monkey D. Luffy',
    japaneseName: 'モンキー・D・ルフィ',
    animeSeries: 'One Piece',
    roleAtHnm: 'Cosplay Championship Captain',
    quote: "I'm gonna be the King of Cosplay at HNM! Let's eat all the Takoyaki at Yatai Alley!",
    badgeColor: 'from-amber-500 to-red-500',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'char-naruto',
    name: 'Naruto Uzumaki',
    japaneseName: 'うずまき ナルト',
    animeSeries: 'Naruto Shippuden',
    roleAtHnm: 'Yatai Food Alley & Ichiraku Ramen Host',
    quote: "Believe it! You can't miss the Notes of Nippon music stage and hot ramen at CIT!",
    badgeColor: 'from-orange-500 to-amber-400',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'char-anya',
    name: 'Anya Forger',
    japaneseName: 'アーニャ・フォージャー',
    animeSeries: 'Spy x Family',
    roleAtHnm: 'Akihabara no Quest Quiz Master',
    quote: "Waku Waku! Anime Quiz and Mangamind plot contest give peanuts and Stella Stars!",
    badgeColor: 'from-pink-500 to-rose-400',
    imageUrl: animeMaidCafeImg,
  },
  {
    id: 'char-levi',
    name: 'Levi Ackerman',
    japaneseName: 'リヴァイ・アッカーマン',
    animeSeries: 'Attack on Titan',
    roleAtHnm: 'Scout Regiment Fast-Track Gate Security',
    quote: "Keep the festival grounds spotless and present your HNM pass at the entry gate.",
    badgeColor: 'from-slate-600 to-emerald-600',
    imageUrl: animeCosplayerGuestImg,
  },
];

export const FESTIVAL_VIDEOS: VideoClip[] = [
  {
    id: 'v1',
    title: 'HNM Vol. 2 Official Festival Teaser & Recap',
    category: 'Aftermovie',
    embedYoutubeId: 'vS8M3aR6p4g',
    duration: '02:45',
    thumbnailUrl: 'https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80',
    description: 'Relive the electric energy, lantern lights, and vibrant cosplay energy from HNM 2024/2025 archived at hnmvol2.com.',
  },
  {
    id: 'v2',
    title: 'Gojo Satoru & Jujutsu Kaisen Cosplay Stage',
    category: 'Cosplay',
    embedYoutubeId: '12J59zY4a4k',
    duration: '03:10',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    description: 'Electrifying domain expansion stage performance and Gojo Satoru cosplay showdown live at HNM.',
  },
  {
    id: 'v3',
    title: 'Thunder Taiko Drum Ensemble Live Opening',
    category: 'Performance',
    embedYoutubeId: '12J59zY4a4k',
    duration: '03:20',
    thumbnailUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    description: 'High-octane traditional drum performance echoing traditional Japanese rhythm and spirit.',
  },
  {
    id: 'v4',
    title: 'Cosplay Masquerade Runway Championship Highlights',
    category: 'Cosplay',
    embedYoutubeId: 'C7P8Z3B917U',
    duration: '04:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    description: 'Sensational anime costume craft, prop mastery, and character skits live on the HNM main stage.',
  },
  {
    id: 'v5',
    title: 'Anisong & J-Rock Live Band Concert',
    category: 'Performance',
    embedYoutubeId: '9G_8h4S8QoE',
    duration: '05:00',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    description: 'Crowd singing along to legendary opening themes from Demon Slayer, Jujutsu Kaisen, and Naruto.',
  },
];

export const SPECIAL_GUESTS: SpecialGuest[] = [
  {
    id: 'g1',
    name: 'Taga Masayuki san',
    japaneseName: '多賀 政幸 氏',
    role: 'Consul General of Japan (Chief Guest)',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Consul General of Japan, honored chief guest strengthening cultural diplomacy, Indo-Japanese exchange, and youth community engagement.',
    animeWorks: ['Japanese Diplomatic Delegation', 'Cultural Exchange', 'Indo-Japan Friendship'],
    sessionTime: '09:30 AM Inauguration (Main Stage)',
  },
  {
    id: 'g2',
    name: 'Sonu Gupta san',
    japaneseName: 'ソヌ グプタ 氏',
    role: 'Assistant Director, Japan Foundation New Delhi',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Promoting Japanese language learning, cultural initiatives, and educational partnerships across India.',
    animeWorks: ['Japan Foundation', 'JLPT Language Initiatives', 'Japanese Arts'],
    sessionTime: '11:00 AM Workshop (Culture Arena)',
  },
  {
    id: 'g3',
    name: 'Yuki Kuran',
    japaneseName: '幸 蔵人',
    role: 'International Cosplay Championship Judge',
    imageUrl: animeCosplayerGuestImg,
    bio: 'Award-winning cosplayer with over 8 years of armor crafting experience. Known for Demon Slayer, Jujutsu Kaisen, and Genshin Impact armor cosplays.',
    animeWorks: ['Demon Slayer', 'Jujutsu Kaisen', 'Cyberpunk Edgerunners'],
    sessionTime: '04:30 PM Grand Cosplay Runway (Main Stage)',
  },
  {
    id: 'g4',
    name: 'Moe Moe Maid Cafe Crew',
    japaneseName: '萌えカフェ 主催',
    role: 'Akihabara Maid Cafe & O-Talku Lounge Host',
    imageUrl: animeMaidCafeImg,
    bio: 'Bringing authentic Akihabara maid cafe hospitality, matcha latte art, O-Talku Zone games, and cute omurice performances to HNM 2027.',
    animeWorks: ['Akihabara Culture', 'O-Talku Zone', 'Anisong Maid Dance'],
    sessionTime: '01:30 PM O-Talku Lounge (Exhibition Hall)',
  },
];

export const GALLERY_PHOTOS: HnmGalleryItem[] = [
  {
    id: 'p1',
    title: 'Lantern Parade & Bon Odori',
    caption: 'Traditional lantern procession and Bon Odori dance at Chennai Institute of Technology grounds (hnmvol2.com archive).',
    year: 'Vol. 2',
    category: 'Stage',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p2',
    title: 'Yatai Street Food Alley',
    caption: 'Authentic Takoyaki, Dango, and Ramen served hot at the festival Yatai stalls.',
    year: 'Vol. 2',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p3',
    title: 'Cosplay Contest Stage',
    caption: 'Cosplayers showcasing Demon Slayer and Jujutsu Kaisen prop craftsmanship live on stage.',
    year: 'Vol. 2',
    category: 'Cosplay',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p4',
    title: 'NIHON DIVE & Virtual Japan Booth',
    caption: 'Immersive cultural booth with VR Japan tours, Yukata try-ons, and Origami workshops.',
    year: 'Vol. 2',
    category: 'Workshops',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p5',
    title: 'Artist Alley & Weeb Shop',
    caption: 'Talented student artists selling original manga prints, stickers, and anime badges.',
    year: 'Vol. 2',
    category: 'Crowd',
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p6',
    title: 'Notes of Nippon Musical Concert',
    caption: 'High-octane J-Pop & Anisong live band concert thrilling over 2,800 fans.',
    year: 'Vol. 2',
    category: 'Stage',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What does the festival name 'Hikari no Matsuri' mean in English?",
    japaneseText: "「光の祭り」の意味は何ですか？",
    options: ["Festival of Cherry Blossoms", "Festival of Lights", "Festival of Drums", "Festival of Bonds"],
    correctIndex: 1,
    explanation: "「光」(Hikari) means Light and 「祭り」(Matsuri) means Festival, translating to 'Festival of Lights'!",
  },
  {
    id: 2,
    question: "Which organization hosts Hikari no Matsuri alongside Lumos at CIT?",
    japaneseText: "どの組織がLumosと一緒に光の祭りを主催していますか？",
    options: ["Isshoni Nihongo", "Tokyo Anime Club", "J-Pop Society", "Otaku Union"],
    correctIndex: 0,
    explanation: "Isshoni Nihongo Japanese language club collaborates with Lumos (CIT) to organize Hikari no Matsuri!",
  },
  {
    id: 3,
    question: "What is the name of the signature Anime Quiz event at hnmvol2.com?",
    japaneseText: "HNMの有名なアニメクイズイベントの名前は何ですか？",
    options: ["Akihabara no Quest", "Otaku Master", "Anime Genius", "Manga Legend"],
    correctIndex: 0,
    explanation: "Akihabara no Quest is the official anime trivia tournament featured in General & Premium passes!",
  },
  {
    id: 4,
    question: "What popular Japanese street food is a signature item at our Yatai Alley?",
    japaneseText: "屋台アレイの人気のストリートフードは何ですか？",
    options: ["Takoyaki", "Baguette", "Tacos", "Dim Sum"],
    correctIndex: 0,
    explanation: "Takoyaki (たこ焼き - ball-shaped savory octopus snacks cooked in special molded pans) is a fan favorite at HNM Yatai!",
  },
];

export const SCHEDULE_ITEMS: EventScheduleItem[] = [
  {
    id: 's1',
    time: '09:30 AM',
    title: 'Inauguration & Japanese Delegate Address',
    japaneseTitle: '開会式 & 日本領事館挨拶',
    stage: 'Main Stage',
    performer: 'Consul General Taga Masayuki san & Guests',
    description: 'Official festival inauguration with chief guests from the Japanese Consulate and Japan Foundation.',
    tag: 'Ceremony',
  },
  {
    id: 's2',
    time: '10:30 AM',
    title: 'Notes of Nippon - Live Anisong Band',
    japaneseTitle: 'ノーツ・オブ・ニッポン ライブ',
    stage: 'Main Stage',
    performer: 'CIT Anisong Ensemble',
    description: 'Electrifying musical performance covering iconic themes from Jujutsu Kaisen, Demon Slayer, and Naruto.',
    tag: 'Performance',
  },
  {
    id: 's3',
    time: '11:30 AM',
    title: 'Akihabara no Quest (Anime Quiz Tournament)',
    japaneseTitle: 'アキハバラ・クエスト クイズ',
    stage: 'Culture Arena',
    description: 'High-stakes anime quiz competition testing team knowledge on modern and classic anime series.',
    tag: 'Contest',
  },
  {
    id: 's4',
    time: '12:30 PM',
    title: 'NIHON TRIVIA & Shodo Calligraphy Class',
    japaneseTitle: 'ニホン・トリビア & 書道体験',
    stage: 'Workshop Zone',
    description: 'Japanese kanji brush painting and trivia challenge with prizes from the Japan Foundation.',
    tag: 'Workshop',
  },
  {
    id: 's5',
    time: '01:30 PM',
    title: 'O-Talku Zone! & NIHON DIVE Virtual Booth',
    japaneseTitle: 'オタク・ゾーン & ニホン・ダイブ',
    stage: 'Exhibition Hall',
    description: 'Otaku lounge, gaming tournaments, Yukata try-ons, and VR Japan travel experience.',
    tag: 'Workshop',
  },
  {
    id: 's6',
    time: '02:30 PM',
    title: 'MANGAMIND & Speech Contest',
    japaneseTitle: 'マンガマインド & スピーチコンテスト',
    stage: 'Culture Arena',
    description: 'Manga storytelling plot contest and Japanese language speech showcase for learners.',
    tag: 'Contest',
  },
  {
    id: 's7',
    time: '03:30 PM',
    title: 'ANIFLIX LOUNGE Screenings & Kendo Demo',
    japaneseTitle: 'アニフレックス & 剣道演武',
    stage: 'Main Stage',
    description: 'Exclusive anime watch party screenings, martial arts katana sparring, and taiko drums.',
    tag: 'Performance',
  },
  {
    id: 's8',
    time: '04:30 PM',
    title: 'Grand COSPLAY CONTEST Championship',
    japaneseTitle: 'コスプレ コンテスト 本戦',
    stage: 'Main Stage',
    description: 'The ultimate cosplay masquerade runway where armor crafters and performers compete for trophies and cash prizes!',
    tag: 'Contest',
  },
  {
    id: 's9',
    time: '06:30 PM',
    title: 'Traditional Lantern Parade, Yatai Games & Bon Odori',
    japaneseTitle: '灯籠パレード & 盆踊り',
    stage: 'Main Courtyard',
    description: 'Join in community circle dancing around the Yagura tower lit by hundreds of Japanese lanterns, plus goldfish scooping at Yatai Alley.',
    tag: 'Ceremony',
  },
  {
    id: 's10',
    time: '07:45 PM',
    title: 'Awards Ceremony, Grand Raffle & Closing Lights',
    japaneseTitle: '表彰式 & フィナーレ',
    stage: 'Main Stage',
    description: 'Crowning the Cosplay and Quiz winners, grand raffle draw, and closing illumination ceremony.',
    tag: 'Ceremony',
  },
];

export const TICKET_TIERS: TicketTier[] = [
  {
    id: 'pass-general',
    name: 'General Festival Pass',
    japaneseName: '一般フェスパス',
    price: 150,
    period: 'Full Festival Access • Jan 8, 2027',
    popular: true,
    badge: 'Most Popular',
    features: [
      'Full Festival Day Access (Jan 8, 2027)',
      'Akihabara no Quest (Anime Quiz)',
      'O-Talku Zone! & Notes of Nippon Concert',
      'Artist Alley & Anime Weeb Shop',
      'Yatai Street Food Alley Access',
      'Digital Certificate of Participation',
    ],
  },
  {
    id: 'pass-premium',
    name: 'Premium All-Access Pass',
    japaneseName: 'プレミアム全アクセスパス',
    price: 175,
    period: 'Full VIP Access • Jan 8, 2027',
    badge: 'Official hnmvol2.com Tier',
    features: [
      'ALL General Pass Benefits included',
      'Exclusive Entry to ANIFLIX LOUNGE',
      'NIHON DIVE (Virtual Japan Experience)',
      'Official COSPLAY CONTEST Entry Ticket',
      'NIHON TRIVIA, MANGAMIND & SPEECH CONTEST',
      'VIP Front Seat Access for Main Stage Shows',
    ],
  },
  {
    id: 'pass-student',
    name: 'Student / Early Bird Pass',
    japaneseName: '学生・早割券',
    price: 99,
    period: 'Standard Entry • Jan 8, 2027',
    features: [
      'Single Day Entry on January 8, 2027',
      'Main Stage & Yatai Alley Access',
      'Akihabara no Quest Spectator',
      'Digital Certificate of Participation',
    ],
  },
];

export const VOL2_HIGHLIGHTS = [
  {
    title: '2,800+ Attendees',
    desc: 'Archived at hnmvol2.com with record turnout of anime fans, students & cultural enthusiasts.',
  },
  {
    title: 'Diplomatic Guests',
    desc: 'Honored by Taga Masayuki san (Consul General of Japan) and Japan Foundation delegates.',
  },
  {
    title: '20+ Flagship Events',
    desc: 'ANIFLIX LOUNGE, NIHON DIVE, Akihabara no Quest, Cosplay Contest & Speech Contest.',
  },
  {
    title: '150+ Cosplayers',
    desc: 'Breathtaking cosplay parade featuring iconic characters across popular anime series.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Hikari no Matsuri (HNM)?',
    answer: 'Hikari no Matsuri (光の祭り) is the flagship Japanese x Anime cultural festival organized by Lumos (student community of Chennai Institute of Technology) in collaboration with Isshoni Nihongo. Check out our archive at hnmvol2.com!',
  },
  {
    category: 'General',
    question: 'When and where is HNM Vol. 3 taking place?',
    answer: 'HNM Vol. 3 takes place on January 8, 2027 at Chennai Institute of Technology (CIT) Campus Grounds. Doors open at 09:00 AM IST.',
  },
  {
    category: 'Tickets',
    question: 'What is the difference between General Pass (₹150) and Premium All-Access Pass (₹175)?',
    answer: 'The General Pass (₹150) gives full festival day entry, Akihabara no Quest, O-Talku Zone, Notes of Nippon concert, and Artist Alley. The Premium Pass (₹175) adds exclusive access to the ANIFLIX LOUNGE, NIHON DIVE, COSPLAY CONTEST registration, MANGAMIND, NIHON TRIVIA, SPEECH CONTEST, and VIP front stage seating.',
  },
  {
    category: 'Cosplay',
    question: 'How do I participate in the COSPLAY CONTEST?',
    answer: 'Cosplay Contest entry is included with the Premium All-Access Pass (₹175). Simply reserve a Premium pass and register your character on our Cosplay Page!',
  },
  {
    category: 'Events',
    question: 'What events are available at HNM?',
    answer: 'Events include Akihabara no Quest (Anime Quiz), Notes of Nippon (Music), ANIFLIX LOUNGE (Screenings), NIHON DIVE (Virtual Japan), MANGAMIND, Speech Contest, Cosplay Championship, Bon Odori Dance, Lantern Parade, Kendo, Shodo Calligraphy, and Yatai Street Food!',
  },
];

