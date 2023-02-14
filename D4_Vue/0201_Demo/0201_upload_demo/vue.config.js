const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 接口代理
  devServer:{
    proxy:{
      "/api":{
        target:"http://localhost:8081",
        changeOrigin:true,
        // 少个斜杠找半天 😓
        pathRewrite:{
          "^/api":""
        }
      }
    }
  }
})
