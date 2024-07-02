import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://110.41.8.154:8080/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/img':{
        target: 'https://food.281718.xyz/img',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/img/, ''),
      }
    }
  }
})
