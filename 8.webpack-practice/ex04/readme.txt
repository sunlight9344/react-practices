ex04: css module bundling

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader

2. 번들링 환경(webpack.config.js) 설정
  [1] entry
  [2] output
  [3] devServer
  [4] modules
  module: {
        rules:[{
            test: /\.css$/i,
            use:['style-loader', 'css-loader']
        }]
    },

3. 스크립팅
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }