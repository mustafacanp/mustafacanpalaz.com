// Synthesizes the small UI sounds used by Arwes bleeps into public/sounds.
// Run once: node scripts/gen-sounds.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const RATE = 22050;
const outDir = fileURLToPath(new URL('../public/sounds/', import.meta.url));

const wav = (samples) => {
  const data = Buffer.alloc(samples.length * 2);
  samples.forEach((s, i) => data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, s)) * 32767), i * 2));
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + data.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(RATE, 24);
  header.writeUInt32LE(RATE * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(data.length, 40);
  return Buffer.concat([header, data]);
};

const render = (seconds, fn) => Array.from({ length: Math.floor(seconds * RATE) }, (_, i) => fn(i / RATE));

// Short square-ish blip.
const click = render(0.05, (t) => Math.sign(Math.sin(2 * Math.PI * 1900 * t)) * 0.18 * Math.exp(-t * 90));

mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + 'click.wav', wav(click));
console.log('sounds written to', outDir);
