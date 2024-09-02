import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   host:"localhost",
  //   port:3000
  // }
  server:{
    port:4000,
    proxy: {
			"/api": {
				target: "http://localhost:3000",
        changeOrigin: true,
        secure:false,
        ws:false
			},
		},
  }
})
