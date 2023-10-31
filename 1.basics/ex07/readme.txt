ex07: ex00.cra Reconfiguration(모든걸 내가 직접 설정)

[1] install
    1. 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    2. 라이브러리
        $ npm i react react-dom

[2] settings
    1. webpack.config.js
    2. babel.config.json

[3] scripting
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

[4] 테스트 서버 실행
    $ npm start

[5] build
    $ npm run build