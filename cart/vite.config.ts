import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    strictPort: true,
    port: 3002,
    origin: "http://localhost:3002"
  },
  plugins: [react()],
});
