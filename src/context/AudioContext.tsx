import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

export interface CharacterVoiceLine {
  characterId: string;
  characterName: string;
  japaneseName: string;
  animeSeries: string;
  personality: 'Gojo-style' | 'Tanjiro-style' | 'Luffy-style' | 'Naruto-style' | 'Anya-style' | 'Levi-style';
  personalityDescription: string;
  section: 'home' | 'about' | 'schedule' | 'tickets' | 'guests' | 'cosplay' | 'general';
  quote: string;
  japaneseQuote: string;
  audioUrl: string;
  avatarBg: string;
}

export const CHARACTER_VOICE_DATA: Record<string, CharacterVoiceLine[]> = {
  gojo: [
    {
      characterId: 'gojo',
      characterName: 'Satoru Gojo',
      japaneseName: '五条 悟',
      animeSeries: 'Jujutsu Kaisen',
      personality: 'Gojo-style',
      personalityDescription: 'Confident, playful, charismatic & teasing',
      section: 'home',
      quote: "Yo! Satoru Gojo here. Throughout heaven and earth, Hikari no Matsuri at CIT is the honored festival! Ready for Domain Expansion?",
      japaneseQuote: "やあ！五条悟だ。天上天下、光の祭りは最高のフェスだぜ！領域展開の準備はできたか？",
      audioUrl: '/audio/characters/gojo/welcome.wav',
      avatarBg: 'from-red-600 to-zinc-900',
    },
    {
      characterId: 'gojo',
      characterName: 'Satoru Gojo',
      japaneseName: '五条 悟',
      animeSeries: 'Jujutsu Kaisen',
      personality: 'Gojo-style',
      personalityDescription: 'Confident, playful, charismatic & teasing',
      section: 'home',
      quote: "Check out the special announcements! Don't miss our legendary guest stages and Anisong live band!",
      japaneseQuote: "特別アナウンスをチェック！豪華ゲストステージとアニソンライブは見逃せないぞ！",
      audioUrl: '/audio/characters/gojo/announcement.wav',
      avatarBg: 'from-red-600 to-zinc-900',
    },
    {
      characterId: 'gojo',
      characterName: 'Satoru Gojo',
      japaneseName: '五条 悟',
      animeSeries: 'Jujutsu Kaisen',
      personality: 'Gojo-style',
      personalityDescription: 'Confident, playful, charismatic & teasing',
      section: 'home',
      quote: "These featured sections are top-tier. Even cursed energy can't match this excitement!",
      japaneseQuote: "フィーチャーセクションは最高級だ。呪力でさえこの興奮には敵わないね！",
      audioUrl: '/audio/characters/gojo/featured.wav',
      avatarBg: 'from-red-600 to-zinc-900',
    },
  ],
  tanjiro: [
    {
      characterId: 'tanjiro',
      characterName: 'Tanjiro Kamado',
      japaneseName: '竈門 炭治郎',
      animeSeries: 'Demon Slayer',
      personality: 'Tanjiro-style',
      personalityDescription: 'Warm, sincere, respectful & emotional',
      section: 'about',
      quote: "Konnichiwa! Tanjiro Kamado here. The Kizuna bonds of Hikari no Matsuri connect us all across cultures!",
      japaneseQuote: "こんにちは！竈門炭治郎です。光の祭りの絆は、言葉や文化を超えて皆を温かく繋ぎます！",
      audioUrl: '/audio/characters/tanjiro/about.wav',
      avatarBg: 'from-emerald-600 to-teal-500',
    },
    {
      characterId: 'tanjiro',
      characterName: 'Tanjiro Kamado',
      japaneseName: '竈門 炭治郎',
      animeSeries: 'Demon Slayer',
      personality: 'Tanjiro-style',
      personalityDescription: 'Warm, sincere, respectful & emotional',
      section: 'about',
      quote: "Every lantern lit at CIT carries the warmth and passion of our community. Let's create unforgettable memories!",
      japaneseQuote: "会場の提灯一つ一つに、みんなの熱い思いが宿っています。忘れられない思い出を作りましょう！",
      audioUrl: '/audio/characters/tanjiro/story.wav',
      avatarBg: 'from-emerald-600 to-teal-500',
    },
    {
      characterId: 'tanjiro',
      characterName: 'Tanjiro Kamado',
      japaneseName: '竈門 炭治郎',
      animeSeries: 'Demon Slayer',
      personality: 'Tanjiro-style',
      personalityDescription: 'Warm, sincere, respectful & emotional',
      section: 'about',
      quote: "Isshoni Nihongo club welcomes everyone with an open heart. Learning Japanese together is an incredible journey!",
      japaneseQuote: "一緒に日本語クラブは誰でも温かく歓迎します。共に学ぶ道のりは本当に素晴らしいですよ！",
      audioUrl: '/audio/characters/tanjiro/community.wav',
      avatarBg: 'from-emerald-600 to-teal-500',
    },
  ],
  luffy: [
    {
      characterId: 'luffy',
      characterName: 'Monkey D. Luffy',
      japaneseName: 'モンキー・D・ルフィ',
      animeSeries: 'One Piece',
      personality: 'Luffy-style',
      personalityDescription: 'Energetic, excited & adventurous',
      section: 'schedule',
      quote: "Yosha! Monkey D. Luffy here! The Cosplay masquerade and Yatai food alley are gonna be huge! Let me at the meat!",
      japaneseQuote: "よっしゃー！ルフィだ！コスプレ大会も屋台の肉も最高だぞ！みんなで楽しもうぜ！",
      audioUrl: '/audio/characters/luffy/highlights.wav',
      avatarBg: 'from-amber-500 to-red-600',
    },
    {
      characterId: 'luffy',
      characterName: 'Monkey D. Luffy',
      japaneseName: 'モンキー・D・ルフィ',
      animeSeries: 'One Piece',
      personality: 'Luffy-style',
      personalityDescription: 'Energetic, excited & adventurous',
      section: 'schedule',
      quote: "Check out the schedule! From morning till night, the festival main stage is packed with adventures!",
      japaneseQuote: "スケジュールを確かめろ！朝から夜まで冒険とライブがギッシリ詰まってるぞ！",
      audioUrl: '/audio/characters/luffy/schedule.wav',
      avatarBg: 'from-amber-500 to-red-600',
    },
    {
      characterId: 'luffy',
      characterName: 'Monkey D. Luffy',
      japaneseName: 'モンキー・D・ルフィ',
      animeSeries: 'One Piece',
      personality: 'Luffy-style',
      personalityDescription: 'Energetic, excited & adventurous',
      section: 'tickets',
      quote: "Grab your festival passes right now! You don't wanna miss the biggest anime celebration on January 8, 2027!",
      japaneseQuote: "今すぐフェスパスを手に入れろ！2027年最大の特大アニメ祭りに乗り遅れるなよ！",
      audioUrl: '/audio/characters/luffy/cta.wav',
      avatarBg: 'from-amber-500 to-red-600',
    },
  ],
  naruto: [
    {
      characterId: 'naruto',
      characterName: 'Naruto Uzumaki',
      japaneseName: 'うずまき ナルト',
      animeSeries: 'Naruto Shippuden',
      personality: 'Naruto-style',
      personalityDescription: 'Enthusiastic, bold & determined',
      section: 'general',
      quote: "Dattebayo! Naruto Uzumaki here! Notes of Nippon live music stage and hot ramen at CIT are gonna be insane!",
      japaneseQuote: "だってばよ！うずまきナルトだ！熱々のラーメンと最高の音楽ライブを全力で楽しもうぜ！",
      audioUrl: '/audio/characters/naruto/welcome.wav',
      avatarBg: 'from-orange-500 to-amber-500',
    },
  ],
  anya: [
    {
      characterId: 'anya',
      characterName: 'Anya Forger',
      japaneseName: 'アーニャ・フォージャー',
      animeSeries: 'Spy x Family',
      personality: 'Anya-style',
      personalityDescription: 'Cute, high-pitched & enthusiastic',
      section: 'general',
      quote: "Waku Waku! Anya is quiz master! Anime Quiz and Cosplay masquerade give peanuts and Stella Stars!",
      japaneseQuote: "ワクワク！アーニャ、クイズのマスター！アニメクイズでステラ星とピーナッツもらえる！",
      audioUrl: '/audio/characters/anya/welcome.wav',
      avatarBg: 'from-pink-500 to-rose-400',
    },
  ],
  levi: [
    {
      characterId: 'levi',
      characterName: 'Levi Ackerman',
      japaneseName: 'リヴァイ・アッカーマン',
      animeSeries: 'Attack on Titan',
      personality: 'Levi-style',
      personalityDescription: 'Deep, stoic, sharp & orderly',
      section: 'general',
      quote: "Tch. Levi here. Keep the festival grounds spotless and present your HNM ticket pass at the entrance.",
      japaneseQuote: "チッ。リヴァイだ。会場を清潔に保ち、入場の際は提示用のHNMパスを準備しておけ。",
      audioUrl: '/audio/characters/levi/welcome.wav',
      avatarBg: 'from-slate-700 to-emerald-800',
    },
  ],
};

