/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
  build: {
    assetsDir: 'assets-vite-config',
    // 暂时设置为false vite的BUG keep_classnames不生效导致反射获取类失败
    minify: false,
    terserOptions: {
      keep_classnames: true,
      keep_fnames: true,
    },
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 3000,
    https: false,
    // 测试可以用我们提供的 https://service.hamm.cn 推荐我们的后端项目 https://github.com/HammCn/AirPower4J
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
      '/oauth2': 'http://localhost:8080',
    },
  },
})
