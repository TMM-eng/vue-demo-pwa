console.log("================================================")
console.log('process.env.MODE', process.env.MODE)
console.log('process.env.PUBLIC_PATH', process.env.PUBLIC_PATH)
console.log("================================================")

// Inside of webpack.config.js:
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  outputDir: `dist-${process.env.MODE}`,
  configureWebpack: {
    plugins: [
      // Other plugins...
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      })
    ]
  } 
}