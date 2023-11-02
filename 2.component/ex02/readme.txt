ex02: Component Styling
    1. Inline Styling
    2. Normal CSS
        - css-loader option: {module: false}
        - 실행
            $ npm run debug src=02 css-module=false

    3. CSS Module I
        - css-loader option: {module: true}
        - 실행
            $ npm run debug src=03

    4. CSS Module II
        - css-loader option: {module: true}
        - 실행
            $ npm run debug src=04
        
    5. SASS & SCSS
        - css-loader option: {module: true}
        - 실행
            $ npm run debug src=05
    
    6. CSS in JS: Styled Component, Less & Styleable
        - $ npm i styled-components
        - css-loader option: {module: true}
        - 실행
            $ npm run debug src=06
            
    7. React Modal(Default Library SPA)
    8. Modal: Material UI

[1] install
    1. 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin    2. 라이브러리
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