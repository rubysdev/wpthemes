import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  site: 'https://07cd188d.wpthemes-dy9.pages.dev/',
});
