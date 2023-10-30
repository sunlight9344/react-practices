ex06: images 모듈 번들링

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass

2. 번들링 환경(webpack.config.js) 설정
  [1] entry
  [2] output
  [3] devServer
  [4] modules
    module: {
        rules:[{
            test: /\.(c|sa|sc)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|gip|jpg|jp?eg|svg|icon|tif?f|bmp)/i,
            type: 'asset/resource'
        }]
    },

3. 스크립팅
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }