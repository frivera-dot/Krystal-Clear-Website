// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://krystalclearservice.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({ filter: (page) => !page.includes('/brand/') && !page.includes('/thank-you/') && !page.includes('/preview-blue/') && !page.includes('/preview-f5/') })]
});