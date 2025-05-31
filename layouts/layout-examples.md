# Slidev Apple 主题布局使用指南

本文档详细介绍了 Apple 主题中所有可用布局的使用方法和最佳实践。

## 目录

1. [基础布局](#基础布局)
2. [专用布局](#专用布局)
3. [背景配置](#背景配置)
4. [组件使用](#组件使用)
5. [最佳实践](#最佳实践)

---

## 基础布局

### `cover` - 封面布局

**用途**：演示文稿的封面页，通常包含标题、副标题和行动按钮。

**特点**：

- 内容居中显示
- 支持自定义背景图片
- 自动添加遮罩层确保文字可读性
- 响应式设计

**语法**：
\`\`\`yaml

---

layout: cover
background: https://source.unsplash.com/1920x1080/?technology

---

# 演示文稿标题

简短的副标题或描述

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-8 py-4 rounded-full cursor-pointer bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white font-semibold shadow-lg hover:bg-opacity-30 transition duration-300">
    开始演示 →
  </span>
</div>
\`\`\`

**示例效果**：

- 大标题使用渐变色（无背景时）或白色（有背景时）
- 副标题使用较小字体
- 按钮具有毛玻璃效果

---

### `intro` - 介绍布局

**用途**：介绍新章节、团队成员或产品概述。

**特点**：

- 左侧主要内容，右侧补充信息
- 支持侧边栏插槽
- 可添加背景图片
- 适合内容较多的介绍页

**语法**：
\`\`\`yaml

---

layout: intro
backgroundImage: https://source.unsplash.com/1920x1080/?office

---

# 关于我们

<div class="leading-8 opacity-80">
我们是一家专注于创新设计的公司，<br>
致力于为用户提供最佳的产品体验。
</div>

<div class="my-10 space-y-4">
  <div class="flex items-center">
    <div class="text-3xl text-blue-500 mr-4">🚀</div>
    <div class="text-xl font-medium">创新驱动</div>
  </div>
  <div class="flex items-center">
    <div class="text-3xl text-green-500 mr-4">👥</div>
    <div class="text-xl font-medium">团队协作</div>
  </div>
</div>

::sidebar::

<div class="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
  <h3 class="text-xl font-bold mb-4">公司信息</h3>
  <ul class="space-y-2 text-sm">
    <li>成立时间：2020年</li>
    <li>团队规模：50+人</li>
    <li>服务客户：100+家</li>
    <li>项目经验：200+个</li>
  </ul>
</div>
\`\`\`

**注意事项**：

- 使用 `::sidebar::` 来定义右侧内容
- 侧边栏宽度固定为 320px
- 主内容区域会自动调整

---

### `default` - 默认布局

**用途**：最常用的布局，适合大多数内容展示。

**特点**：

- 灵活的内容排版
- 支持所有 Markdown 元素
- 可自由组合各种组件
- 响应式网格系统

**语法**：
\`\`\`yaml

---

## layout: default

# 产品特性

## 核心功能

我们的产品具有以下核心功能：

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-2">高性能</h3>
    <p>优化的算法确保快速响应</p>
  </div>
  <div class="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-2">易用性</h3>
    <p>直观的用户界面设计</p>
  </div>
</div>

## 技术规格

| 项目   | 规格      |
| ------ | --------- |
| 处理器 | M2 Pro    |
| 内存   | 16GB      |
| 存储   | 512GB SSD |

\`\`\`

**适用场景**：

- 产品介绍
- 技术文档
- 数据展示
- 混合内容页面

---

## 专用布局

### `two-cols` - 两栏布局

**用途**：将内容分为左右两栏，适合对比展示或并列说明。

**特点**：

- 左右等宽分栏
- 可选的统一标题
- 中间分割线
- 独立滚动区域

**语法**：
\`\`\`yaml

---

## layout: two-cols

::header::

# 产品对比

比较我们的两款主要产品

## 产品 A

### 特性

- 轻量级设计
- 快速启动
- 低功耗

### 适用场景

- 个人用户
- 轻度使用
- 移动办公

### 价格

$99/月

::right::

## 产品 B

### 特性

- 企业级功能
- 高级安全
- 24/7 支持

### 适用场景

- 企业用户
- 重度使用
- 团队协作

### 价格

$299/月
\`\`\`

**布局说明**：

- `::header::` 定义顶部标题区域（可选）
- 左栏内容直接写在主区域
- `::right::` 定义右栏内容

---

### `image-right` - 图文布局

**用途**：左侧文字说明，右侧图片展示。

**特点**：

- 文字内容占 2/3 宽度
- 图片自动适应尺寸
- 支持 frontmatter 图片配置
- 图片具有圆角和阴影效果

**语法**：
\`\`\`yaml

---

layout: image-right
image: https://source.unsplash.com/600x400/?product
alt: 产品展示图

---

# 产品介绍

我们的最新产品采用了先进的技术和优雅的设计。

## 主要特点

- 创新的用户界面
- 强大的性能表现
- 可靠的安全保障
- 全天候技术支持

## 技术优势

我们的产品在以下方面具有显著优势：

1. **性能优化**：采用最新的算法和架构
2. **用户体验**：直观易用的界面设计
3. **扩展性**：支持灵活的功能扩展
4. **兼容性**：与主流平台完美兼容
   \`\`\`

**图片配置**：

- 在 frontmatter 中使用 `image` 指定图片路径
- 使用 `alt` 提供图片描述
- 也可以在 `::image::` 插槽中自定义图片内容

---

### `center` - 居中布局

**用途**：重要信息展示，如关键数据、核心理念等。

**特点**：

- 所有内容居中对齐
- 适合简洁的信息展示
- 支持装饰性动画元素
- 响应式字体大小

**语法**：
\`\`\`yaml

---

## layout: center

# 我们的成就

<div class="grid grid-cols-3 gap-12 mt-12">
  <div v-click class="text-center">
    <div class="text-5xl font-bold text-blue-500 mb-4">1M+</div>
    <div class="text-xl">活跃用户</div>
    <div class="text-sm text-gray-500 mt-2">遍布全球</div>
  </div>
  
  <div v-click class="text-center">
    <div class="text-5xl font-bold text-green-500 mb-4">99.9%</div>
    <div class="text-xl">正常运行时间</div>
    <div class="text-sm text-gray-500 mt-2">稳定可靠</div>
  </div>
  
  <div v-click class="text-center">
    <div class="text-5xl font-bold text-purple-500 mb-4">24/7</div>
    <div class="text-xl">技术支持</div>
    <div class="text-sm text-gray-500 mt-2">全天候服务</div>
  </div>
</div>
\`\`\`

**最佳实践**：

- 内容保持简洁
- 使用大字体突出重点
- 合理使用颜色区分信息层级

---

### `statement` - 声明布局

**用途**：展示重要引述、公司理念或核心价值观。

**特点**：

- 大字体引述样式
- 装饰性引号
- 支持署名信息
- 可添加背景图片

**语法**：
\`\`\`yaml

---

layout: statement
background: https://source.unsplash.com/1920x1080/?inspiration

---

# 创新不是一个人的事，而是一个团队的事

<div class="text-right text-white text-opacity-80 mt-8 text-lg">
— 蒂姆·库克，苹果公司 CEO
</div>
\`\`\`

**样式特点**：

- 自动添加装饰性引号
- 文字居中显示
- 支持署名右对齐
- 背景图片时文字自动变白色

---

### `section` - 章节布局

**用途**：标记新章节的开始，提供清晰的内容分割。

**特点**：

- 全屏渐变背景
- 大号章节编号
- 白色文字
- 可自定义背景图片

**语法**：
\`\`\`yaml

---

layout: section
section: "01"
background: https://source.unsplash.com/1920x1080/?chapter

---

# 第一章：产品概述

本章将介绍我们产品的核心功能和设计理念
\`\`\`

**配置选项**：

- `section`：章节编号（显示在标题上方）
- `background`：自定义背景图片
- 不��置背景时使用默认蓝色渐变

---

## 背景配置

### 支持的配置方式

#### 1. frontmatter 配置

## \`\`\`yaml

layout: cover
background: https://source.unsplash.com/1920x1080/?technology

---

\`\`\`

或者：
\`\`\`yaml

---

layout: intro
backgroundImage: /local/image.jpg

---

\`\`\`

#### 2. 组件属性

\`\`\`html
<Cover background="https://example.com/bg.jpg">

  <h1>标题</h1>
</Cover>
\`\`\`

### 支持背景的布局

- ✅ `cover` - 封面布局
- ✅ `intro` - 介绍布局
- ✅ `section` - 章节布局
- ✅ `statement` - 声明布局

### 图片资源推荐

| 网站     | 特点           | 链接                 |
| -------- | -------------- | -------------------- |
| Unsplash | 高质量免费图片 | https://unsplash.com |
| Pixabay  | 免费图片和插图 | https://pixabay.com  |
| Pexels   | 专业摄影作品   | https://pexels.com   |

### 占位图片

使用内置占位图片生成器：
\`\`\`
/placeholder.svg?height=600&width=800&query=technology
\`\`\`

参数说明：

- `height`：图片高度
- `width`：图片宽度
- `query`：图片主题描述

---

## 组件使用

### 内置组件

#### AppleCard - 卡片组件

\`\`\`html
<AppleCard
title="卡片标题"
description="卡片描述"
variant="featured"
color="blue"

> 自定义内容
> </AppleCard>
> \`\`\`

**属性**：

- `title`：卡片标题
- `description`：卡片描述
- `variant`：样式变体（`default`、`featured`、`compact`）
- `color`：主题色（`blue`、`purple`、`green`、`orange`）

#### AppleButton - 按钮组件

\`\`\`html
<AppleButton
variant="primary"
size="large"
color="blue"
@click="handleClick"

> 按钮文字
> </AppleButton>
> \`\`\`

**属性**：

- `variant`：按钮类型（`primary`、`secondary`、`tertiary`）
- `size`：按钮大小（`small`、`medium`、`large`）
- `color`：按钮颜色（`blue`、`purple`、`green`、`orange`、`red`）
- `disabled`：是否禁用
- `loading`：是否显示加载状态

#### AppleHero - 英雄区组件

\`\`\`html
<AppleHero
title="主标题"
subtitle="副标题"
description="详细描述"
gradient="blue"

> <template #actions>

    <AppleButton variant="primary" size="large">开始使用</AppleButton>
    <AppleButton variant="secondary" size="large">了解更多</AppleButton>

  </template>
</AppleHero>
\`\`\`

#### AppleFeatureGrid - 特性网格

\`\`\`html
<AppleFeatureGrid 
  :columns="3"
  :features="[
    { icon: '🚀', title: '高性能', description: '极速响应', color: '#007AFF' },
    { icon: '🔒', title: '安全', description: '数据保护', color: '#34C759' },
    { icon: '🎨', title: '美观', description: '精美设计', color: '#5856D6' }
  ]"
/>
\`\`\`

### 自定义组件

#### Counter - 计数器

\`\`\`html
<Counter :count="10" />
\`\`\`

#### ContentContainer - 内容容器

\`\`\`html
<ContentContainer
title="容器标题"
subtitle="副标题"
type="info"

> 容器内容
> </ContentContainer>
> \`\`\`

---

## 最佳实践

### 1. 布局选择指南

| 内容类型 | 推荐布局                 | 说明                 |
| -------- | ------------------------ | -------------------- |
| 演示封面 | `cover`                  | 吸引注意力，设置主题 |
| 章节开始 | `section`                | 清晰的内容分割       |
| 产品介绍 | `intro` 或 `image-right` | 图文并茂             |
| 功能对比 | `two-cols`               | 并列比较             |
| 重要数据 | `center`                 | 突出显示             |
| 引言格言 | `statement`              | 增强感染力           |
| 详细内容 | `default`                | 灵活排版             |

### 2. 背景图片使用建议

**图片要求**：

- 分辨率：1920x1080 或更高
- 格式：JPG、PNG、WebP
- 大小：控制在 2MB 以内
- 主题：与内容相关

**文字可读性**：

- 选择对比度高的图片
- 避免过于复杂的背景
- 利用自动遮罩层功能
- 测试不同设备上的效果

### 3. 内容组织原则

**信息层级**：

- 使用合适的标题层级（H1-H4）
- 重要信息使用大字体
- 次要信息使用小字体和灰色

**视觉平衡**：

- 避免单页内容过多
- 合理使用留白空间
- 保持一致的间距

**交互设计**：

- 使用 `v-click` 控制内容出现时机
- 添加适当的动画效果
- 提供清晰的导航提示

### 4. 响应式设计

**移动端适配**：

- 测试不同屏幕尺寸
- 确保文字大小合适
- 简化复杂的布局

**字体大小**：

- 标题：最小 24px
- 正文：最小 16px
- 说明文字：最小 14px

### 5. 性能优化

**图片优化**：

- 使用适当的图片格式
- 压缩图片大小
- 考虑使用 CDN

**加载速度**：

- 避免过多的外部资源
- 优化动画性能
- 合理使用组件

---

## 常见问题

### Q: 如何自定义布局样式？

A: 可以通过以下方式自定义：

1. **覆盖 CSS 变量**：
   \`\`\`css
   :root {
   --apple-blue: #your-color;
   --apple-radius-large: 20px;
   }
   \`\`\`

2. **添加自定义样式**：
   \`\`\`html
   <style>
   .my-custom-style {
     /* 自定义样式 */
   }
   </style>
   \`\`\`

### Q: 背景图片不显示怎么办？

A: 检查以下几点：

1. 图片 URL 是否正确
2. 图片是否可以访问
3. 网络连接是否正常
4. 浏览器是否支持该图片格式

### Q: 如何创建自定义布局？

A: 在 `layouts` 文件夹中创建新的 Vue 组件：

\`\`\`vue
<template>

  <div class="slidev-layout my-layout">
    <slot />
  </div>
</template>

<style scoped>
.my-layout {
  /* 布局样式 */
}
</style>

\`\`\`

### Q: 动画效果不工作？

A: 确保：

1. 正确使用 `v-click` 指令
2. 检查 JavaScript 是否启用
3. 确认浏览器支持 CSS 动画

---

## 更多资源

- [Slidev 官方文档](https://sli.dev/)
- [Vue.js 文档](https://vuejs.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [Apple 设计指南](https://developer.apple.com/design/)

---

_最后更新：2024年5月_
\`\`\`

现在让我们创建一个简单的示例文件，完全避免使用任何可能导致问题的图标：
