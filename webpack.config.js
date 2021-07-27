/*
 *                                                               _
 *   _____  _                           ____  _                 |_|
 *  |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *  | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *  |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *  |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *  ===============================================================
 *             More than a coder, More than a designer
 *  ===============================================================
 *
 *  - Document: webpack.config.js
 *  - Author: aleen42
 *  - Description: A configuration file for configuring Webpack
 *  - Create Time: Jun 27th, 2019
 *  - Update Time: Jun 27th, 2019
 *
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/mindmaps.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '',
        path: path.join(__dirname, 'assets'),
        filename: 'mindmaps.dist.js',
    },
    resolve: {
        extensions: ['.js'],
        modules: [path.resolve(__dirname, 'src/'), 'node_modules'],
        alias: {
            'markmap-tree': 'markmap/lib/d3-flextree',
            'markmap-parser': 'markmap/lib/parse.markdown',
            'markmap-transform': 'markmap/lib/transform.headings',
            'markmap-mindmap': 'markmap/lib/view.mindmap',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'mindmaps.css',
        }),
    ],
    module: {
        rules: [
            {test: /\.css$/, loader: [MiniCssExtractPlugin.loader, 'css-loader']},
            {
                /** babel */
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015'],
                    },
                },
            },
        ],
    },
};
