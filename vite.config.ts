import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: {
        component: path.resolve(__dirname, 'src/components/index.ts'),
        helper: path.resolve(__dirname, 'src/helpers/index.ts'),
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
})
