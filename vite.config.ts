import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts()
  ],
  build: {
    outDir: 'dist',
    minify: true,
    lib: {
      entry: './src/index.ts',
      name: 'wc',
    },
    rollupOptions: {
      external: ['vue', /\.scss/],
      input: ['./src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          preserveModulesRoot: './src',
          exports: 'named',
          dir: resolve(__dirname, './dist')
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: './src',
          exports: 'named',
          dir: resolve(__dirname, './dist')
        }
      ]
    }
  }
})
