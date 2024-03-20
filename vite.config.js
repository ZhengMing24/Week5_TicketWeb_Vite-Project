import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Week5_TicketWeb_Vite-Project/',//vite環境的網址
  server: {
    // 啟動 server 時預設開啟的頁面
    open: 'index.html',
  },
})
