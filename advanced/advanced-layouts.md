---
layout: default
---

# 高级布局和组件

## 网格布局

<div class="grid grid-cols-2 gap-4">
  <div class="bg-blue-100 p-4 rounded">
    左侧内容
  </div>
  <div class="bg-green-100 p-4 rounded">
    右侧内容
  </div>
</div>

## 卡片布局

<div class="grid grid-cols-3 gap-4 mt-6">
  <div v-click class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <div class="text-xl font-bold mb-2">卡片 1</div>
    <p>卡片内容描述</p>
  </div>
  <div v-click class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <div class="text-xl font-bold mb-2">卡片 2</div>
    <p>卡片内容描述</p>
  </div>
  <div v-click class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <div class="text-xl font-bold mb-2">卡片 3</div>
    <p>卡片内容描述</p>
  </div>
</div>

## 图标和徽章

<div class="flex space-x-4 mt-6">
  <div class="flex items-center">
    <carbon:checkmark-filled class="text-green-500 mr-2" />
    <span>已完成</span>
  </div>
  <div class="flex items-center">
    <carbon:close-filled class="text-red-500 mr-2" />
    <span>未完成</span>
  </div>
  <div class="flex items-center">
    <carbon:warning-filled class="text-yellow-500 mr-2" />
    <span>警告</span>
  </div>
</div>

## 进度指示器

<div class="w-full bg-gray-200 rounded-full h-4 mt-6">
  <div class="bg-blue-600 h-4 rounded-full" style="width: 70%"></div>
</div>
<div class="text-center mt-2">70% 完成</div>

## 标签和徽章

<div class="flex flex-wrap gap-2 mt-6">
  <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded">标签 1</span>
  <span class="px-2 py-1 bg-green-100 text-green-800 rounded">标签 2</span>
  <span class="px-2 py-1 bg-red-100 text-red-800 rounded">标签 3</span>
  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">标签 4</span>
</div>

## 时间线

<div class="mt-6 space-y-4">
  <div v-click class="flex">
    <div class="flex flex-col items-center mr-4">
      <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
      <div class="h-full w-0.5 bg-blue-500"></div>
    </div>
    <div>
      <div class="font-bold">2020</div>
      <div>项目启动</div>
    </div>
  </div>
  <div v-click class="flex">
    <div class="flex flex-col items-center mr-4">
      <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
      <div class="h-full w-0.5 bg-blue-500"></div>
    </div>
    <div>
      <div class="font-bold">2021</div>
      <div>第一个版本发布</div>
    </div>
  </div>
  <div v-click class="flex">
    <div class="flex flex-col items-center mr-4">
      <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
    </div>
    <div>
      <div class="font-bold">2022</div>
      <div>全球扩展</div>
    </div>
  </div>
</div>
\`\`\`

## 4. 动画和交互

下面是动画和交互的示例：
