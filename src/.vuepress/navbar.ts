import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "算法笔记", icon: "lightbulb", link: "/zh/algorithm/" },
  { text: "开源项目", icon: "laptop-code", link: "/zh/project/" },
  { text: "学习笔记", icon: "book-open", link: "/zh/learning/" },
  { text: "计算机",   icon: "computer",    link: "/zh/computer/" },
  // {
  //   text: "技术小结",
  //   icon: "books",
  //   children: [
  //     { text: "计算机", icon: "computer", link: "/computer/" },
  //     { text: "常用框架", icon: "framework", link: "/framework/" },
  //     { text: "架构设计", icon: "server", link: "/architecture/" },
  //   ],
  // },
  // "/",
  // "/zh/project/",
  // "/zh/problem/",
  // "/zh/note/",
  // "/zh/learning/",
  // "/",
  // "/portfolio",
  // "/demo/",
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
]);