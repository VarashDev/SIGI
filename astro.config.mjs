// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import db from '@astrojs/db';

import vercel from '@astrojs/vercel';

import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [db(), clerk()],
  output: "server",
  adapter: vercel(),
});