ex04: Application Bundling 이 필요함 매우 중요한 컨셉, 번들링이란 ... ??? (뿌찌뿌찌뽕)

1. webpack -> Application Module(js, html, css, scss/sass, images, font ...)들을
   '의존성 분석'을 하여 하나의 js로 묶는 도구
2. 최종 결과물인 하나의 js 파일을 번들(bundle)로 묶는 작업(bundling)
3. 빌드작업(js)
   - linting(ESLink, 문법체크)
   - document (JSDocs)
   - test(Mocha, jest)
   - 난독/압축(uglify)
   - bundling
4. js 모듈 뿐만 아니라 다양한 asset(images, css, scss/sass, font)들도 모듈로 취급