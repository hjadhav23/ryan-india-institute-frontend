import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' + HashRouter = works on GitHub Pages and on your custom domain with no server config
export default defineConfig({ plugins: [react()], base: './' })
