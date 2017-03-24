var htmlWebpackPlugin = require('html-webpack-plugin');

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
        app: './src/script/main.js',
        search: './src/script/m.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        filename: 'js/[name]-[hash].js',
        path: __dirname + '/dist',
        publicPath: 'http://www.cdn/'
    },
    plugins: [
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

        new htmlWebpackPlugin({
            filename: 'a-[hash].html',
            template: 'index.html',
            inject: false,
            title: 'this is a！',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks:['app','a','c']
        }),

        new htmlWebpackPlugin({
            filename: 'b-[hash].html',
            template: 'index.html',
            inject: false,
            title: 'this is b！',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            excludeChunks:['c','b','a']
        })
    ]
}