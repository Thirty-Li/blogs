import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import { defineEChartsConfig } from "vuepress-plugin-md-enhance/client";
// import { defineClientConfig } from "vuepress/client";
// import { setupSnowFall } from "vuepress-theme-hope/presets/SnowFall.js";
//
// defineClientConfig({
//     setup() {
//         setupSnowFall({
//             speed: 1,
//             image: "./images/snow.gif",
//             count: 25,
//             minSize: 5,
//             maxSize: 10,
//         });
//     },
// });
defineEChartsConfig({
    setup: async () => {
        await import("echarts-wordcloud");
    },
});