import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

# Maquettes de prospection : jamais indexées.
Disallow: /preview/

Sitemap: ${SITE.url}/sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
