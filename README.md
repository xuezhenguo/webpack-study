# webpack-study
a webpack-study project
webpack 2.3.0
tips
start
module.exports = {
    entry: {
        page1: ['./src/script/main.js','./src/script/m.js'],
        page2: './src/script/main.js’
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: "[id].bundle.js”, 
        path: __dirname + '/dist/js’   //_dirname 当前目录（必须格式） 查找路径
    }
}
多个路径的文件分开压缩时（以上
end
start
module.exports = {
    // entry: {
    //     page1: ['./src/script/main.js','./src/script/m.js'],
    //     page2: './src/script/main.js'
    // },
    // output: {
    //     filename: '[name].bundle.js',
    //     chunkFilename: "[id].bundle.js",
    //     path: __dirname + '/dist/js'
    // }
    entry: ['./src/script/main.js','./src/script/m.js'],
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/js'
    }
}
单个路径的文件压缩的时候压缩（up
end
start
module.exports = {
    entry: {
        app: './src/script/main.js',
        search: './src/script/m.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}
多个文件压缩到一个js文件的时候写法（up
end
start
npm install html-webpack-plugin --save-dev
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/script/main.js',
        search: './src/script/m.js'
    },
    output: {
        filename: '[name]-[hash].js',
        path: __dirname + '/dist/js'
    },,
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html’,  //html加版本号
            template: 'index.html’,  //添加js到html里
            inject: ‘body’     //js放置在body里，同时也可head
        })
    ]
}
new htmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html',
            inject: false,
            title: 'this is webpack！',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks:['app','b','c']
        }),
<% for (var key in htmlWebpackPlugin.files) {%>
    <%=key%> :<%= JSON.stringify(htmlWebpackPlugin.files[key])  %>
<%} %>
<% for (var key in htmlWebpackPlugin.options) {%>
    <%=key%> :<%= JSON.stringify(htmlWebpackPlugin.options[key])  %>
<%} %>

    "start": "rm -rf dist && webpack --config webpack.config.js",
    "webpack": "webpack --config webpack.config.js",
    "clean":"rm -rf dist"
end
start
{
            test: /\.(png|jpg|gif|svg)$/i,
            loader: 'file-loader',
            query: {
                name: 'assets/[name]-[hash:5].[ext]'
            }

        }
{
            test: /\.(png|jpg|gif|svg)$/i,
            loaders: 'url-loader',
            query: {
                limit: 220,
                name: 'assets/[name]-[hash:5].[ext]'
            }

        }
压缩图片（up
end
