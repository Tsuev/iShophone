import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VitePWA(
      { 
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        manifest: {
          start_url: "/",
          name: 'IShophone',
          short_name: 'IShop',
          description: 'Покупка телефона стала дешевой и доступной',
          theme_color: '#0d9a81',
          background_color: "#0d9a81",
          display: "standalone",
          icons: [
            {
              src: '/src/assets/pwa-logo/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/src/assets/pwa-logo/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        } 
      }
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
