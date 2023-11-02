ex04: State
    1. 기본 개념
    2. 제어 component
    3. 
=================================+++=================================
[1] install
    1. 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin
        $ npm i react react-dom prop-types styled-components

[2] settings
    1. webpack.config.js
    2. babel.config.json

[3] scripting
    "scripts": {
        "start": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }

[4] 테스트 서버 실행
    $ npm run debug src=(01|02|03)