---
theme: apple
title: 自定义背景示例
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
background: https://source.unsplash.com/1920x1080/?technology,modern
-->

# 自定义背景演示

探索如何为幻灯片添加精美的背景图片

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-8 py-4 rounded-full cursor-pointer bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white font-semibold shadow-lg hover:bg-opacity-30 transition duration-300 ease-in-out transform hover:-translate-y-1">
    开始探索 <carbon:arrow-right class="inline ml-2"/>
  </span>
</div>

---
layout: intro
backgroundImage: https://source.unsplash.com/1920x1080/?office,workspace
---

# 关于背景自定义

<div class="leading-8 opacity-90">
现在您可以为每张幻灯片设置自定义背景图片，<br>
让您的演示更加生动和专业。
</div>

<div class="my-10 space-y-4">
  <div class="flex items-center">
    <carbon:image class="text-3xl text-white mr-4"/>
    <div class="text-xl font-medium text-white">支持任何图片 URL</div>
  </div>
  <div class="flex items-center">
    <carbon:settings class="text-3xl text-white mr-4"/>
    <div class="text-xl font-medium text-white">灵活的配置选项</div>
  </div>
  <div class="flex items-center">
    <carbon:mobile class="text-3xl text-white mr-4"/>
    <div class="text-xl font-medium text-white">响应式设计</div>
  </div>
</div>

::sidebar::

<div class="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
  <h3 class="text-xl font-bold mb-4 text-gray-800">配置方法</h3>
  <div class="text-sm text-gray-700 space-y-2">
    <p><strong>方法 1：</strong> 在 frontmatter 中使用 <code>background</code></p>
    <p><strong>方法 2：</strong> 在 frontmatter 中使用 <code>backgroundImage</code></p>
    <p><strong>方法 3：</strong> 作为组件属性传递</p>
  </div>
</div>

---
layout: section
section: "01"
background: https://source.unsplash.com/1920x1080/?nature,mountain
---

# 章节背景示例

展示如何为章节页面添加背景

---
layout: statement
backgroundImage: https://source.unsplash.com/1920x1080/?abstract,gradient
---

# 创新不是一个人的事，而是一个团队的事

<div class="text-right text-white text-opacity-80 mt-8 text-lg">
— 蒂姆·库克
</div>

---
layout: cover
background: https://source.unsplash.com/1920x1080/?city,night
---

# 夜景主题

使用夜景图片作为背景的封面示例

<div class="pt-12">
  <span class="px-8 py-4 rounded-full cursor-pointer bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white font-semibold shadow-lg hover:bg-opacity-30 transition duration-300">
    了解更多
  </span>
</div>

---
layout: two-cols
---

# 配置背景的方法

## 方法 1：在 frontmatter 中配置

