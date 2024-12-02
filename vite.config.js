import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://qkm2d13d-3000.aue.devtunnels.ms",
        changeOrigin: true,
      },
    },
  },
});
