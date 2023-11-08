const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = function(env){
        return {
        /* --------------------------------------------------- */
        mode: "none",
        entry: path.resolve(`src/index.js`),
        /* --------------------------------------------------- */
        output: {
            // 사실 빌드 (할)됐을 때의 위치를 얘기하는 것임
            path: path.resolve('../backend/src/main/resources'),
            filename: 'assets/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules:[{
                test: /\.js/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    /* --------------------------------------------------- */
                    configFile: path.resolve('config/babel.config.json')
                    /* --------------------------------------------------- */
                }
            },{
                test: /\.(c|sa|sc)ss$/i,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            /* --------------------------------------------------- */
                            modules: true
                            /* --------------------------------------------------- */
                        }
                    },
                    'sass-loader']
            }, {
                test: /\.(png|gip|jpg|jp?eg|svg|icon|tif?f|bmp)/i,
                type: 'asset/resource'
            }]
        },
        /* --------------------------------------------------- */
        plugins: [
            new CaseSensitivePathsPlugin()
        ],
        /* --------------------------------------------------- */
        devtool: "eval-source-map",
        devServer: {
            host: '0.0.0.0',
            port: 9090,
            liveReload: true,
            compress: true,
            hot: false,
            proxy: {
                '/api': 'http://localhost:8080'
            },
            static: {
                directory: path.resolve('./public')
            },
            historyApiFallback: true
        }
    };
}