var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  // 入口
  // entry: './src/script/app.js',
  entry: {
    'scripts/app': './src/script/app.js'
  },

  // 出口
  output: {
    // path: '/Users/Felix/Desktop/fengfan/dev/build',
    path: __dirname + '/build',
    // filename: 'app.js'
    filename: '[name]_[chunkhash:8].js'
  },

  // webserver服务器
  devServer: {
    // contentBase: '/Users/Felix/Desktop/fengfan/dev/build',
    contentBase: '../build',
    host: 'localhost',
    port: 7000,
    proxy: {
      '/api': {
        target: 'http://fengfangood.applinzi.com/',
        // target: 'http://localhost:9000',
        // target: 'http://fengfan.applinzi.com',
        changeOrigin: true
      },
      '/mock': {
        target: 'http://localhost:9000',
        pathRewrite: {'^/mock': ''}
      },
      '/nodejs': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        pathRewrite: {'^/nodejs': ''}
      }
    }
  },

  //模块
  module: {
    loaders: [
      // babel-loader, 解析es6, jsx
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },

      // babel-loader, 解析.JSX文件
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },

      // CSS打包
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },

      // SCSS打包
      // {
      //   test: /\.scss$/,
      //   loader: 'style-loader!css-loader!sass-loader'
      // }
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },

      // LESS打包
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      }
    ]
  },

  // 插件
  plugins: [
    // 1: 抽离CSS样式到文件
    new ExtractTextPlugin({
      // filename: 'styles/app.css',
      filename: 'styles/app_[chunkhash:8].css',
      allChunks: true,
      disable: false
    }),

    // 2: 根据模板自动生成html
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      title: '锋帆',
      name: 'kailong'
    }),

    // 3: 压缩代码
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   }
    // }),

    // 4: 自动打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:7000'
    }),

    // 5: 更改环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  // 组件抽离
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
    'redux': 'window.Redux',
    'react-redux': 'window.ReactRedux',
    'axios': 'window.axios',
    'antd': 'window.antd'
  }
}
