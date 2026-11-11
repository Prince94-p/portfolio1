import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: process.env.CF_PAGES ? '/' : (process.env.VITE_BASE_PATH || '/portfolio1/'),
  plugins: [react(), tailwindcss()],
});