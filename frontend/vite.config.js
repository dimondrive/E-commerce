import { defineConfig } from 'vite'
import dns from 'dns'
import react from '@vitejs/plugin-react'
import * as path from 'path'

dns.setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
