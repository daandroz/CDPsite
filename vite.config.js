import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/CDPsite/', // 👈 reemplaza con el nombre real de tu repositorio
  plugins: [react(), tailwindcss()],
})