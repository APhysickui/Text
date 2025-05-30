---
theme: apple
title: 布局示例演示
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
---

<!--
layout: cover
-->

# 布局示例演示

探索各种精美的幻灯片布局

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-8 py-4 rounded-full cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
    开始探索 <carbon:arrow-right class="inline ml-2"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="在 GitHub 上查看"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-github />
  </a>
</div>

---
layout: intro
---

# 关于这个演示

<div class="leading-8 opacity-80">
这个演示文稿展示了各种不同的布局类型，<br>
帮助您了解如何在 Slidev 中创建美观的幻灯片。
</div>

<div class="my-10 space-y-4">
  <div class="flex items-center">
    <carbon:layout class="text-3xl text-blue-500 mr-4"/>
    <div class="text-xl font-medium">多种布局选择</div>
  </div>
  <div class="flex items-center">
    <carbon:paint-brush class="text-3xl text-green-500 mr-4"/>
    <div class="text-xl font-medium">精美的设计</div>
  </div>
  <div class="flex items-center">
    <carbon:code class="text-3xl text-purple-500 mr-4"/>
    <div class="text-xl font-medium">易于使用</div>
  </div>
</div>

::sidebar::

<div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
  <h3 class="text-xl font-bold mb-4">包含的布局</h3>
  <ul class="space-y-2 text-sm">
    <li>✓ Cover - 封面布局</li>
    <li>✓ Intro - 介绍布局</li>
    <li>✓ Two-cols - 两栏布局</li>
    <li>✓ Image-right - 图文布局</li>
    <li>✓ Center - 居中布局</li>
    <li>✓ Statement - 声明布局</li>
    <li>✓ Section - 章节布局</li>
  </ul>
</div>

---
layout: section
section: "01"
---

# 基础布局

探索最常用的布局类型

---
layout: two-cols
---

::header::

# 两栏布局示例

这是一个展示两栏布局的示例页面

## 左侧内容

这里是左侧的内容区域，您可以放置：

- 文本内容
- 列表项目
- 代码块
- 其他元素

### 代码示例

