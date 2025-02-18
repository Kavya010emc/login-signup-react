import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    outDir: 'dist',   // Ensure Vercel finds the build output
    emptyOutDir: true // Clears the dist folder before building
  }
})
