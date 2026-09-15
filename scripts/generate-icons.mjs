// Script de build unic: generează PNG-urile de favicon din favicon.svg și
// decupează imaginea OG (1200×630) din poza hero. Rulat manual, nu la fiecare build.
import sharp from 'sharp';
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const publicDir = path.join(root, 'public');
const svgPath = path.join(publicDir, 'favicon.svg');

async function buildFavicons() {
  const svg = await readFile(svgPath);
  const sizes = [16, 32, 48, 180, 512];
  const buffers = {};
  for (const size of sizes) {
    const buf = await sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();
    buffers[size] = buf;
    if (size === 180) await writeFile(path.join(publicDir, 'apple-touch-icon.png'), buf);
    if (size === 512) await writeFile(path.join(publicDir, 'icon-512.png'), buf);
    if (size === 32) await writeFile(path.join(publicDir, 'favicon-32x32.png'), buf);
    if (size === 16) await writeFile(path.join(publicDir, 'favicon-16x16.png'), buf);
  }

  // ICO minimal, cu PNG-uri embedate (format acceptat din Windows Vista încoace).
  const icoSizes = [16, 32, 48];
  const images = icoSizes.map((s) => buffers[s]);
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const dirEntries = [];
  const imageBuffers = [];
  images.forEach((img, i) => {
    const size = icoSizes[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += img.length;
    dirEntries.push(entry);
    imageBuffers.push(img);
  });

  const ico = Buffer.concat([header, ...dirEntries, ...imageBuffers]);
  await writeFile(path.join(publicDir, 'favicon.ico'), ico);
}

async function buildOgImage() {
  const heroPath = path.join(root, 'src/assets/images/adrian-hero.webp');
  const width = 1200;
  const height = 630;
  const hero = await sharp(heroPath).resize(width, height, { fit: 'cover', position: 'attention' }).toBuffer();

  const overlaySvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stop-color="#17191D" stop-opacity="0.92" />
          <stop offset="0.55" stop-color="#17191D" stop-opacity="0.15" />
          <stop offset="1" stop-color="#17191D" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#g)" />
      <text x="64" y="500" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="52" fill="#FFFFFF">Diriginte de șantier Iași</text>
      <text x="64" y="556" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="30" fill="#F0C419">Adrian Olari — specialist autorizat ISC</text>
    </svg>
  `);

  await sharp(hero)
    .composite([{ input: overlaySvg }])
    .jpeg({ quality: 82 })
    .toFile(path.join(publicDir, 'og-image.jpg'));
}

await mkdir(publicDir, { recursive: true });
await buildFavicons();
await buildOgImage();
console.log('Favicons + OG image generate cu succes.');
