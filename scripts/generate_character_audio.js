import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to construct a standard 16-bit PCM WAV file buffer
function createWavBuffer(sampleRate, samples) {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = samples.length * 2;
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);

  // fmt subchunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size
  buffer.writeUInt16LE(1, 20);  // AudioFormat (1 = PCM)
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);

  // data subchunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  // Fill PCM samples
  for (let i = 0; i < samples.length; i++) {
    let s = Math.max(-1, Math.min(1, samples[i]));
    let val = s < 0 ? s * 0x8000 : s * 0x7FFF;
    buffer.writeInt16LE(Math.round(val), 44 + i * 2);
  }

  return buffer;
}

// Formant synthesizer & expressive anime character voice renderer
function generateAnimeVoice({
  durationSec = 2.5,
  pitchFreq = 160,
  pitchVariation = 30,
  pitchTrend = 'playful', // 'playful', 'sincere', 'adventurous', 'stoic', 'cute'
  vocalGrit = 0.05,
  formants = [500, 1500, 2500],
  syllables = 8,
  sampleRate = 22050
}) {
  const totalSamples = Math.floor(sampleRate * durationSec);
  const samples = new Float32Array(totalSamples);

  // Generate expressive pitch envelope over duration
  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const progress = t / durationSec;

    // Rhythmic syllable modulation (simulating dramatic anime speech cadence & pauses)
    const syllableFreq = (syllables / durationSec);
    const pauseEnv = Math.max(0, Math.sin(Math.PI * syllableFreq * t + 0.3)); // natural dramatic pauses
    
    // Expressive pitch contours
    let currentPitch = pitchFreq;
    if (pitchTrend === 'playful') { // Gojo: charismatic pitch jumps & teasing lilt
      currentPitch += Math.sin(2 * Math.PI * 1.5 * t) * pitchVariation + (progress > 0.7 ? 40 : 0);
    } else if (pitchTrend === 'sincere') { // Tanjiro: warm, steady, emotional swelling
      currentPitch += Math.sin(Math.PI * progress) * pitchVariation - (progress * 10);
    } else if (pitchTrend === 'adventurous') { // Luffy: energetic, high-energy rising shouts
      currentPitch += progress * pitchVariation * 1.8 + Math.sin(2 * Math.PI * 4 * t) * 15;
    } else if (pitchTrend === 'cute') { // Anya: high pitch waku-waku bounce
      currentPitch += Math.abs(Math.sin(2 * Math.PI * 3 * t)) * pitchVariation * 1.5;
    } else { // Levi: deep, stoic, controlled drop
      currentPitch += (0.5 - progress) * 15;
    }

    // Fundamental vocal fold pulse
    const phase = (t * currentPitch) % 1;
    let glottalPulse = (2 * phase - 1);
    
    // Add character vocal grit/sub-harmonics
    if (vocalGrit > 0) {
      glottalPulse += (Math.random() * 2 - 1) * vocalGrit + Math.sin(2 * Math.PI * (currentPitch / 2) * t) * vocalGrit * 0.5;
    }

    // Apply Formant resonant filters for vowel richness
    let vowelResonance = 0;
    formants.forEach((f, idx) => {
      const fShift = f + Math.sin(2 * Math.PI * 2 * t + idx) * 80;
      vowelResonance += Math.sin(2 * Math.PI * fShift * t) * (0.4 / (idx + 1));
    });

    // Combine fundamental, formant resonance, and dramatic amplitude envelope
    const env = Math.sin(Math.PI * progress) * Math.pow(pauseEnv, 0.8);
    const rawVoice = (glottalPulse * 0.4 + vowelResonance * 0.6) * env;

    samples[i] = rawVoice;
  }

  // Soft master limiter & warm saturation
  for (let i = 0; i < totalSamples; i++) {
    samples[i] = Math.tanh(samples[i] * 1.8) * 0.8;
  }

  return createWavBuffer(sampleRate, samples);
}

// Generate Festival Sound Effects (Taiko Drum, Japanese Flute Chime)
function generateTaikoHit(sampleRate = 22050) {
  const durationSec = 1.2;
  const totalSamples = Math.floor(sampleRate * durationSec);
  const samples = new Float32Array(totalSamples);

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const env = Math.exp(-t * 6);
    const pitch = 65 * Math.exp(-t * 12) + 40;
    const body = Math.sin(2 * Math.PI * pitch * t);
    const snap = (Math.random() * 2 - 1) * Math.exp(-t * 30) * 0.6;
    samples[i] = (body + snap) * env;
  }

  for (let i = 0; i < totalSamples; i++) {
    samples[i] = Math.tanh(samples[i] * 2) * 0.9;
  }

  return createWavBuffer(sampleRate, samples);
}

function generateShinobueChime(sampleRate = 22050) {
  const durationSec = 1.8;
  const totalSamples = Math.floor(sampleRate * durationSec);
  const samples = new Float32Array(totalSamples);

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const env = Math.sin(Math.PI * (t / durationSec));
    const pitch = 587.33 + Math.sin(2 * Math.PI * 5 * t) * 12;
    const flute = Math.sin(2 * Math.PI * pitch * t) + Math.sin(2 * Math.PI * pitch * 2 * t) * 0.25;
    const breathNoise = (Math.random() * 2 - 1) * 0.05 * env;
    samples[i] = (flute + breathNoise) * env * 0.6;
  }

  return createWavBuffer(sampleRate, samples);
}

