# es6-project-template


# webpack : 번들링 도구 
# 설치하기 
# $ npm install --save-dev webpack webpack-cli
# 번들링 전에 파일 트랜스파일링 진행이 필요하므로 로더 설치
# babel-loader 설치
# $ npm install --save-dev babel-loader


# npm run build 명령을 통해 babel로 프랜스파일링 진행 
# src/js/main.js ==> dist/js/main.js 변환됨 
# 변환된 파일 터미널 실행 : node /dist/js/main

# webpack 설정을 통한 파일 번들링 진행  
# src/js/*.js 파일들이 dist/js/bundle.js 1개의 파일로 번들링됨 
# webpack 에서 babel-loader 를 통해 babel의 트랜스 파일링 후 에 번들링을 진행함  

# 폴리필 이란?
# 브라우저 마다 지원하는 스펙이 다르고 오래된 브라우에 대해서도 코드가 작동되어야 하므로
# 지원 되지 않는 기능을 맞춰 준다는 개념
# 폴리필 의존성 추가 
# npm install babel-polyfill  


# babel이 트랜스파일링 해주는데 "폴리필"이 필요한 이유 ?
# new Promise(), Object.assign(), Array.from() 등과 같이 
# ES5 이하로 대체할 수 없는 기능은 바벨에서 트랜스 파일링이 되지 않는다.
# 즉 무시하고 그대로 코드를 만들어 준다. (bundle-without-polyfill.js 에서 확인 가능)
# @babel/polyfill 의존성 설치 필요함 
# $ npm install @babel/polyfill
# 폴리필은 개발환경 뿐만 아니라 실제 환경에서도 필요하므로 --save-dev 옵션을 제거 한다.
# --dev-save 는 product 에는 포함되지 않기때문에.
# webpack 엔트리에 "폴리필" 추가
# 개발서버 설치 
# npm install --save-dev webpack-dev-server 
# 'start' 스크립트 추가 : webpack-dev-server --mode development --open 

# Webpack 을 통해 Sass 컴파일
# 의존성 설치 
# npm install node-sass style-loader css-loader sass-loader --save-dev
 
# 2가지 방법 
# 1> bundle.js 에 css 코드 추가 
# 2> 별도의 style.css 파일 생성 


# ESLint Fix 단축키 변경 권유 
# 설정-keymap-ESLint 검색하여 Fix ESLint Problems 단축키 추가
# cmd+option+control +L 추천

# tab intent 변경 : 4 -> 2 
# 설정-Edit-Code Style-Javascript Tab 변경 
 

