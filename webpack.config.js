//上帝保佑,永无bug
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const sourcePath = path.resolve("src")

module.exports = {
  //设置人口文件的绝对路径
  entry: {
    bundle: ["babel-polyfill", path.resolve("src/index.jsx")],
    vendor: ["react", "react-dom", "echarts"]
  },
  output: {
    path: path.resolve("./static"),
    filename: "[name].[hash:8].js"
  },
  devServer: {
    disableHostCheck: true,
    hot: false,
    inline: false,
    historyApiFallback: true,
    port: 12347, // 配置端口号
    host: "0.0.0.0",
    contentBase: "./" // 配置文件的根目录
  },
  module: {
    // 配置编译打包规则
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.scss/,
        exclude: path.resolve(__dirname, "./src/static/scss/app.scss"),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?modules&localIdentName=[local]_[hash:base64:6]",
            "postcss-loader",
            "sass-loader",
            "resolve-url-loader",
            "sass-loader?sourceMap"
          ]
        })
      },
      {
        test: /\.scss/,
        include: path.resolve(__dirname, "./src/static/scss/app.scss"),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "postcss-loader",
            "sass-loader",
            "resolve-url-loader",
            "sass-loader?sourceMap"
          ]
        })
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)(\?t=[\s\S]+)?$/,
        use: ["url-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]"]
      },
      {
        test: /\.(jpg|png|gif|swf)$/,
        use: ["url-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]&outputPath=img/"]
      },
      {
        test: /\.json$/,
        use: ["json-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    alias: {
      md_resource: path.resolve("./src/util/resource.js"),
      'static': path.resolve("./src/static"),
      'utils': path.resolve("./src/util/utils.js"),
      'components': path.resolve("./src/components"),
    },
    modules: [sourcePath, "node_modules"]
  },
  devtool: "source-map",
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"],
      minChunks: Infinity,
      filename: "js/[name].js"
    }),
    new HtmlWebpackPlugin({
      // title: '贵州省煤矿产业云平',// 标题
      favicon: path.resolve("./src/static/images/logo.png"),
      template: "./src/index.html", // 模板文件
      filename: "./index.html" // 产出后的文件名称
    }),
    new ExtractTextPlugin("bundle.[hash:8].css"),
    /*  new webpack.LoaderOptionsPlugin({
            options: {
                'display-error-details': true
            }
        }),*/
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new openBrowserWebpackPlugin({ url: "http://localhost:12347" })
  ]
}
