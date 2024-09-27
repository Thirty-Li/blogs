---
title: 运行环境搭建
icon: node
order: 1
category:
  - Cookbook
  - Tutorial
  - Get Started
tag:
  - Runtime
---

本教程将指导你如何搭建 VuePress 的运行环境。

<!-- more -->

## Node.js

::: info 介绍

[Node.js®](https://nodejs.org/en/) 是一个基于 [Chrome's V8 JavaScript engine](https://v8.dev/)的 JavaScript 运行时环境。

:::

你需要下载并安装最新的长期维护版。

### 1. 点击 [Download page](https://nodejs.org/en/) 。

### 2. 运行安装包，保持所有的默认设置，一路下一步即可。

::: warning 自定义安装路径

不建议安装在C盘，自定义一下安装路径

:::
### 3. 然后再在安装路径的根目录下新建两个文件夹，`node_cache`和`node_global`,如图所示：

![](./image/9e8f03c3cf708ec9d207870992c14943.png)

### 4. 环境配置

建好以后开始配置环境：高级系统设置——环境变量

新建一个`NODE_HOME`，变量值为安装路径
![](./image/c11ad51c87f5a011643495335fad872b.png)

然后再在系统变量的`path`中添加

```bash
%NODE_HOME%
```

```bash
%NODE_HOME%\node_global
```

```bash
%NODE_HOME%\node_cache
```
![](./image/40775d2b28c32424afe0f77e5f87e0d7.png)

然后将用户变量默认的 `C:\User\35025\AppDate\Roaming\npm` 改成 前面新建文件夹`node_global`的路径，例如我的是`D:\Environment\nodejs\node_globle`

到这一步，环境就已经完全配好了，现在开始查看，键盘`Win+R`进入`cmd`
输入以下指令
```bash
node -v
```

```bash
npm -v
```
>能够正确显示版本号说明安装成功

### 5. 修改缓存目录和全局目录

用`管理员模式`打开 `cmd` 窗口执行以下指令

-设置缓存到 node_cache 文件夹：
```bash
npm config set cache [dir]
```

-设置全局模块的安装路径到 `node_global` 文件夹：

```bash
npm config set prefix [dir]
```
>[dir]是你对应文件夹的绝对路径
