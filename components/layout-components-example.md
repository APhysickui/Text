---
layout: default
---

# 布局组件示例

## 分割视图

<SplitView>
  <template #left>
    <h3 class="text-xl font-bold mb-4">左侧内容</h3>
    <p>这是左侧区域的内容。可以放置任何 Markdown 或 HTML 元素。</p>
    <ul class="mt-4">
      <li>项目 1</li>
      <li>项目 2</li>
      <li>项目 3</li>
    </ul>
  </template>
  <template #right>
    <h3 class="text-xl font-bold mb-4">右侧内容</h3>
    <p>这是右侧区域的内容。</p>
    <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
      <code>console.log('Hello World');</code>
    </div>
  </template>
</SplitView>

---
layout: default
---

# 特性卡片

<div class="grid grid-cols-2 gap-6 mt-6">
  <FeatureCard 
    icon="🚀" 
    title="快速部署" 
    description="只需几分钟即可完成部署"
    color="blue"
  />
  
  <FeatureCard 
    icon="🔒" 
    title="安全可靠" 
    description="企业级安全保障"
    color="green"
  />
  
  <FeatureCard 
    icon="📊" 
    title="数据分析" 
    description="强大的数据分析功能"
    color="purple"
  />
  
  <FeatureCard 
    icon="🔄" 
    title="自动同步" 
    description="实时数据同步"
    color="yellow"
  />
</div>
\`\`\`

## 9. 创建常用布局模板

下面是一些常用的布局模板：
