# Slidev Theme Apple

A beautiful Slidev theme inspired by Apple's design language.

## Features

- 🎨 **Apple-inspired Design** - Clean, minimal, and elegant
- 🌙 **Dark Mode Support** - Automatic dark/light mode switching
- 📱 **Responsive Layouts** - Works perfectly on all screen sizes
- ✨ **Smooth Animations** - Beautiful transitions and micro-interactions
- 🎯 **Multiple Layouts** - Various pre-built layouts for different content types
- 🧩 **Custom Components** - Ready-to-use components with Apple's design language

## Installation

### NPM

\`\`\`bash
npm install slidev-theme-apple
\`\`\`

### Local Development

\`\`\`bash
git clone https://github.com/yourusername/slidev-theme-apple.git
cd slidev-theme-apple
npm install
npm run dev
\`\`\`

## Usage

Add the following frontmatter to your `slides.md`:

## \`\`\`yaml

## theme: apple

\`\`\`

## Layouts

This theme provides several layouts:

### `intro`

Perfect for introduction slides with centered content.

## \`\`\`yaml

## layout: intro

\`\`\`

### `statement`

Great for quotes and important statements.

## \`\`\`yaml

## layout: statement

\`\`\`

### `two-cols`

Two-column layout for side-by-side content.

## \`\`\`yaml

## layout: two-cols

\`\`\`

### `image-right`

Content on the left, image on the right.

## \`\`\`yaml

layout: image-right
image: /path/to/image.jpg

---

\`\`\`

## 布局使用指南

### 基础布局

#### `cover` - 封面布局

用于演示文稿的封面页，支持自定义背景图片。

## \`\`\`yaml

layout: cover
background: https://source.unsplash.com/1920x1080/?technology

---

# 演示文稿标题

副标题或简短描述

<div class="pt-12">
  <button class="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white">
    开始演示
  </button>
</div>
\`\`\`

#### `intro` - 介绍布局

用于介绍新章节或主题，左侧主要内容，右侧可放置补充信息。

## \`\`\`yaml

layout: intro
backgroundImage: /path/to/background.jpg

---

# 关于我们

主要介绍内容放在这里...

::sidebar::

补充信息或图片
\`\`\`

#### `default` - 默认布局

最灵活的布局，适合大多数内容展示。

## \`\`\`yaml

## layout: default

# 标题

正文内容...
\`\`\`

### 专用布局

#### `two-cols` - 两栏布局

将内容分为左右两栏显示。

## \`\`\`yaml

## layout: two-cols

::header::

# 可选的标题

## 左栏内容

- 列表项 1
- 列表项 2

::right::

## 右栏内容

补充信息或图片
\`\`\`

#### `image-right` - 图文布局

左侧文字，右侧图片的布局。

## \`\`\`yaml

layout: image-right
image: /path/to/image.jpg
alt: 图片描述

---

# 标题

文字内容...

- 特性 1
- 特性 2
  \`\`\`

#### `center` - 居中布局

所有内容居中显示，适合重要信息展示。

## \`\`\`yaml

## layout: center

# 重要信息

居中显示的内容
\`\`\`

#### `statement` - 声明布局

用于展示重要引述或声明，支持自定义背景。

## \`\`\`yaml

layout: statement
background: https://source.unsplash.com/1920x1080/?inspiration

---

# "设计不仅仅是外观，设计是产品如何工作"

<div class="text-right mt-8">— 史蒂夫·乔布斯</div>
\`\`\`

#### `section` - 章节布局

标记新章节的开始，支持章节编号和背景图片。

## \`\`\`yaml

layout: section
section: "01"
backgroundImage: /chapter-bg.jpg

---

# 第一章

章节介绍
\`\`\`

### 背景图片配置

所有布局都支持通过以下方式添加背景图片：

1. **使用 `background` 属性**：
   \`\`\`yaml

---

layout: cover
background: https://source.unsplash.com/1920x1080/?nature

---

\`\`\`

2. **使用 `backgroundImage` 属性**：
   \`\`\`yaml

---

layout: intro
backgroundImage: /local/image.jpg

---

\`\`\`

3. **作为组件属性**：
   \`\`\`html
   <Cover background="https://example.com/bg.jpg">
   内容
   </Cover>
   \`\`\`

### 推荐的图片资源

- **Unsplash**: https://unsplash.com - 高质量免费图片
- **Pixabay**: https://pixabay.com - 免费图片和插图
- **Pexels**: https://pexels.com - 专业摄影作品
- **占位图片**: `/placeholder.svg?height=600&width=800&query=描述`

## Components

### Counter

An interactive counter component.

\`\`\`html
<Counter :count="10" />
\`\`\`

### AppleCard

A beautiful card component with Apple's design language.

\`\`\`html
<AppleCard 
  title="Card Title" 
  description="Card description"
  image="/path/to/image.jpg" 
/>
\`\`\`

## Customization

You can customize the theme by overriding CSS variables:

\`\`\`css
:root {
--apple-blue: #0071e3;
--apple-gray: #86868b;
/_ Add more custom colors _/
}
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Credits

Inspired by Apple's design language and built with [Slidev](https://sli.dev/).
