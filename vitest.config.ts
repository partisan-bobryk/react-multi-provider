import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["lib/**/test/**"],
    globals: true,
    environment: "jsdom",
  },
});
