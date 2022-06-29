/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { peerDependencies, dependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    eslintPlugin(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@lib': resolve(__dirname, 'lib'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'lib/setupTests.ts',
    coverage: {
      exclude: ['lib/utils'],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib', 'index.ts'),
      name: 'YourLibrary',
      fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    target: 'es2015',
    sourcemap: true,
  },
})
