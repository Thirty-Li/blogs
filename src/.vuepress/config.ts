import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blogs/",

  lang: "zh-CN",
  title: "Thirty_Li",
  description: "记录日常学习和技术钻研",

  theme,
  head: [
    ['link', { rel: 'icon', href: 'logo.png' }]
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
