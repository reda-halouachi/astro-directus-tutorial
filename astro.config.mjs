// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import tailwindConfigViewer from "astro-tailwind-config-viewer";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    nesting: true,
  }), tailwindConfigViewer(), react()],
  output: 'server',
  adapter: node({
    mode: "standalone",
  }),
});