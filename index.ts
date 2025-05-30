import { resolve } from "path"

export default {
  name: "apple",
  themeConfig: {
    primary: "#0071e3",
    secondary: "#34aadc",
  },
  layouts: {
    // 自定义布局
    intro: resolve(__dirname, "./layouts/intro.vue"),
    statement: resolve(__dirname, "./layouts/statement.vue"),
    "image-right": resolve(__dirname, "./layouts/image-right.vue"),
    "two-cols": resolve(__dirname, "./layouts/two-cols.vue"),
  },
  components: {
    // 自定义组件
    Counter: resolve(__dirname, "./components/Counter.vue"),
    AppleCard: resolve(__dirname, "./components/AppleCard.vue"),
  },
}
