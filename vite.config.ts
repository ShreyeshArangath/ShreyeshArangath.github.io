import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: use '/' for user pages (username.github.io)
  // or '/repo-name/' for project pages
  base: '/',
})
