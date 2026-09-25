import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// The production build is served from GitHub Pages at /ashok-portfolio/;
// the dev server keeps serving from the root.
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? '/ashok-portfolio/' : '/',
}))
