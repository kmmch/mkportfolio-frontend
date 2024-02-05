import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // https://stackoverflow.com/questions/75883720/504-outdated-optimize-dep-while-using-react-vite
  // net::ERR_ABORTED 504 (Outdated Optimize Dep) Vite
  // chakra net::ERR_ABORTED 504 (Outdated Optimize Dep)
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
});
