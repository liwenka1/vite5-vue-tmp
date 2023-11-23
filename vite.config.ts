import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    base: env.VITE_PUBLIC_PATH,
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/styles/variables.scss';`
        }
      }
    },
    server: {
      host: true,
      port: 4000,
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace('/^/api/', '')
        }
      }
    },
    esbuild: {
      drop: ['console', 'debugger']
    },
    build: {
      chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
      outDir: 'dist',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'static/js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
          // 最小化拆分包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  }
})
