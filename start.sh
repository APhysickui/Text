#!/bin/bash

# 检查是否安装了 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js"
    exit 1
fi

# 检查是否安装了 npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装，请先安装 npm"
    exit 1
fi

echo "🚀 正在安装依赖..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ 依赖安装成功！"
    echo "🎨 启动 Slidev 开发服务器..."
    npm run dev
else
    echo "❌ 依赖安装失败，请检查网络连接或 npm 配置"
    exit 1
fi
