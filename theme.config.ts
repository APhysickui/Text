import { defineThemeConfig } from "@slidev/types"
import { resolve } from "path"

export default defineThemeConfig({
  name: "apple",

  fonts: {
    sans: 'Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    mono: '"SF Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
    local: [
      {
        name: "SF Pro Display",
        path: resolve(__dirname, "./fonts/SF-Pro-Display-Regular.otf"),
        weight: "400",
        style: "normal",
      },
      {
        name: "SF Pro Display",
        path: resolve(__dirname, "./fonts/SF-Pro-Display-Medium.otf"),
        weight: "500",
        style: "normal",
      },
      {
        name: "SF Pro Display",
        path: resolve(__dirname, "./fonts/SF-Pro-Display-Bold.otf"),
        weight: "700",
        style: "normal",
      },
    ],
  },

  highlighter: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },

  defaults: {
    fonts: {
      mono: '"SF Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
    },
    hightlighter: {
      showLineNumbers: false,
    },
  },

  layouts: {
    intro: resolve(__dirname, "./layouts/intro.vue"),
    statement: resolve(__dirname, "./layouts/statement.vue"),
  },
})
