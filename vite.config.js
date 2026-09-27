import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes every path relative, so the site works on GitHub Pages
// no matter what you name the repository.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
