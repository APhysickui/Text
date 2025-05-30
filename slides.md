---
theme: apple
title: 苹果风格演示文稿
titleTemplate: '%s - Apple Style'
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
---

# 苹果风格演示文稿

简洁、优雅、专业

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-6 py-3 rounded cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
    开始演示 <carbon:arrow-right class="inline ml-1"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="在 GitHub 上查看"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-github />
  </a>
</div>

<!--
这是演讲者注释部分，仅在演讲者模式下可见。
-->

---
layout: intro
---

# 关于我们

<div class="leading-8 opacity-80">
苹果公司成立于1976年，是全球领先的科技企业。<br>
我们致力于通过创新的产品和服务丰富人们的生活。
</div>

<div class="my-10 grid grid-cols-[40px_1fr] gap-y-4 w-min">
  <div class="flex justify-center items-center"><div class="text-3xl">🍎</div></div>
  <div class="text-xl font-medium">创新设计</div>
  <div class="flex justify-center items-center"><carbon:earth class="text-3xl"/></div>
  <div class="text-xl font-medium">全球影响</div>
  <div class="flex justify-center items-center"><carbon:favorite class="text-3xl"/></div>
  <div class="text-xl font-medium">用户体验</div>
</div>

<img src="/placeholder.svg?height=200&width=200" class="rounded-full w-40 abs-tr mt-16 mr-12"/>

---
layout: default
---

# 我们的产品线

<div class="grid grid-cols-2 gap-10 pt-4 mt-4">

<div class="flex flex-col items-center space-y-4">
  <img src="/placeholder.svg?height=200&width=200" class="h-40 rounded-xl shadow-lg" />
  <div class="text-xl font-medium">iPhone</div>
  <div class="text-sm opacity-70 text-center">重新定义智能手机<br>体验的极致</div>
</div>

<div class="flex flex-col items-center space-y-4">
  <img src="/placeholder.svg?height=200&width=200" class="h-40 rounded-xl shadow-lg" />
  <div class="text-xl font-medium">Mac</div>
  <div class="text-sm opacity-70 text-center">专业人士的<br>首选工具</div>
</div>

<div class="flex flex-col items-center space-y-4">
  <img src="/placeholder.svg?height=200&width=200" class="h-40 rounded-xl shadow-lg" />
  <div class="text-xl font-medium">iPad</div>
  <div class="text-sm opacity-70 text-center">创造力与生产力<br>的完美结合</div>
</div>

<div class="flex flex-col items-center space-y-4">
  <img src="/placeholder.svg?height=200&width=200" class="h-40 rounded-xl shadow-lg" />
  <div class="text-xl font-medium">Watch</div>
  <div class="text-sm opacity-70 text-center">健康与便利<br>尽在腕间</div>
</div>

</div>

---
transition: fade-out
layout: center
class: text-center
---

# 创新科技

<div class="grid grid-cols-3 gap-8 mt-10">
  <div v-click class="flex flex-col items-center">
    <div class="text-5xl mb-4">🧠</div>
    <div class="text-xl font-medium">人工智能</div>
    <div class="text-sm opacity-70 mt-2">智能助手与机器学习</div>
  </div>
  <div v-click class="flex flex-col items-center">
    <div class="text-5xl mb-4">🔒</div>
    <div class="text-xl font-medium">隐私保护</div>
    <div class="text-sm opacity-70 mt-2">数据安全与个人隐私</div>
  </div>
  <div v-click class="flex flex-col items-center">
    <div class="text-5xl mb-4">♻️</div>
    <div class="text-xl font-medium">环保设计</div>
    <div class="text-sm opacity-70 mt-2">可持续发展与循环利用</div>
  </div>
</div>

---
layout: statement
---

# "设计不仅仅是外观和感觉。<br>设计是产品如何工作。"

<div class="text-right text-gray-400 mt-4">— 史蒂夫·乔布斯</div>

---
layout: two-cols
class: gap-8
---

# 我们的使命

<v-clicks>

- 创造改变世界的产品
- 提供卓越的用户体验
- 保护用户隐私和安全
- 推动环保与可持续发展
- 支持创新与创造力

</v-clicks>

::right::

<div class="flex items-center justify-center h-full">
  <img src="/placeholder.svg?height=400&width=400" class="rounded-xl shadow-xl" />
</div>

---
preload: false
---

# 动画演示

<div class="grid grid-cols-2 gap-10">
<div>

<div class="mb-10">
  点击按钮查看动画效果：
</div>

<div class="flex space-x-4">
  <button @click="showLogo = !showLogo" class="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition duration-300 shadow-md hover:shadow-lg">
    {{ showLogo ? '隐藏' : '显示' }}标志
  </button>
  
  <button @click="count++" class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300 shadow-md hover:shadow-lg">
    计数: {{ count }}
  </button>
</div>

</div>

<div class="flex items-center justify-center">
  <div v-if="showLogo" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, transition: { duration: 1000, type: 'spring' } }">
    <div class="w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
      <div class="text-6xl">🍎</div>
    </div>
  </div>
</div>

</div>

<script setup>
import { ref } from 'vue'
const showLogo = ref(false)
const count = ref(0)
</script>

---
layout: image-right
image: /placeholder.svg?height=900&width=600&query=apple%20product%20launch
---

# 产品发布会

<v-clicks>

