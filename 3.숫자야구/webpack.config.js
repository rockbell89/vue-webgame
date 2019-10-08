// node 환경 require
const vueLoader = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode:'development', // 'production   배포
  devtool: 'eval', // 'hidden-sorce-map' 배포
  resolve: {
    extensions: ['.js', '.vue'] // 확장차 처리 .vue 에서 vue 제거해도 처리됨
  },
  entry: {
    app: path.join(__dirname, 'main.js')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      // use: 'vue-loader' 도 가능
    }],
  }, // webpack 의 핵심
  plugins: [
    new vueLoader(),
  ], // output 직전 module 최종처리
  output: {
    filename: '[name].js',
    // path: './dist'
    path: path.join(__dirname, 'dist') // 절대경로

  },
}
