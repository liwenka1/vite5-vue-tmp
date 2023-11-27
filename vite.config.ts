import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { wrapperEnv } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_PORT, VITE_API_BASE_URL, VITE_PUBLIC_PATH } = wrapperEnv(mode, process)

  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'svg-icon-[dir]-[name]'
      })
    ],
    base: VITE_PUBLIC_PATH, // 开发或生产环境服务的公共基础路径 配置引入相对路径
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
      port: Number(VITE_PORT),
      proxy: {
        '/api': {
          target: VITE_API_BASE_URL,
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
