var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = { 
    // entry: ['./src/script/main.js','./src/script/m.js'],
    // output: {
    //     filename: '[name].js',
    //     path: __dirname + '/dist/js'
    // }
    // entry: {
    //     page1: ['./src/script/main.js','./src/script/m.js'],
    //     page2: './src/script/main.js'
    // },
    // output: {
    //     filename: '[name].bundle.js',
    //     chunkFilename: "[id].bundle.js",
    //     path: __dirname + '/dist/js'
    // }
    entry: {
        main: './src/script/main.js',
        search: './src/script/m.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
        app: './src/app.js'
    },
    output: {
        filename: 'js/[name]-[hash].js',
        path: __dirname + '/dist'
    },
    module: {
      loaders: [
        { 
            test: /\.js$/, 
            loader: "babel-loader",
            exclude: path.resolve(__dirname,'node_modules'),
            include: path.resolve(__dirname,'src')
        },
        {
            test: /\.html$/,
            use: [
                    {
                        loader: 'html-loader'
                    }
            ]

        },
        {
            test: /\.tpl$/,
            use: [
                    {
                        loader: 'ejs-loader'
                    }
            ]

        },
        { 
            test: /\.css$/,
            include: path.resolve(__dirname,'src'),
            use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader?modules&importLoaders=1'
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      plugins: function () {
                        return [
                          require('autoprefixer')({
                            broswers: ['last 5 version']
                          })
                        ];
                      }
                    }
                  }
            ]
        },
        { 
            test: /\.less$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings 
                }, 
                {
                    loader: "css-loader" // translates CSS into CommonJS 
                },
                {
                    loader: 'postcss-loader',
                    options: {
                      plugins: function () {
                        return [
                          require('autoprefixer')({
                            broswers: ['last 5 version']
                          })
                        ];
                      }
                    }
                }, 
                {
                    loader: "less-loader" // compiles Less to CSS 
                }
            ]
        },
        { 
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings 
                }, 
                {
                    loader: "css-loader" // translates CSS into CommonJS 
                },
                {
                    loader: 'postcss-loader',
                    options: {
                      plugins: function () {
                        return [
                          require('autoprefixer')({
                            broswers: ['last 5 version']
                          })
                        ];
                      }
                    }
                }, 
                {
                    loader: "sass" // compiles Less to CSS 
                }
            ]
        },
        {
            test: /\.(png|jpg|gif|svg)$/i,
            loaders: [
                'url-loader?limit=220&&name=assets/[name]-[hash:5].[ext]',
                {
                    loader: 'image-webpack-loader',
                    query: {
                      progressive: true,
                      optimizationLevel: 7,
                      interlaced: false,
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      }
                    }
                }
            ]
        }
      ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            title: 'this is webpack！',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks:['app']
        })
    ]
}