import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import { defineEChartsConfig } from "vuepress-plugin-md-enhance/client";

defineEChartsConfig({
    setup: async () => {
        await import("echarts-wordcloud");
    },
});