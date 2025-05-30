---
layout: two-cols
class: gap-8
---

# 全球影响力

<v-clicks>

- 170+ 国家的业务覆盖
- 500+ 零售店全球分布
- 超过 100,000 名员工
- 数十亿活跃设备
- 全球开发者社区

</v-clicks>

::right::

<div class="flex flex-col h-full justify-center">
  <div v-click class="rounded-xl overflow-hidden shadow-xl">
    <img src="/placeholder.svg?height=300&width=400" alt="Apple Store" />
  </div>
</div>

---
layout: default
---

# 可持续发展

<div class="grid grid-cols-3 gap-6 mt-8">
  <div v-click class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md">
    <carbon:earth class="text-4xl text-green-500 mb-4" />
    <div class="text-lg font-medium">碳中和</div>
    <div class="text-sm opacity-70 text-center mt-2">2030年实现<br>全球碳中和</div>
  </div>
  
  <div v-click class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md">
    <carbon:recycle class="text-4xl text-green-500 mb-4" />
    <div class="text-lg font-medium">循环材料</div>
    <div class="text-sm opacity-70 text-center mt-2">使用回收材料<br>减少资源消耗</div>
  </div>
  
  <div v-click class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md">
    <carbon:renewable-energy class="text-4xl text-green-500 mb-4" />
    <div class="text-lg font-medium">可再生能源</div>
    <div class="text-sm opacity-70 text-center mt-2">使用100%<br>可再生能源</div>
  </div>
</div>

<div class="mt-10">
  <div v-click class="text-xl font-medium mb-2">我们的承诺</div>
  <div v-click class="text-sm opacity-70">
    苹果公司致力于在2030年前实现整个业务、制造供应链和产品生命周期的碳中和。这意味着每一款苹果设备的销售都将对气候产生净零影响。
  </div>
</div>
\`\`\`

更新 package.json 以确保包含正确的图标包：