\`\`\`js
function hello() {
  console.log('Hello, Slidev!');
}
\`\`\`

### 特性列表

- 响应式设计
- 易于使用
- 高度可定制

::right::

## 右侧内容

这里是右侧的内容区域，通常用于：

- 补充信息
- 图片展示
- 数据统计
- 相关链接

### 数据统计

<div class="space-y-4">
  <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
    <div class="text-2xl font-bold text-blue-600">1,000+</div>
    <div class="text-sm text-gray-600 dark:text-gray-400">活跃用户</div>
  </div>
  
  <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
    <div class="text-2xl font-bold text-green-600">99.9%</div>
    <div class="text-sm text-gray-600 dark:text-gray-400">正常运行时间</div>
  </div>
  
  <div class="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
    <div class="text-2xl font-bold text-purple-600">24/7</div>
    <div class="text-sm text-gray-600 dark:text-gray-400">技术支持</div>
  </div>
</div>

---
layout: image-right
image: /placeholder.svg?height=600&width=500&query=modern%20office%20workspace
alt: 现代办公空间
---

# 图文布局示例

这个布局将文本内容放在左侧，图片放在右侧，非常适合产品介绍或功能展示。

## 主要特点

- 清晰的视觉层次
- 平衡的内容分布
- 专业的外观设计

## 使用场景

- 产品功能介绍
- 团队成员展示
- 案例研究展示
- 技术架构说明

## 配置方法

在 frontmatter 中添加：

\`\`\`yaml
---
layout: image-right
image: /path/to/image.jpg
alt: 图片描述
---
\`\`\`

---
layout: center
---

# 居中布局

这个布局将所有内容居中显示，适合展示重要信息、统计数据或关键消息。

<div class="grid grid-cols-3 gap-8 mt-12">
  <div v-click class="text-center">
    <div class="text-4xl font-bold text-blue-500 mb-2">50+</div>
    <div class="text-lg">布局组件</div>
  </div>
  <div v-click class="text-center">
    <div class="text-4xl font-bold text-green-500 mb-2">1000+</div>
    <div class="text-lg">满意用户</div>
  </div>
  <div v-click class="text-center">
    <div class="text-4xl font-bold text-purple-500 mb-2">99%</div>
    <div class="text-lg">好评率</div>
  </div>
</div>

---
layout: statement
---

# 设计不仅仅是外观和感觉，设计是产品如何工作

<div class="text-right text-gray-500 dark:text-gray-400 mt-8 text-lg">
— 史蒂夫·乔布斯
</div>

---
layout: section
section: "02"
---

# 高级功能

探索更多强大的功能特性

---
layout: default
---

# 默认布局 - 灵活的内容展示

默认布局是最灵活的布局，适合展示各种类型的内容。

## 支持的内容类型

<div class="grid grid-cols-2 gap-8 mt-6">
  <div>
    <h3 class="text-xl font-semibold mb-4">文本内容</h3>
    <ul class="space-y-2">
      <li>标题和段落</li>
      <li>列表和引用</li>
      <li>链接和强调</li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-xl font-semibold mb-4">媒体内容</h3>
    <ul class="space-y-2">
      <li>图片和图标</li>
      <li>视频和音频</li>
      <li>图表和图形</li>
    </ul>
  </div>
</div>

## 代码展示

\`\`\`typescript
interface SlideLayout {
  name: string;
  component: Component;
  props?: Record<string, any>;
}

const layouts: SlideLayout[] = [
  { name: 'cover', component: CoverLayout },
  { name: 'default', component: DefaultLayout },
  { name: 'two-cols', component: TwoColsLayout }
];
\`\`\`

## 交互元素

<div class="flex gap-4 mt-6">
  <button class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
    主要按钮
  </button>
  <button class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
    次要按钮
  </button>
</div>

---
layout: default
---

# 自定义网格布局

使用 Tailwind CSS 的网格系统，您可以创建复杂的自定义布局。

<div class="grid grid-cols-4 gap-4 mt-8">
  <div class="col-span-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-2">主要内容区</h3>
    <p>这个区域占据两列的宽度，适合放置主要内容。</p>
  </div>
  
  <div class="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
    <h4 class="font-semibold mb-2">侧边栏 1</h4>
    <p class="text-sm">补充信息</p>
  </div>
  
  <div class="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
    <h4 class="font-semibold mb-2">侧边栏 2</h4>
    <p class="text-sm">相关链接</p>
  </div>
  
  <div class="col-span-3 bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
    <h4 class="font-semibold mb-2">底部内容区</h4>
    <p class="text-sm">这个区域占据三列的宽度，可以放置总结信息或行动号召。</p>
  </div>
  
  <div class="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
    <h4 class="font-semibold mb-2">小组件</h4>
    <p class="text-sm">统计数据</p>
  </div>
</div>

## 网格布局代码

\`\`\`html
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-2">主要内容</div>
  <div>侧边栏 1</div>
  <div>侧边栏 2</div>
  <div class="col-span-3">底部内容</div>
  <div>小组件</div>
</div>
\`\`\`

---
layout: default
---

# 动画和交互效果

Slidev 支持丰富的动画和交互效果，让您的演示更加生动。

## 点击动画 (v-click)

<v-clicks>

- 这一行会在第一次点击时出现
- 这一行会在第二次点击时出现
- 这一行会在第三次点击时出现
- 最后这一行会在第四次点击时出现

</v-clicks>

## 自定义动画

<div class="grid grid-cols-3 gap-6 mt-8">
  <div 
    v-click
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 1000 } }"
    class="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center"
  >
    <div class="text-3xl mb-2">🚀</div>
    <h4 class="font-semibold">从下方滑入</h4>
  </div>
  
  <div 
    v-click
    v-motion
    :initial="{ opacity: 0, x: -100 }"
    :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 1000 } }"
    class="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center"
  >
    <div class="text-3xl mb-2">⚡</div>
    <h4 class="font-semibold">从左侧滑入</h4>
  </div>
  
  <div 
    v-click
    v-motion
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, scale: 1, transition: { delay: 600, duration: 1000 } }"
    class="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg text-center"
  >
    <div class="text-3xl mb-2">✨</div>
    <h4 class="font-semibold">缩放进入</h4>
  </div>
</div>

## 交互组件

<div class="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
  <div class="flex items-center justify-between">
    <span class="text-lg">计数器示例：</span>
    <div class="flex items-center gap-4">
      <button @click="count > 0 && count--" class="px-3 py-1 bg-red-500 text-white rounded">-</button>
      <span class="text-2xl font-bold w-12 text-center">{{ count }}</span>
      <button @click="count++" class="px-3 py-1 bg-green-500 text-white rounded">+</button>
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

---
layout: center
---

# 感谢观看

希望这些布局示例对您有所帮助！

<div class="mt-12 flex gap-6 justify-center">
  <a href="https://sli.dev" target="_blank" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
    了解更多 Slidev
  </a>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
    GitHub 仓库
  </a>
</div>

<div class="mt-8 text-gray-500 dark:text-gray-400">
  使用 ← → 键导航幻灯片
</div>
