const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglify-js-plugin');


module.exports = {
  // 모드 (mode) : devoplement면 개발용, production이면 배포용이다.
  mode: 'development',

  // 엔트리 (entry): 번들링하려는 자바스크립트 모듈의 진입점을 엔트리(entry 또는 entry point)라 부른다.
  entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],

  // 아웃풋 (output): 엔트리에서 설정된 자바스크립트 파일로부터 출발하여 의존되는 모든 모듈들을 하나로 만든다.
  // 컴파일 + 번들링 된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },

  // devServer: {
  //   contentBase: './dist'
  // },

  // 플러그인 (plugins): 부가적인 기능들을 플러그인에 추가할 수 있다. 이러한 패키지들을 잘 활용하면 효과적으로 번들링할 수 있다.
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new UglifyJsPlugin({
      compress: true, // default 'true', you can pass 'false' to disable this plugin
      debug: true // default 'false', it will display some information in console
    })
  ],

  // 로더 (loader)
  // 웹팩의 모든 파일은 모듈로 관리되는데, 자바스크립트 파일 외에 이미지, 폰트, css도 관리한다.
  // 로더가 이미지, css 등의 모듈들을 웹팩이 이해할 수 있도록 하는 역할을 한다.
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      // sass settings
      {
        test: /\.scss$/,
        use: [
          // "style-loader", // creates style nodes from JS strings
          MiniCssExtractPlugin.loader, // bundle css file
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map'
  // https://webpack.js.org/concepts/mode/#mode-development
};
