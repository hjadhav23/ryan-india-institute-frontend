import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ryan-india-institute-frontend/',
  plugins: [react()],
})