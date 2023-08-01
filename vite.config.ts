import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
export default defineConfig({
  plugins: [react(), dts({ exclude: ["**/test/**"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.tsx"),
      name: "react-multi-provider",
      fileName: "react-multi-provider",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
        sourcemap: true,
      },
    },
  },
});
