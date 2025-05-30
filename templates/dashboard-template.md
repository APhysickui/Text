---
layout: default
---

# 产品仪表盘

<div class="grid grid-cols-3 gap-6 mt-8">
  <!-- KPI 卡片 -->
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">总用户</div>
    <div class="text-3xl font-bold mt-2">24,521</div>
    <div class="flex items-center mt-2 text-green-500">
      <carbon:arrow-up class="mr-1" /> 12.5%
    </div>
  </div>
  
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">月收入</div>
    <div class="text-3xl font-bold mt-2">$48,290</div>
    <div class="flex items-center mt-2 text-green-500">
      <carbon:arrow-up class="mr-1" /> 8.2%
    </div>
  </div>
  
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">转化率</div>
    <div class="text-3xl font-bold mt-2">5.4%</div>
    <div class="flex items-center mt-2 text-red-500">
      <carbon:arrow-down class="mr-1" /> 1.1%
    </div>
  </div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">
  <!-- 图表 -->
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <div class="text-lg font-medium mb-4">用户增长</div>
    <div class="h-60 flex items-end space-x-2">
      <div class="w-8 bg-blue-500 rounded-t" style="height: 30%"></div>
      <div class="w-8 bg-blue-500 rounded-t" style="height: 40%"></div>
      <div class="w-8 bg-blue-500 rounded-t" style="height: 35%"></div>
      <div class="w-8 bg-blue-500 rounded-t" style="height: 50%"></div>
      <div class="w-8 bg-blue-500 rounded-t" style="height: 65%"></div>
      <div class="w-8 bg-blue-500 rounded-t" style="height: 60%"></div>
      <div class="w-8 bg-blue-500 rounded-t" style="height: 75%"></div>
      <div class="w-8 bg-blue-500 rounded-t" style="height: 90%"></div>
    </div>
    <div class="flex justify-between mt-2 text-xs text-gray-500">
      <div>一月</div>
      <div>二月</div>
      <div>三月</div>
      <div>四月</div>
      <div>五月</div>
      <div>六月</div>
      <div>七月</div>
      <div>八月</div>
    </div>
  </div>
  
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <div class="text-lg font-medium mb-4">收入来源</div>
    <div class="flex justify-center">
      <div class="relative w-40 h-40">
        <!-- 简化的饼图 -->
        <div class="absolute inset-0 bg-blue-500" style="clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)"></div>
        <div class="absolute inset-0 bg-green-500" style="clip-path: polygon(50% 50%, 100% 100%, 0% 100%, 0% 50%)"></div>
        <div class="absolute inset-0 bg-yellow-500" style="clip-path: polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)"></div>
      </div>
    </div>
    <div class="flex justify-center space-x-4 mt-4">
      <div class="flex items-center">
        <div class="w-3 h-3 bg-blue-500 mr-1"></div>
        <span class="text-sm">订阅 (45%)</span>
      </div>
      <div class="flex items-center">
        <div class="w-3 h-3 bg-green-500 mr-1"></div>
        <span class="text-sm">一次性 (30%)</span>
      </div>
      <div class="flex items-center">
        <div class="w-3 h-3 bg-yellow-500 mr-1"></div>
        <span class="text-sm">服务 (25%)</span>
      </div>
    </div>
  </div>
</div>

<div class="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
  <div class="text-lg font-medium mb-4">最近交易</div>
  <table class="min-w-full">
    <thead>
      <tr>
        <th class="text-left pb-2">客户</th>
        <th class="text-left pb-2">日期</th>
        <th class="text-left pb-2">金额</th>
        <th class="text-left pb-2">状态</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-t border-gray-200 dark:border-gray-700">
        <td class="py-2">张三</td>
        <td class="py-2">2024-05-28</td>
        <td class="py-2">$120.00</td>
        <td class="py-2"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">已完成</span></td>
      </tr>
      <tr class="border-t border-gray-200 dark:border-gray-700">
        <td class="py-2">李四</td>
        <td class="py-2">2024-05-27</td>
        <td class="py-2">$85.50</td>
        <td class="py-2"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">已完成</span></td>
      </tr>
      <tr class="border-t border-gray-200 dark:border-gray-700">
        <td class="py-2">王五</td>
        <td class="py-2">2024-05-26</td>
        <td class="py-2">$240.00</td>
        <td class="py-2"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">处理中</span></td>
      </tr>
      <tr class="border-t border-gray-200 dark:border-gray-700">
        <td class="py-2">赵六</td>
        <td class="py-2">2024-05-25</td>
        <td class="py-2">$190.75</td>
        <td class="py-2"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">已完成</span></td>
      </tr>
    </tbody>
  </table>
</div>
\`\`\`

## 10. 创建常用布局组件库

下面是一个布局组件库的示例：
