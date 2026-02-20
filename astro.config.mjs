// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://itsastrid.me",
  integrations: [mdx()],

  redirects: {
    "/blogs/rodalies/": "/maps#rodalies"
  }
});