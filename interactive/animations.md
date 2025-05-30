---
layout: default
---

# 动画和交互

## 点击动画 (v-click)

<v-clicks>

- 这一行将在第一次点击时显示
- 这一行将在第二次点击时显示
- 这一行将在第三次点击时显示

</v-clicks>

## 点击组 (v-clicks)

<div v-clicks class="mt-6">

### 这整个部分将一起出现

- 包括这个列表
- 和所有这些项目
- 作为一个组

</div>

## 自定义点击 (v-click)

<div class="grid grid-cols-3 gap-4 mt-6">
  <div v-click class="bg-blue-100 p-4 rounded">项目 1</div>
  <div v-click class="bg-green-100 p-4 rounded">项目 2</div>
  <div v-click class="bg-yellow-100 p-4 rounded">项目 3</div>
</div>

## 动画效果 (v-motion)

<div class="mt-6">
  <div
    v-motion
    :initial="{ x: -80, opacity: 0 }"
    :enter="{ x: 0, opacity: 1, transition: { delay: 200, duration: 1000 } }"
    class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded"
  >
    这个元素将从左侧滑入
  </div>
</div>

<div class="mt-4">
  <div
    v-motion
    :initial="{ y: 100, opacity: 0 }"
    :enter="{ y: 0, opacity: 1, transition: { delay: 300, duration: 1000 } }"
    class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded"
  >
    这个元素将从底部滑入
  </div>
</div>

## 交互组件

<div class="mt-6">
  <button @click="count++" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    点击计数: {{ count }}
  </button>
</div>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
\`\`\`

## 5. 自定义布局

下面是如何创建自定义布局：
