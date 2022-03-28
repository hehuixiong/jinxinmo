const { defineConfig } = require('@vue/cli-service')
const PORT = 3000
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: PORT
  },
  chainWebpack: config => {
    config.plugin('html').tap((args) => {
      args[0].title = '膜结构设计公司-膜结构设计-张拉膜结构设计-深圳市金鑫空间膜结构建筑设计院'
      return args
    })
  }
})
