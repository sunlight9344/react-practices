ex03: React Event
    1. Inline Handler
    2. Function Handler
    3. Synthetic Event 객체(DOM Event 합성)
    4. Event Handler 예제
    5. ref 사용하기: Function Components
    6. ref 사용하기: Class Component

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