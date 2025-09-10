import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
// GitHub Pages deployment configuration
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/rfe/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
