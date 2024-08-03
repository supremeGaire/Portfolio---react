import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@components': './components',
    },
  },
  // server: {
  //   host: '192.168.1.72',  // Listen on all network interfaces
  //   port: 1010,   
  // },
})
