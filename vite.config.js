import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "abes-engineering-college-tq",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "abes-engineering-college-tq",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})