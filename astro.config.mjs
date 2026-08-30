import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theaayushdev.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  redirects: {
    '/blogs.html': '/journal/',
  },
});
