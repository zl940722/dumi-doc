import { defineConfig } from "dumi";

const repo = "supreview-doc";
export default defineConfig({
  title: "supreview",
  // favicon:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // outputPath: 'docs-dist',
  mode: "site",

  outputPath: "docs-dist",
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,

  navs: [
    {
      title: "文档",
      path: "/document",
    },
    {
      title: "组件",
      path: "/compents",
    },
    {
      title: "部署文档",
      path: "/deploy",
    },
  ],
  menus: {
    "/compents": [
      {
        title: "按钮",
        path: "/compents/Button",
      },
      {
        title: "图表",
        children: ["compents/Charts/BarChart/index.md"],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
