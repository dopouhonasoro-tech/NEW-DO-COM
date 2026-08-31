// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Nécessaire pour les URL canoniques, le sitemap et les balises Open Graph.
  // À mettre à jour le jour du branchement du nom de domaine définitif.
  site: 'https://docom.ci',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
