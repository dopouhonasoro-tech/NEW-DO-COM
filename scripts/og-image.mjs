/**
 * Génère l'image de partage social (Open Graph) 1200x630 à partir d'un SVG.
 * Usage : node scripts/og-image.mjs
 * Ne dépend que de sharp, déjà présent en devDependency.
 */
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(dir, '..', 'public', 'media', 'og-docom.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grille" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0H0V72" fill="none" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
    <radialGradient id="halo" cx="88%" cy="8%" r="55%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#10B981" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#000000"/>
  <rect width="1200" height="630" fill="url(#grille)"/>
  <rect width="1200" height="630" fill="url(#halo)"/>

  <rect x="80" y="96" width="3" height="42" fill="#10B981"/>
  <text x="104" y="128" font-family="Helvetica, Arial, sans-serif" font-size="20"
        letter-spacing="4" fill="#10B981">DO COM</text>

  <text x="80" y="286" font-family="Helvetica, Arial, sans-serif" font-size="76"
        font-weight="bold" letter-spacing="-2.5" fill="#FFFFFF">Votre organisation avance.</text>
  <text x="80" y="372" font-family="Helvetica, Arial, sans-serif" font-size="76"
        font-weight="bold" letter-spacing="-2.5" fill="#10B981">Vos outils la freinent.</text>

  <text x="80" y="450" font-family="Helvetica, Arial, sans-serif" font-size="27"
        fill="#9AA1A6">Transformation digitale, marketing et intelligence artificielle.</text>

  <rect x="80" y="516" width="1040" height="1" fill="#1D2124"/>
  <text x="80" y="566" font-family="Helvetica, Arial, sans-serif" font-size="23"
        fill="#FFFFFF">Voyez plus loin, digitalement.</text>
  <text x="1120" y="566" text-anchor="end" font-family="Helvetica, Arial, sans-serif"
        font-size="23" fill="#9AA1A6">Abidjan, Cote d'Ivoire</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log('Image Open Graph generee :', out);
