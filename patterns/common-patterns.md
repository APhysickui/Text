---
layout: default
---

# 常用排版模式

## 1. 对比布局

<div class="grid grid-cols-2 gap-8 mt-6">
  <div>
    <h3 class="text-xl font-bold mb-2 text-red-500">问题</h3>
    <ul class="space-y-2">
      <li>复杂的流程</li>
      <li>高错误率</li>
      <li>用户满意度低</li>
    </ul>
  </div>
  <div>
    <h3 class="text-xl font-bold mb-2 text-green-500">解决方案</h3>
    <ul class="space-y-2">
      <li>简化的用户界面</li>
      <li>自动化验证</li>
      <li>实时反馈</li>
    </ul>
  </div>
</div>

## 2. 步骤流程

<div class="mt-6">
  <div class="flex items-center">
    <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
    <div class="h-0.5 w-16 bg-blue-300"></div>
    <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
    <div class="h-0.5 w-16 bg-blue-300"></div>
    <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
  </div>
  <div class="flex justify-between mt-2">
    <div class="w-24 text-center">分析</div>
    <div class="w-24 text-center">设计</div>
    <div class="w-24 text-center">实施</div>
  </div>
</div>

## 3. 特性比较表

<div class="mt-6 overflow-x-auto">
  <table class="min-w-full">
    <thead>
      <tr>
        <th class="px-4 py-2 border">特性</th>
        <th class="px-4 py-2 border">基础版</th>
        <th class="px-4 py-2 border">专业版</th>
        <th class="px-4 py-2 border">企业版</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-2 border">用户数</td>
        <td class="px-4 py-2 border">1</td>
        <td class="px-4 py-2 border">10</td>
        <td class="px-4 py-2 border">无限</td>
      </tr>
      <tr>
        <td class="px-4 py-2 border">存储空间</td>
        <td class="px-4 py-2 border">5GB</td>
        <td class="px-4 py-2 border">100GB</td>
        <td class="px-4 py-2 border">1TB</td>
      </tr>
      <tr>
        <td class="px-4 py-2 border">支持</td>
        <td class="px-4 py-2 border">邮件</td>
        <td class="px-4 py-2 border">邮件 + 电话</td>
        <td class="px-4 py-2 border">24/7 专属</td>
      </tr>
    </tbody>
  </table>
</div>

## 4. 数据可视化

<div class="mt-6 grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-center mb-4">柱状图</h3>
    <div class="flex items-end h-40 space-x-4">
      <div class="w-12 bg-blue-500" style="height: 30%"></div>
      <div class="w-12 bg-blue-500" style="height: 50%"></div>
      <div class="w-12 bg-blue-500" style="height: 80%"></div>
      <div class="w-12 bg-blue-500" style="height: 60%"></div>
      <div class="w-12 bg-blue-500" style="height: 40%"></div>
    </div>
    <div class="flex justify-between mt-2">
      <div class="w-12 text-center">Q1</div>
      <div class="w-12 text-center">Q2</div>
      <div class="w-12 text-center">Q3</div>
      <div class="w-12 text-center">Q4</div>
      <div class="w-12 text-center">Q5</div>
    </div>
  </div>
  <div>
    <h3 class="text-center mb-4">饼图</h3>
    <div class="relative w-40 h-40 mx-auto">
      <!-- 简化的饼图表示 -->
      <div class="absolute inset-0 bg-blue-500" style="clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)"></div>
      <div class="absolute inset-0 bg-green-500" style="clip-path: polygon(50% 50%, 100% 100%, 0% 100%, 0% 50%)"></div>
      <div class="absolute inset-0 bg-yellow-500" style="clip-path: polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)"></div>
    </div>
    <div class="flex justify-center space-x-4 mt-4">
      <div class="flex items-center">
        <div class="w-3 h-3 bg-blue-500 mr-1"></div>
        <span>产品 A</span>
      </div>
      <div class="flex items-center">
        <div class="w-3 h-3 bg-green-500 mr-1"></div>
        <span>产品 B</span>
      </div>
      <div class="flex items-center">
        <div class="w-3 h-3 bg-yellow-500 mr-1"></div>
        <span>产品 C</span>
      </div>
    </div>
  </div>
</div>
\`\`\`

## 7. 创建内容容器组件

下面是一个内容容器组件，可以帮助您更好地组织幻灯片内容：
