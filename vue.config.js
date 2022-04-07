const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  filenameHashing: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          enforce: "pre",
          include: [path.join(__dirname, "src")],
          options: {
            fix: true
          }
        }
      ]
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "js/[name].[hash:8].js",
      publicPath: "/",
      chunkFilename: "js/[name].[contenthash:8].js"
    }
  },
  chainWebpack: (config) => {
    // 先刪除預設的svg配置
    config.module.rules.delete("svg")
    // 新增 svg-sprite-loader 設定
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "[name]" })
    // 修改 images-loader 配置
    config.module.rule("images").exclude.add(resolve("src/assets/svg"))
  }
}
