import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  redirects: {
    "/adoptar": "/adopciones/adoptar",
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["dineric-olene-carpingly.ngrok-free.dev"],
    },
  },
});
