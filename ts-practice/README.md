# 컴파일

```
# type script를 JS로 컴파일
# dist 디렉토리가 생성되며 컴파일된 결과(js) 저장
# output 은 tsconfig.json 에서 설정
$> yarn run tsc
```

# 실행

```
# TS에 대한 단일 파일 실행
yarn run ts-node ./src/practice.ts

# dist 에 있는 파일 실행
node ./dist/practice.js
```
