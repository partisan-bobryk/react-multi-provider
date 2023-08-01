import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./examples",
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "MultiProvider",
      fileName: "react-multi-provider",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
