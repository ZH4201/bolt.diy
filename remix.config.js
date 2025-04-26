import { defineConfig } from "remix";
import vercel from "@remix-run/vercel";

export default defineConfig({
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  server: "./server.js",
  serverPlatform: "vercel",
  future: {
    // 保留你的 future flags
  }
});
