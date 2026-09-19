import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/ra2581392513039/",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],

})
