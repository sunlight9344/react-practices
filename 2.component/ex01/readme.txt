ex01: property
    1. Component 작성법
    2. Data Flow: Top -> Down 방식
        - 부모에서 자식으로 전달된다.
        - 컴포넌트 통신(Data Flow)
    3. 자식에서 변경 불가
    4. 부모가 소유한 데이터

src/01: 함수 컴포넌트의 property
src/02: Data Flow
src/03: Class Component property
src/04: validation

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
        "start": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }

[4] 테스트 서버 실행
    $ npm run debug src=(01|02|03)