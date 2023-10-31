4. Env Preset: 변환 규칙 모음
    [1] preset
        - 여러 플러그인 변환 규칙을 한 번에 적용하기 위해서 관련 플러그인을 모아 놓은 것
        - 종류
            1. ECMAPScript 년도 별로 모아 놓은 것
            2. ECMAScript stage (level 0, 1, 2, 3)로 모아 놓은 것
            3. 3rd party: TypeScript, JSX

            등 다양하다람쥐

        - ECMAScript Preset은 Env Preset(preset-env, ECMAScript Level3)이다.

    [2] 설치(류)
        $ npm i -D @babel/core @babel/cli @babel/preset-env

    [3] 프리셋 설치 확인
        $ npm list --depth=1 | grep @babel/plugin

    [4] Env Preset 설정
        - 타겟 브라우저 설정 방식
        - 브라우저star ex6 호환성 테이블 참고(https://kangax.github.io/compat-table/es6)

    [5] 변환 하기(스)
        $ npx babel src/index.js -o dist/index.js

        타겟에서 ie 를 빼고 하면 어떻게 되나 한 번 보세요