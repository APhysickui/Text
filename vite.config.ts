import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 3030,
    cors: {
      // 使用简化的 CORS 配置，避免类型错误
      origin: [
        "http://localhost:3030",
        "http://127.0.0.1:3030",
        "https://slides.ethan02.com",
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
      credentials: true,
    },
  },
});
