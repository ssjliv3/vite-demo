  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [vue()],
    preview: {
      port: 5173,
      strictPort: true,
    },
    server: {
      port: 5173,
      strictPort: true,
      host: '0.0.0.0',
      origin: "http://localhost:5173",
    },
  })
