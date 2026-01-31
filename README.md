# SuchAs AI - AI工具导航站

🤖 AI Tools Navigator | 收录最优秀的 AI 工具

## 🌟 功能特性

- 📂 **分类浏览** - 按写作、图像、视频、编程、音频、效率等分类
- 🔍 **智能搜索** - 实时搜索 AI 工具
- 🏷️ **标签过滤** - 按标签快速定位工具
- 📱 **响应式设计** - 完美适配手机和电脑

## 🚀 快速部署

### 方式一：GitHub Pages（推荐）

```bash
# 1. 创建 GitHub 仓库并推送
git remote add origin https://github.com/你的用户名/suchas-ai.git
git push -u origin master

# 2. 在 GitHub 仓库设置中启用 Pages
# Settings → Pages → Source: Deploy from branch → branch: master → Save

# 3. 访问 https://你的用户名.github.io/suchas-ai
```

### 方式二：Vercel（推荐）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 进入项目目录部署
cd suchas-ai
vercel --prod

# 3. 自定义域名（可选）
# vercel --add
```

### 方式三：Netlify

```bash
# 1. 拖拽 suchas-ai 文件夹到 Netlify Drop
# 2. 或使用 CLI:
npm i -g netlify-cli
netlify deploy --prod --dir=.
```

## 📁 项目结构

```
suchas-ai/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── tools-data.js   # AI 工具数据
│   └── app.js          # 交互逻辑
└── icons/              # 图标文件夹
```

## 🎨 自定义

### 添加新工具

编辑 `js/tools-data.js`，按以下格式添加：

```javascript
{
    id: 29,
    name: "新工具名称",
    icon: "🎯",
    category: "writing",  // writing|image|video|code|audio|productivity
    categoryName: "写作助手",
    description: "工具描述...",
    tags: ["标签1", "标签2"],
    price: "价格",
    url: "https://工具官网.com"
}
```

### 修改样式

编辑 `css/style.css` 自定义颜色和样式。

## 📝 许可证

MIT License - 欢迎学习和使用

---

💡 **提示**: 如需绑定自定义域名 suchas.ai，请在托管平台中添加域名并配置 DNS。
