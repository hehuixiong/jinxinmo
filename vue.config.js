const { defineConfig } = require("@vue/cli-service");
const defaultSettings = require("./config/env.js");
const PORT = 3000;
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: PORT,
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = defaultSettings.title;
      return args;
    });
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        additionalData: `
          @import "@/styles/mixin.scss";
          @import "@/styles/variables.scss";
          `,
      },
    },
  },
});
