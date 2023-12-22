import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
