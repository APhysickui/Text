import { defineConfig } from "@slidev/cli";

export default defineConfig({
  // Presentation title
  title: "My Presentation",

  // Configure Vite server options
  server: {
    host: "0.0.0.0", // Allow connections from any IP
    port: 3030, // Set port to 3030
    cors: true, // Enable CORS
  },

  // More detailed CORS configuration via Vite
  vite: {
    server: {
      cors: {
        origin: "*", // Allow all origins
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
        credentials: true,
      },
    },
  },
});
