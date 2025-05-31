import { defineConfig } from "@slidev/cli";

export default defineConfig({
  // Slidev 特定配置
  title: "My Presentation",

  // Vite 配置
  vite: {
    server: {
      cors: {
        origin: "*", // 允许所有来源（开发环境）
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
        credentials: true,
      },
    },
  },
});