\`\`\`yaml
---
layout: cover
background: https://example.com/image.jpg
---
\`\`\`

## 方法 2：使用 backgroundImage

\`\`\`yaml
---
layout: intro
backgroundImage: https://example.com/bg.jpg
---
\`\`\`

## 方法 3：作为组件属性

\`\`\`html
<Cover background="https://example.com/image.jpg">
  <h1>标题</h1>
</Cover>
\`\`\`

::right::

## 支持的图片来源

<div class="space-y-4">
  <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
    <h4 class="font-semibold mb-2">🌐 在线图片</h4>
    <p class="text-sm">Unsplash、Pixabay 等图片网站</p>
  </div>
  
  <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
    <h4 class="font-semibold mb-2">📁 本地图片</h4>
    <p class="text-sm">项目 public 文件夹中的图片</p>
  </div>
  
  <div class="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
    <h4 class="font-semibold mb-2">🎨 占位图片</h4>
    <p class="text-sm">使用 placeholder.svg 生成</p>
  </div>
</div>

## 最佳实践

- 使用高分辨率图片 (1920x1080 或更高)
- 确保图片加载速度
- 考虑文字可读性
- 保持风格一致性

---
layout: default
---

# 不同布局的背景效果

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <h3 class="text-xl font-semibold">支持背景的布局</h3>
    <div class="space-y-2 text-sm">
      <div class="flex items-center">
        <carbon:checkmark-filled class="text-green-500 mr-2" />
        <span><strong>Cover</strong> - 封面布局</span>
      </div>
      <div class="flex items-center">
        <carbon:checkmark-filled class="text-green-500 mr-2" />
        <span><strong>Intro</strong> - 介绍布局</span>
      </div>
      <div class="flex items-center">
        <carbon:checkmark-filled class="text-green-500 mr-2" />
        <span><strong>Section</strong> - 章节布局</span>
      </div>
      <div class="flex items-center">
        <carbon:checkmark-filled class="text-green-500 mr-2" />
        <span><strong>Statement</strong> - 声明布局</span>
      </div>
    </div>
  </div>
  
  <div class="space-y-4">
    <h3 class="text-xl font-semibold">自动优化功能</h3>
    <div class="space-y-2 text-sm">
      <div class="flex items-center">
        <carbon:checkmark-filled class="text-blue-500 mr-2" />
        <span>自动添加遮罩层</span>
      </div>
      <div class="flex items-center">
        <carbon:checkmark-filled class="text-blue-500 mr-2" />
        <span>文字颜色自适应</span>
      </div>
      <div class="flex items-center">
        <carbon:checkmark-filled class="text-blue-500 mr-2" />
        <span>响应式图片处理</span>
      </div>
      <div class="flex items-center">
        <carbon:checkmark-filled class="text-blue-500 mr-2" />
        <span>暗色模式兼容</span>
      </div>
    </div>
  </div>
</div>

## 示例代码

\`\`\`yaml
---
layout: cover
background: https://source.unsplash.com/1920x1080/?technology
---

# 我的演示标题

副标题内容

<div class="pt-12">
  <button class="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white">
    开始演示
  </button>
</div>
\`\`\`

---
layout: center
---

# 推荐的图片资源

<div class="grid grid-cols-3 gap-8 mt-12">
  <div class="text-center">
    <div class="text-4xl mb-4">📸</div>
    <h4 class="font-semibold mb-2">Unsplash</h4>
    <p class="text-sm text-gray-600">高质量免费图片</p>
    <a href="https://unsplash.com" class="text-blue-500 text-sm">unsplash.com</a>
  </div>
  
  <div class="text-center">
    <div class="text-4xl mb-4">🎨</div>
    <h4 class="font-semibold mb-2">Pixabay</h4>
    <p class="text-sm text-gray-600">免费图片和插图</p>
    <a href="https://pixabay.com" class="text-blue-500 text-sm">pixabay.com</a>
  </div>
  
  <div class="text-center">
    <div class="text-4xl mb-4">🖼️</div>
    <h4 class="font-semibold mb-2">Pexels</h4>
    <p class="text-sm text-gray-600">专业摄影作品</p>
    <a href="https://pexels.com" class="text-blue-500 text-sm">pexels.com</a>
  </div>
</div>

---
layout: cover
background: https://source.unsplash.com/1920x1080/?success,celebration
---

# 感谢观看

现在您可以为幻灯片添加精美的背景了！

<div class="pt-12">
  <span class="px-8 py-4 rounded-full cursor-pointer bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white font-semibold shadow-lg hover:bg-opacity-30 transition duration-300">
    开始创作
  </span>
</div>
\`\`\`

## 使用方法总结

现在您可以通过以下三种方式为幻灯片添加自定义背景：

### 1. 在 frontmatter 中使用 `background`
\`\`\`yaml
---
layout: cover
background: https://source.unsplash.com/1920x1080/?technology
---
\`\`\`

### 2. 在 frontmatter 中使用 `backgroundImage`
\`\`\`yaml
---
layout: intro
backgroundImage: /path/to/your/image.jpg
---
\`\`\`

### 3. 作为组件属性传递
\`\`\`html
<Cover background="https://example.com/image.jpg">
  内容
</Cover>
\`\`\`

## 特性

- ✅ **自动遮罩层**：为背景图片添加半透明遮罩，确保文字可读性
- ✅ **文字颜色自适应**：有背景图片时自动将文字改为白色
- ✅ **响应式设计**：背景图片自动适应不同屏幕尺寸
- ✅ **暗色模式兼容**：在暗色模式下正常工作
- ✅ **多种图片来源**：支持在线图片、本地图片和占位图片

支持背景自定义的布局：`cover`、`intro`、`section`、`statement`
