# React CLI Tool 使用文档

## 简介
这是一个用于快速创建 React 项目的命令行工具，集成了 TypeScript、SWC、Webpack、Tailwind CSS 等现代前端开发工具。

## 特性
- 🚀 使用 SWC 替代 Babel，提供更快的编译速度
- 📦 基于 Webpack 的构建配置
- 💪 TypeScript 支持
- 🎨 Tailwind CSS 支持
- 🔧 ESLint + TypeScript 代码检查
- 📱 开箱即用的开发环境配置
- 🗂️ 规范的项目结构
- 🔥 热更新支持
- 📝 路径别名支持

## 快速开始

### 安装
```bash
# 克隆项目
git clone [repository-url]
cd react-cli-tool

# 安装依赖
npm install
```

### 创建新项目
```bash
# 使用 node 直接运行
node ./bin/cli.js create my-project

# 或使用 npm scripts
npm run create my-project
```

## 项目结构
使用 CLI 创建的项目将包含以下结构：
```
my-project/
├── src/
│   ├── components/     # 可复用组件
│   ├── hooks/         # 自定义 hooks
│   ├── pages/         # 页面组件
│   ├── states/        # 状态管理
│   ├── styles/        # 样式文件
│   ├── App.tsx        # 根组件
│   └── index.tsx      # 入口文件
├── public/
│   └── index.html     # HTML 模板
├── config/
│   ├── webpack.common.js    # Webpack 通用配置
│   ├── webpack.development.js # 开发环境配置
│   └── webpack.production.js  # 生产环境配置
├── test/              # 测试文件目录
├── docs/              # 文档目录
├── package.json
├── tsconfig.json      # TypeScript 配置
├── postcss.config.js  # PostCSS 配置
├── tailwind.config.js # Tailwind 配置
└── .eslintrc.js      # ESLint 配置
```

## 配置说明

### TypeScript 配置
项目使用 TypeScript 配置包含：
- 严格模式启用
- 路径别名配置（@/、@components/ 等）
- React 18 类型支持
- ESModule 支持

### Webpack 配置
包含三个配置文件：
1. `webpack.common.js`: 通用配置
   - SWC loader 配置
   - CSS 处理配置
   - 路径别名
   - HTML 插件

2. `webpack.development.js`: 开发环境配置
   - 热更新
   - Source Maps
   - 开发服务器配置

3. `webpack.production.js`: 生产环境配置
   - 代码分割
   - 文件hash
   - 产物清理

### SWC 配置
集成在 Webpack 配置中：
- TypeScript 和 TSX 支持
- React 自动运行时
- 装饰器支持

### Tailwind CSS
完整的 Tailwind CSS 配置：
- PostCSS 集成
- JIT 模式
- 自动摇树优化

### ESLint 配置
包含以下规则集：
- TypeScript ESLint 规则
- React 推荐规则
- React Hooks 规则

## 使用指南

### 开发命令
```bash
# 启动开发服务器
npm start

# 构建生产版本
npm run build

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

### 开发服务器
开发服务器配置：
- 默认端口：3000
- 自动打开浏览器
- 热模块替换
- 路由历史模式支持

### 构建产物
生产构建将输出到 `dist` 目录：
- JavaScript 文件使用内容哈希
- 自动代码分割
- 生产环境优化

## 定制化

### 添加新的依赖
```bash
npm install [package-name]
```

### 修改 Webpack 配置
可以通过修改 `config` 目录下的相应文件来自定义 Webpack 配置。

### 修改 Tailwind 配置
可以通过修改 `tailwind.config.js` 来自定义样式系统。

### 修改 TypeScript 配置
可以通过修改 `tsconfig.json` 来自定义 TypeScript 编译选项。

## 最佳实践

### 项目结构
- 组件放在 `src/components` 目录
- 页面放在 `src/pages` 目录
- 全局状态放在 `src/states` 目录
- 工具函数放在 `src/utils` 目录

### 开发建议
1. 使用 TypeScript 编写代码
2. 遵循 ESLint 规则
3. 使用 Tailwind CSS 进行样式开发
4. 定期运行类型检查

## 常见问题

### 启动失败
检查：
1. Node.js 版本是否 >= 14
2. 是否已安装所有依赖
3. 端口 3000 是否被占用

### 构建错误
检查：
1. TypeScript 类型是否正确
2. 模块引入路径是否正确
3. 是否有未解决的 ESLint 错误

## 更新日志

### v1.0.0
- 初始版本发布
- 基础项目结构
- 开发环境配置
- 生产环境配置

## 许可证
MIT License