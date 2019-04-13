
const { join, resolve } = require('path')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const zopfli = require('@gfx/zopfli')
// const BrotliPlugin = require('brotli-webpack-plugin')
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const pathResolve = dir => {
  return join(__dirname, dir)
}
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve(__dirname, './src/assets/css/global.styl')
      ]
    })
}
module.exports = {
  publicPath: './', // 项目相对路径
  // assetsDir: './',
  chainWebpack: config => {
    config
      .resolve.alias
      .set('@', pathResolve('src')) // key,value自行定义，比如.set('@@', pathResolve('src/components'))
      .set('@a', pathResolve('src/assets')) // key,value自行定义，比如.set('@@', pathResolve('src/components'))
      .set('@c', pathResolve('src/components'))
      .set('@v', pathResolve('src/views'))
      .set('@hhf', pathResolve('src/components/hhf-components'))
      .end()
      .parent
      .output
      .chunkFilename('js/[name].[contenthash].js')
      // stylus全局变量配置
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    // 开启比gzip体验更好的Zopfli压缩
  },
  // 修改webpack的配置
  configureWebpack: {
    // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
    externals: {
      'wx': 'wx'
    }
  },
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'stylus',
  //     patterns: [
  //       resolve(__dirname, './src/assets/css/common.styl')
  //     ]
  //   }
  // },
  // css: {
  //   loaderOptions: {
  //     stylus: {
  //       import: resolve(__dirname, './src/assets/css/common.styl')
  //     }
  //   }
  // },
  // 打包时不生成.map文件
  productionSourceMap: false
  // http://dev.hahaipi.com/wxxcx/index.php/Home/getMachineInfo
  // devServer: {
  //   proxy: 'http://dev.hahaipi.com'
  //   // proxy: {
  //   //   '/Home': {
  //   //     target: 'http://dev.hahaipi.com/', // 域名
  //   //     ws: true, // 是否启用websockets
  //   //     changOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //   //   // pathRequiresRewrite: {
  //   //   //   '^Home': '/'
  //   //   // }
  //   //   }
  //   // }
  // }
}
