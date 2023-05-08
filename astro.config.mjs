import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    shikiConfig: {
      theme: "vitesse-dark"
    }
  }), tailwind(), svelte(), image()]
});