function generateFestivalAmbience(sampleRate = 22050) {
  const durationSec = 4.0;
  const totalSamples = Math.floor(sampleRate * durationSec);
  const samples = new Float32Array(totalSamples);

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const breeze = (Math.random() * 2 - 1) * 0.08 * (0.6 + 0.4 * Math.sin(2 * Math.PI * 0.25 * t));
    const kotoNote = Math.sin(2 * Math.PI * 440 * t) * Math.exp(-((t * 2) % 1) * 4) * 0.12;
    samples[i] = breeze + kotoNote;
  }

  return createWavBuffer(sampleRate, samples);
}

// Audio File Directory Setup
const baseDir = path.join(__dirname, '../public/audio');
const characterDir = path.join(baseDir, 'characters');
const sfxDir = path.join(baseDir, 'sfx');

const directories = [
  baseDir,
  characterDir,
  sfxDir,
  path.join(characterDir, 'gojo'),
  path.join(characterDir, 'tanjiro'),
  path.join(characterDir, 'luffy'),
  path.join(characterDir, 'naruto'),
  path.join(characterDir, 'anya'),
  path.join(characterDir, 'levi'),
];

directories.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

// Generate character voice lines
const voiceConfigs = [
  // GOJO: Confident, playful, charismatic
  {
    filePath: path.join(characterDir, 'gojo', 'welcome.wav'),
    params: { durationSec: 3.2, pitchFreq: 195, pitchVariation: 35, pitchTrend: 'playful', vocalGrit: 0.03, formants: [600, 1600, 2700], syllables: 11 }
  },
  {
    filePath: path.join(characterDir, 'gojo', 'announcement.wav'),
    params: { durationSec: 2.8, pitchFreq: 210, pitchVariation: 40, pitchTrend: 'playful', vocalGrit: 0.04, formants: [650, 1700, 2800], syllables: 9 }
  },
  {
    filePath: path.join(characterDir, 'gojo', 'featured.wav'),
    params: { durationSec: 3.0, pitchFreq: 200, pitchVariation: 30, pitchTrend: 'playful', vocalGrit: 0.03, formants: [620, 1650, 2750], syllables: 10 }
  },

  // TANJIRO: Warm, sincere, respectful, emotional
  {
    filePath: path.join(characterDir, 'tanjiro', 'about.wav'),
    params: { durationSec: 3.5, pitchFreq: 165, pitchVariation: 20, pitchTrend: 'sincere', vocalGrit: 0.02, formants: [500, 1450, 2450], syllables: 12 }
  },
  {
    filePath: path.join(characterDir, 'tanjiro', 'story.wav'),
    params: { durationSec: 3.2, pitchFreq: 170, pitchVariation: 25, pitchTrend: 'sincere', vocalGrit: 0.02, formants: [520, 1500, 2500], syllables: 11 }
  },
  {
    filePath: path.join(characterDir, 'tanjiro', 'community.wav'),
    params: { durationSec: 3.0, pitchFreq: 160, pitchVariation: 22, pitchTrend: 'sincere', vocalGrit: 0.02, formants: [510, 1480, 2480], syllables: 10 }
  },

  // LUFFY: Energetic, excited, adventurous
  {
    filePath: path.join(characterDir, 'luffy', 'highlights.wav'),
    params: { durationSec: 2.7, pitchFreq: 240, pitchVariation: 55, pitchTrend: 'adventurous', vocalGrit: 0.08, formants: [700, 1800, 2900], syllables: 10 }
  },
  {
    filePath: path.join(characterDir, 'luffy', 'schedule.wav'),
    params: { durationSec: 2.9, pitchFreq: 250, pitchVariation: 60, pitchTrend: 'adventurous', vocalGrit: 0.09, formants: [720, 1850, 2950], syllables: 11 }
  },
  {
    filePath: path.join(characterDir, 'luffy', 'cta.wav'),
    params: { durationSec: 2.5, pitchFreq: 260, pitchVariation: 65, pitchTrend: 'adventurous', vocalGrit: 0.10, formants: [750, 1900, 3000], syllables: 9 }
  },

  // NARUTO: Enthusiastic, bold, determined
  {
    filePath: path.join(characterDir, 'naruto', 'welcome.wav'),
    params: { durationSec: 2.8, pitchFreq: 220, pitchVariation: 45, pitchTrend: 'adventurous', vocalGrit: 0.07, formants: [680, 1750, 2850], syllables: 10 }
  },

  // ANYA: Cute, high-pitched, waku-waku
  {
    filePath: path.join(characterDir, 'anya', 'welcome.wav'),
    params: { durationSec: 2.4, pitchFreq: 360, pitchVariation: 60, pitchTrend: 'cute', vocalGrit: 0.01, formants: [900, 2200, 3400], syllables: 8 }
  },

  // LEVI: Deep, stoic, sharp
  {
    filePath: path.join(characterDir, 'levi', 'welcome.wav'),
    params: { durationSec: 2.6, pitchFreq: 130, pitchVariation: 15, pitchTrend: 'stoic', vocalGrit: 0.05, formants: [450, 1300, 2300], syllables: 8 }
  },
];

console.log('Generating expressive character voice files and sound effects...');

voiceConfigs.forEach(item => {
  const wavBuf = generateAnimeVoice(item.params);
  fs.writeFileSync(item.filePath, wavBuf);
  console.log(`Saved: ${path.relative(process.cwd(), item.filePath)} (${wavBuf.length} bytes)`);
});

// Save SFX
const taikoBuf = generateTaikoHit();
fs.writeFileSync(path.join(sfxDir, 'taiko.wav'), taikoBuf);

const shinobueBuf = generateShinobueChime();
fs.writeFileSync(path.join(sfxDir, 'shinobue.wav'), shinobueBuf);

const ambBuf = generateFestivalAmbience();
fs.writeFileSync(path.join(sfxDir, 'festival_ambience.wav'), ambBuf);

console.log('All anime character voice audio assets generated successfully!');
