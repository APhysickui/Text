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

\`\`\`yaml
---
theme: apple
---
\`\`\`

## Layouts

This theme provides several layouts:

### `intro`
Perfect for introduction slides with centered content.

\`\`\`yaml
---
layout: intro
---
\`\`\`

### `statement`
Great for quotes and important statements.

\`\`\`yaml
---
layout: statement
---
\`\`\`

### `two-cols`
Two-column layout for side-by-side content.

\`\`\`yaml
---
layout: two-cols
---
\`\`\`

### `image-right`
Content on the left, image on the right.

\`\`\`yaml
---
layout: image-right
image: /path/to/image.jpg
---
\`\`\`

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
  /* Add more custom colors */
}
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Credits

Inspired by Apple's design language and built with [Slidev](https://sli.dev/).
\`\`\`

创建 TypeScript 声明文件：
