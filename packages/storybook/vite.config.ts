/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import ZakelUI from "@zakel-ui/vite";

export default defineConfig({
  plugins: [
    react(),
    ZakelUI({
      wasm: true,
    }) as Plugin,
  ],
});
