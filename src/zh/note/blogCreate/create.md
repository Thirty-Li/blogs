---
title: 创建项目
icon: folder-plus
order: 2
category:
  - Cookbook
  - Tutorial
  - Get Started
tag:
  - Template
---

此教程将指引你创建一个 VuePress Theme Hope 项目。

<!-- more -->

### 1. 项目初始化

使用 vuepress-theme-hope 主题提供的脚手架工具创建项目

- 用管理员模式打开 `cmd` 窗口

- 切换到想要放置项目的路径

- 例如要切换到 `E:\Project` ，执行 `e:` 切换到 `E` 盘，执行 `cd [dir]` 进入 [dir] 目录
::: warning 注意

[dir]指的是你将要放置你的项目所在的文件路径

:::
- 执行以下命令：
```
npm init vuepress-theme-hope my-docs
```
::: tip 注意

这里的 `my-docs` 是一个参数，代表 `VuePress Theme Hope` 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 `my-docs` 文件夹。
如果你有需求，你可以更改此参数来使用一个新文件夹名称。

:::

::: tip 选择一些默认的配置

选择包管理器 `npm`

设置协议 `MIT`

项目需要用到多语言么 `NO`

你想要创建什么类型的项目 `docs`

是否需要一个自动部署文档到 `GitHub Pages` 的工作流 `YES`

选择你想使用的源 `当前源`

:::

### 2. 安装依赖

由于插件之间版本不同容易出现依赖冲突，可以直接修改`package.json`文件

```
{
  "name": "vuepress-theme-hope-template",
  "description": "A project of vuepress-theme-hope",
  "version": "2.0.0",
  "license": "MIT",
  "type": "module",
  "scripts": {
    "docs:build": "vuepress-vite build src",
    "docs:clean-dev": "vuepress-vite dev src --clean-cache",
    "docs:dev": "vuepress-vite dev src",
    "docs:update-package": "npx vp-update"
  },
  "devDependencies": {
    "@types/katex": "0.16.7",
    "@vue/repl": "4.4.2",
    "@vuepress/bundler-vite": "2.0.0-rc.15",
    "@vuepress/bundler-webpack": "2.0.0-rc.15",
    "@vuepress/helper": "2.0.0-rc.47",
    "@vuepress/plugin-feed": "2.0.0-rc.47",
    "@vuepress/plugin-revealjs": "2.0.0-rc.48",
    "@vueuse/core": "11.1.0",
    "@waline/client": "^3.3.2",
    "artplayer": "5.1.7",
    "echarts-wordcloud": "2.1.0",
    "flowchart.ts": "3.0.1",
    "katex": "0.16.11",
    "kotlin-playground": "1.30.0",
    "markmap-lib": "0.17.0",
    "markmap-toolbar": "0.17.0",
    "markmap-view": "0.17.0",
    "mermaid": "11.2.1",
    "sandpack-vue3": "3.1.11",
    "sass-embedded": "1.79.3",
    "sass-loader": "16.0.2",
    "vue": "3.5.8",
    "vuepress": "2.0.0-rc.15",
    "vuepress-plugin-components": "2.0.0-rc.54",
    "vuepress-plugin-md-enhance": "2.0.0-rc.54",
    "vuepress-plugin-search-pro": "^2.0.0-rc.54",
    "vuepress-shared": "2.0.0-rc.54",
    "vuepress-theme-hope": "2.0.0-rc.56"
  }
}
```
用`管理员模式`在`项目根目录`(也就是你`package.json`所在的文件夹目录)执行以下命令，等待自动下载

```
npm install
```

下载完成后执行以下命令即可在本地打开博客：
```
npm run docs:dev
```
> 执行过程中出现 vuepress-theme-hope: ✖ @vuepress/plugin-redirect is not installed! 的报错是正常的，不需要管，也不要下载这个插件，容易出现依赖冲突

根据返回的网址，即可在本地访问你的`blog`
