import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/build-me-an-ai-powered-resume-analyzer-that-scores/",
  build: { outDir: "dist", assetsDir: "assets" },
  server: { port: 3000 },
});
