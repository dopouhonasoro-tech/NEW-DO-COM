import type { APIRoute } from 'astro';
import { SITE, SOLUTIONS } from '../data/site';

/**
 * Sitemap généré sans dépendance externe.
 * Les pages techniques (merci) et les maquettes /preview/ en sont exclues.
 */
const pages: { path: string; priority: string }[] = [
  { path: '/', priority: '1.0' },
  { path: '/solutions/', priority: '0.9' },
  ...SOLUTIONS.map((s) => ({ path: `/solutions/${s.slug}/`, priority: '0.8' })),
  { path: '/approche/', priority: '0.8' },
  { path: '/realisations/', priority: '0.8' },
  { path: '/faq/', priority: '0.7' },
  { path: '/a-propos/', priority: '0.6' },
  { path: '/contact/', priority: '0.7' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = pages
    .map(
      ({ path, priority }) => `  <url>
    <loc>${SITE.url}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
