---
theme: ./
title: Apple Design System for Slidev
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
---

<AppleHero 
  title="Think Different"
  subtitle="Apple Design System for Slidev"
  description="Create stunning presentations with Apple's official design language"
  gradient="blue"
>
  <template #actions>
    <AppleButton variant="primary" size="large">Get Started</AppleButton>
    <AppleButton variant="secondary" size="large">Learn More</AppleButton>
  </template>
</AppleHero>

---
layout: intro
---

# Innovation at Its Core

<div class="apple-text-title-2 opacity-90 mb-8">
Bringing Apple's design philosophy to your presentations
</div>

<AppleFeatureGrid 
  :columns="3"
  :features="[
    { icon: '🎨', title: 'Design Excellence', description: 'Pixel-perfect components following Apple HIG', color: '#007AFF' },
    { icon: '🌙', title: 'Dark Mode', description: 'Seamless light and dark mode support', color: '#5856D6' },
    { icon: '📱', title: 'Responsive', description: 'Beautiful on every screen size', color: '#34C759' }
  ]"
/>

---
layout: two-cols
---

# Apple Design Principles

<v-clicks>

- **Clarity** - Throughout the system, text is legible at every size
- **Deference** - Fluid motion and a crisp, beautiful interface
- **Depth** - Visual layers and realistic motion convey hierarchy

</v-clicks>

<div class="mt-8">
  <AppleButton variant="primary" color="blue">Explore Guidelines</AppleButton>
</div>

::right::

<AppleCard 
  variant="featured"
  title="Human Interface Guidelines"
  description="Apple's HIG provides comprehensive guidance for designing great experiences across all Apple platforms."
  image="/placeholder.svg?height=300&width=400"
  color="blue"
/>

---
layout: statement
---

# "Design is not just what it looks like and feels like. Design is how it works."

<div class="apple-text-title-3 text-right mt-8 opacity-70">— Steve Jobs</div>

---
layout: default
---

# Typography System

<div class="grid grid-cols-2 gap-12 mt-8">

<div>
  <div class="apple-text-large-title mb-4">Large Title</div>
  <div class="apple-text-title-1 mb-4">Title 1</div>
  <div class="apple-text-title-2 mb-4">Title 2</div>
  <div class="apple-text-title-3 mb-4">Title 3</div>
  <div class="apple-text-headline mb-4">Headline</div>
  <div class="apple-text-body mb-4">Body</div>
  <div class="apple-text-callout mb-4">Callout</div>
  <div class="apple-text-subhead mb-4">Subhead</div>
  <div class="apple-text-footnote mb-4">Footnote</div>
  <div class="apple-text-caption-1 mb-4">Caption 1</div>
  <div class="apple-text-caption-2">Caption 2</div>
</div>

<div class="space-y-6">
  <AppleCard title="SF Pro Display" description="Apple's system font designed for optimal legibility and beautiful typography." />
  <AppleCard title="Dynamic Type" description="Automatically adjusts to user preferences for accessibility." />
  <AppleCard title="Consistent Hierarchy" description="Clear visual hierarchy guides users through content." />
</div>

</div>

---
layout: default
---

# Color System

<div class="grid grid-cols-4 gap-6 mt-8">

<div v-click class="text-center">
  <div class="w-20 h-20 mx-auto mb-4 rounded-2xl apple-gradient-blue"></div>
  <div class="apple-text-headline">Blue</div>
  <div class="apple-text-caption-1 opacity-70">#007AFF</div>
</div>

<div v-click class="text-center">
  <div class="w-20 h-20 mx-auto mb-4 rounded-2xl apple-gradient-purple"></div>
  <div class="apple-text-headline">Purple</div>
  <div class="apple-text-caption-1 opacity-70">#5856D6</div>
</div>

<div v-click class="text-center">
  <div class="w-20 h-20 mx-auto mb-4 rounded-2xl apple-gradient-green"></div>
  <div class="apple-text-headline">Green</div>
  <div class="apple-text-caption-1 opacity-70">#34C759</div>
</div>

<div v-click class="text-center">
  <div class="w-20 h-20 mx-auto mb-4 rounded-2xl apple-gradient-orange"></div>
  <div class="apple-text-headline">Orange</div>
  <div class="apple-text-caption-1 opacity-70">#FF9500</div>
</div>

</div>

<div class="mt-12">
  <h3 class="apple-text-title-3 mb-6">Semantic Colors</h3>
  <div class="grid grid-cols-3 gap-6">
    <AppleCard title="System Colors" description="Consistent across all platforms and contexts" color="blue" />
    <AppleCard title="Adaptive Colors" description="Automatically adapt to light and dark modes" color="purple" />
    <AppleCard title="Accessible Colors" description="Meet WCAG accessibility standards" color="green" />
  </div>
</div>

---
layout: default
---

# Interactive Components

<div class="grid grid-cols-2 gap-12 mt-8">

<div class="space-y-8">
  <div>
    <h3 class="apple-text-title-3 mb-4">Buttons</h3>
    <div class="space-y-4">
      <div class="flex gap-4">
        <AppleButton variant="primary">Primary</AppleButton>
        <AppleButton variant="secondary">Secondary</AppleButton>
        <AppleButton variant="tertiary">Tertiary</AppleButton>
      </div>
      <div class="flex gap-4">
        <AppleButton variant="primary" color="purple">Purple</AppleButton>
        <AppleButton variant="primary" color="green">Green</AppleButton>
        <AppleButton variant="primary" color="orange">Orange</AppleButton>
      </div>
      <div class="flex gap-4">
        <AppleButton variant="primary" size="small">Small</AppleButton>
        <AppleButton variant="primary" size="medium">Medium</AppleButton>
        <AppleButton variant="primary" size="large">Large</AppleButton>
      </div>
    </div>
  </div>
</div>

<div class="space-y-8">
  <div>
    <h3 class="apple-text-title-3 mb-4">Cards</h3>
    <div class="space-y-4">
      <AppleCard 
        variant="default"
        title="Default Card" 
        description="Standard card with subtle shadows and rounded corners"
      />
      <AppleCard 
        variant="featured"
        title="Featured Card" 
        description="Enhanced card with glass morphism effect"
        color="purple"
      />
      <AppleCard 
        variant="compact"
        title="Compact Card" 
        description="Minimal spacing for dense layouts"
        color="green"
      />
    </div>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# Ready to Build?

<div class="mt-8 mb-12">
  <div class="apple-text-title-2 mb-6">Start creating beautiful presentations today</div>
  <div class="apple-text-body opacity-70 max-w-2xl mx-auto">
    This theme brings Apple's design system to Slidev, giving you all the tools you need to create professional, accessible, and beautiful presentations.
  </div>
</div>

<div class="flex gap-6 justify-center">
  <AppleButton variant="primary" size="large" color="blue">
    Download Theme
  </AppleButton>
  <AppleButton variant="secondary" size="large">
    View Documentation
  </AppleButton>
</div>

<div class="mt-12 apple-text-caption-1 opacity-50">
  Made with ❤️ for the design community
</div>
\`\`\`

更新布局文件：
