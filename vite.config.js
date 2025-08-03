import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/isabelle-and-renays-wedding-website/',
  plugins: [react()],
})
