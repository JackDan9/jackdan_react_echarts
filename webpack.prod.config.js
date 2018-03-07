//上帝保佑,永无bug
const path = require("path");
const webpack = require('webpack');
const uglify = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sourcePath = path.resolve('src')

module.exports = {
    //设置人口文件的绝对路径
    entry: {
        bundle: ["babel-polyfill", path.resolve("src/index.jsx")],
        vendor: ['react', 'react-dom', 'echarts', 'konva']
    },
    devtool: "inline-source-map",
    output: {
        path: path.resolve("./static"),
        filename: "[name].[hash:8].js",
    },

    module: {
        // 配置编译打包规则
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }]
                })
            },
            {
                test: /\.scss/,
                exclude: path.resolve(__dirname, './src/static/scss/app.scss'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[local][hash:base64:6]'
                        }
                    }, 'postcss-loader', 'sass-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.scss/,
                include: path.resolve(__dirname, './src/static/scss/app.scss'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, 'postcss-loader', 'sass-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?t=[\s\S]+)?$/,
                use: ['url-loader?limit=1000&name=[md5:hash:base64:10].[ext]']
            },
            {
                test: /\.(jpg|png|gif|swf)$/,
                use: ['url-loader?limit=1000&name=[md5:hash:base64:10].[ext]&outputPath=img/','image-webpack-loader']
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
          md_resource: path.resolve("./src/util/resource.js"),
          'static': path.resolve("./src/static"),
          'utils': path.resolve("./src/util/utils.js"),
          'components': path.resolve("./src/components"),
        },
        modules: [
            sourcePath,
            'node_modules'
        ]
    },
    plugins: [
        new uglify(),
        new HtmlWebpackPlugin({
            // title: '贵州省煤矿产业云平',// 标题
             favicon: path.resolve("./src/static/images/logo.png"),
            minify:{
              removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        /*new uglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),*/

        /*
        * For react you can use this plugin for production. It reduces the size of the react lib to ~95kb (yes thats less than the prebuild minimized react.min.js in the bower package).
        * */
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity,
            filename: '[name].js'
        }),

        new ExtractTextPlugin("bundle.[hash:8].css"),
    ]
};