- 每年举办多场发布会
- 展示最新产品和技术
- 分享公司愿景和使命
- 与全球用户互动
- 引领行业趋势和标准

</v-clicks>

---
layout: default
---

# 技术规格

<div class="grid grid-cols-2 gap-x-12 gap-y-6 mt-8">

<div v-click class="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-md">
  <div class="text-xl font-medium mb-2">处理器</div>
  <div class="opacity-70">
    M2 Pro 芯片<br>
    10 核 CPU<br>
    16 核 GPU<br>
    16 核神经网络引擎
  </div>
</div>

<div v-click class="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-md">
  <div class="text-xl font-medium mb-2">内存</div>
  <div class="opacity-70">
    16GB 统一内存<br>
    高带宽<br>
    低延迟<br>
    能效优化
  </div>
</div>

<div v-click class="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-md">
  <div class="text-xl font-medium mb-2">存储</div>
  <div class="opacity-70">
    512GB SSD 存储<br>
    高速读写<br>
    加密保护<br>
    可扩展选项
  </div>
</div>

<div v-click class="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-md">
  <div class="text-xl font-medium mb-2">显示</div>
  <div class="opacity-70">
    Liquid Retina XDR 显示屏<br>
    1000 尼特持续亮度<br>
    1600 尼特峰值亮度<br>
    P3 广色域
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# 数据对比

<div class="grid grid-cols-3 gap-8 mt-10">
  <div v-click class="flex flex-col items-center">
    <div class="text-4xl font-bold text-blue-500 mb-2">2x</div>
    <div class="text-xl font-medium">性能提升</div>
    <div class="text-sm opacity-70 mt-2">相比上一代产品</div>
  </div>
  <div v-click class="flex flex-col items-center">
    <div class="text-4xl font-bold text-blue-500 mb-2">30%</div>
    <div class="text-xl font-medium">能效提升</div>
    <div class="text-sm opacity-70 mt-2">更长的电池续航</div>
  </div>
  <div v-click class="flex flex-col items-center">
    <div class="text-4xl font-bold text-blue-500 mb-2">40%</div>
    <div class="text-xl font-medium">回收材料</div>
    <div class="text-sm opacity-70 mt-2">环保设计理念</div>
  </div>
</div>

---
layout: default
---

# 用户体验

<div class="grid grid-cols-2 gap-10 mt-8">
  <img src="/placeholder.svg?height=300&width=400" class="rounded-xl shadow-lg" />
  
  <div class="flex flex-col justify-center space-y-4">
    <div v-click class="flex items-center">
      <div class="text-blue-500 mr-2"><carbon:checkmark-filled /></div>
      <div>直观易用的界面设计</div>
    </div>
    <div v-click class="flex items-center">
      <div class="text-blue-500 mr-2"><carbon:checkmark-filled /></div>
      <div>无缝连接的生态系统</div>
    </div>
    <div v-click class="flex items-center">
      <div class="text-blue-500 mr-2"><carbon:checkmark-filled /></div>
      <div>个性化的使用体验</div>
    </div>
    <div v-click class="flex items-center">
      <div class="text-blue-500 mr-2"><carbon:checkmark-filled /></div>
      <div>强大的辅助功能支持</div>
    </div>
  </div>
</div>

---
layout: default
---

# 生态系统

<div class="grid grid-cols-3 gap-6 mt-8">
  <div v-click class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md">
    <carbon:cloud class="text-4xl text-blue-500 mb-4" />
    <div class="text-lg font-medium">iCloud</div>
    <div class="text-sm opacity-70 text-center mt-2">安全存储与同步<br>所有设备的数据</div>
  </div>
  
  <div v-click class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md">
    <carbon:music class="text-4xl text-blue-500 mb-4" />
    <div class="text-lg font-medium">Apple Music</div>
    <div class="text-sm opacity-70 text-center mt-2">超过9000万首歌曲<br>高品质音频体验</div>
  </div>
  
  <div v-click class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md">
    <div class="text-4xl text-blue-500 mb-4">📺</div>
    <div class="text-lg font-medium">Apple TV+</div>
    <div class="text-sm opacity-70 text-center mt-2">原创电影与剧集<br>多平台观看体验</div>
  </div>
  
  <div v-click class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md">
    <carbon:game-console class="text-4xl text-blue-500 mb-4" />
    <div class="text-lg font-medium">Apple Arcade</div>
    <div class="text-sm opacity-70 text-center mt-2">无广告游戏订阅<br>跨设备游戏体验</div>
  </div>
  
  <div v-click class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md">
    <div class="text-4xl text-blue-500 mb-4">💳</div>
    <div class="text-lg font-medium">Apple Pay</div>
    <div class="text-sm opacity-70 text-center mt-2">安全便捷的支付<br>全球广泛接受</div>
  </div>
  
  <div v-click class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md">
    <div class="text-4xl text-blue-500 mb-4">💪</div>
    <div class="text-lg font-medium">Apple Fitness+</div>
    <div class="text-sm opacity-70 text-center mt-2">个性化健身课程<br>健康数据整合</div>
  </div>
</div>

---
src: ./pages/multiple-entries.md
hide: false
---

---
layout: center
class: text-center
---

# 谢谢观看

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-6 py-3 rounded cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
    了解更多 <carbon:arrow-right class="inline ml-1"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="在 GitHub 上查看"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-github />
  </a>
</div>
