import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { aliases } from './vite.aliases.ts';

export default defineConfig({
  base: '/my-cv/',
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: aliases,
  },
  server: { open: true },
});
