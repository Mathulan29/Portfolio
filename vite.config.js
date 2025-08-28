import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/Portfolio/", // 👈 replace with your GitHub repo name
})
