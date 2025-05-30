---
theme: ./
title: Apple Style Theme Demo
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Apple Style Theme

A beautiful theme inspired by Apple's design language

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-6 py-3 rounded cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
    Get Started <carbon:arrow-right class="inline ml-1"/>
  </span>
</div>

---
layout: intro
---

# Welcome to Apple Theme

This theme brings Apple's design philosophy to your presentations

- Clean and minimal design
- Beautiful animations
- Responsive layouts
- Dark mode support

---
layout: two-cols
---

# Features

- 🎨 Apple-inspired design
- 🌙 Dark mode support
- 📱 Responsive layouts
- ✨ Smooth animations
- 🎯 Multiple layouts
- 🧩 Custom components

::right::

<AppleCard 
  title="Beautiful Cards" 
  description="Pre-built components with Apple's design language"
  image="/placeholder.svg?height=200&width=300" 
/>

---
layout: statement
---

# "Design is not just what it looks like and feels like. Design is how it works."

<div class="text-right text-gray-200 mt-4">— Steve Jobs</div>

---

# Interactive Components

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3>Counter Component</h3>
    <Counter :count="5" />
  </div>
  
  <div>
    <h3>Apple Card</h3>
    <AppleCard title="Innovation" description="Think different, create amazing products" />
  </div>
</div>

---
layout: center
class: text-center
---

# Thank You

Ready to create amazing presentations?

<div class="pt-8">
  <span class="px-6 py-3 rounded cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
    Start Building
  </span>
</div>
\`\`\`

创建 README 文档：
