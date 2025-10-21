import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // For Vercel/Netlify. Use '/personal-website/' for GitHub Pages
})