interface AudioContextType {
  isMuted: boolean;
  masterVolume: number;
  voiceVolume: number;
  bgmVolume: number;
  isBgmPlaying: boolean;
  isPlayingVoice: boolean;
  activeVoiceLine: CharacterVoiceLine | null;
  toggleMute: () => void;
  setMasterVolume: (vol: number) => void;
  setVoiceVolume: (vol: number) => void;
  setBgmVolume: (vol: number) => void;
  toggleBgm: () => void;
  playCharacterVoice: (characterId: string, index?: number) => void;
  stopCharacterVoice: () => void;
  playSfx: (sfxType: 'taiko' | 'shinobue' | 'click' | 'chime') => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      try {
        return localStorage.getItem('hnm_audio_muted') === 'true';
      } catch {
        return false;
      }
    }
    return false;
  });
  const [masterVolume, setMasterVolumeState] = useState<number>(0.8);
  const [voiceVolume, setVoiceVolumeState] = useState<number>(1.0);
  const [bgmVolume, setBgmVolumeState] = useState<number>(0.3);

  const [isBgmPlaying, setIsBgmPlaying] = useState<boolean>(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState<boolean>(false);
  const [activeVoiceLine, setActiveVoiceLine] = useState<CharacterVoiceLine | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const bgmAudioRef = useRef<HTMLAudioElement | null>(null);
  const sfxAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('hnm_audio_muted', isMuted.toString());
      } catch {
        // Ignore storage errors in sandboxed environments
      }
    }
  }, [isMuted]);

  // Handle Voice Audio instance
  const playCharacterVoice = (characterId: string, index: number = 0) => {
    if (isMuted) return;

    const charLines = CHARACTER_VOICE_DATA[characterId.toLowerCase()];
    if (!charLines || charLines.length === 0) return;

    const line = charLines[index % charLines.length];
    setActiveVoiceLine(line);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(line.audioUrl);
    audio.volume = masterVolume * voiceVolume;
    audioRef.current = audio;

    audio.onplay = () => setIsPlayingVoice(true);
    audio.onended = () => {
      setIsPlayingVoice(false);
      setActiveVoiceLine(null);
    };
    audio.onerror = () => {
      setIsPlayingVoice(false);
      setActiveVoiceLine(null);
    };

    audio.play().catch(err => {
      console.warn('Audio playback blocked by browser or failed:', err);
      setIsPlayingVoice(false);
    });
  };

  const stopCharacterVoice = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlayingVoice(false);
    setActiveVoiceLine(null);
  };

  const toggleMute = () => {
    setIsMuted(prev => {
      const next = !prev;
      if (next) {
        if (audioRef.current) audioRef.current.pause();
        if (bgmAudioRef.current) bgmAudioRef.current.pause();
        setIsPlayingVoice(false);
        setIsBgmPlaying(false);
      }
      return next;
    });
  };

  const setMasterVolume = (vol: number) => {
    setMasterVolumeState(vol);
    if (audioRef.current) audioRef.current.volume = vol * voiceVolume;
    if (bgmAudioRef.current) bgmAudioRef.current.volume = vol * bgmVolume;
  };

  const setVoiceVolume = (vol: number) => {
    setVoiceVolumeState(vol);
    if (audioRef.current) audioRef.current.volume = masterVolume * vol;
  };

  const setBgmVolume = (vol: number) => {
    setBgmVolumeState(vol);
    if (bgmAudioRef.current) bgmAudioRef.current.volume = masterVolume * vol;
  };

  const toggleBgm = () => {
    if (isMuted) return;

    if (isBgmPlaying && bgmAudioRef.current) {
      bgmAudioRef.current.pause();
      setIsBgmPlaying(false);
    } else {
      if (!bgmAudioRef.current) {
        bgmAudioRef.current = new Audio('/audio/sfx/festival_ambience.wav');
        bgmAudioRef.current.loop = true;
      }
      bgmAudioRef.current.volume = masterVolume * bgmVolume;
      bgmAudioRef.current.play().then(() => {
        setIsBgmPlaying(true);
      }).catch(err => {
        console.warn('BGM play blocked:', err);
        setIsBgmPlaying(false);
      });
    }
  };

  const playSfx = (sfxType: 'taiko' | 'shinobue' | 'click' | 'chime') => {
    if (isMuted) return;

    let sfxPath = '/audio/sfx/taiko.wav';
    if (sfxType === 'shinobue' || sfxType === 'chime') {
      sfxPath = '/audio/sfx/shinobue.wav';
    }

    const sfx = new Audio(sfxPath);
    sfx.volume = masterVolume * 0.7;
    sfx.play().catch(() => {});
  };

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        masterVolume,
        voiceVolume,
        bgmVolume,
        isBgmPlaying,
        isPlayingVoice,
        activeVoiceLine,
        toggleMute,
        setMasterVolume,
        setVoiceVolume,
        setBgmVolume,
        toggleBgm,
        playCharacterVoice,
        stopCharacterVoice,
        playSfx,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
