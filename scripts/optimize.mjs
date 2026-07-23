import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const dir = './public/media';
const files = await readdir(dir);

for (const f of files) {
  if (/\.(jpe?g|png)$/i.test(f) && !f.startsWith('symbol')) {
    const src = path.join(dir, f);
    const base = f.replace(/\.[^.]+$/, '');
    const webp = path.join(dir, base + '.webp');
    await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(webp);
    console.log('wrote', webp);
  }
}

// Symbol: two versions (dark bg = original white-on-black cropped; light bg = inverted)
const symbolSrc = path.join(dir, 'symbol.jpg');
// Crop to the actual symbol area (centered ~35% of image based on inspection)
const size = 2048;
const symbolBox = Math.round(size * 0.34);
const offset = Math.round((size - symbolBox) / 2);

// White symbol on transparent (for dark backgrounds): keep white square, make black bg transparent
await sharp(symbolSrc)
  .extract({ left: offset, top: offset, width: symbolBox, height: symbolBox })
  .resize(256, 256)
  .webp({ quality: 92 })
  .toFile(path.join(dir, 'symbol-light.webp'));
console.log('wrote symbol-light.webp');

// Black symbol on white (for light backgrounds): invert
await sharp(symbolSrc)
  .extract({ left: offset, top: offset, width: symbolBox, height: symbolBox })
  .resize(256, 256)
  .negate({ alpha: false })
  .webp({ quality: 92 })
  .toFile(path.join(dir, 'symbol-dark.webp'));
console.log('wrote symbol-dark.webp');

// Favicon: 64x64 PNG from cropped symbol
await sharp(symbolSrc)
  .extract({ left: offset, top: offset, width: symbolBox, height: symbolBox })
  .resize(64, 64)
  .png()
  .toFile(path.join(dir, '..', 'favicon.png'));
console.log('wrote favicon.png');
