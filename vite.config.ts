import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const ConfigeProxy = () => ({
  target: "https://cloud.raymand.net",
  changeOrigin: true,
  secure: false,
  onProxyRes: (proxyRes: any) => {
    proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    proxyRes.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
    proxyRes.headers["Access-Control-Allow-Headers"] = "Content-Type";
  },
});

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), svgr()],
    define: {
      "process.env.DEVELOPMENT_BASE_URL": JSON.stringify(
        env.DEVELOPMENT_BASE_URL
      ),
    },
    server: {
      open: true,
      proxy: {
        "/api": ConfigeProxy(),
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
