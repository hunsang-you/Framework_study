// import { Age } from './types/common/23_test';
// import * from './23_test.d'
// index.d.ts.는 수정x
// 기본적으로 d.ts는 글로벌 모듈이 아니다(타입들에 export를 해야한다)
// 그래서 d.ts파일을 글로벌 모듈로 만드는 법
// tsconfig -> "typeRoots": ["./폴더명"] => 여기있는 타입들은 글로벌하게 이용가능
let age = 20;
let age2 = 30;
let person = '홍길동';
// 외부라이브러리 쓸 때 타입정의가 안되어 있다면
// $().append() => 동작은 잘될지 몰라도 에러가 발생
// 즉 j.query의 타입정의를 알아서 해주어야 함
// Definitely Typed github repository에서 원하는 타입.d.ts 확인
// 혹은 타입스크립트 공식홈페이지에서 검색(jquery)
// npm 설치시엔 대부분 타입도 들어옴
// npm i @types/jquery
// node_modules/@types 폴더에 있는 타입들은 글로벌 모듈
// tsconfig의 typeRoots를 따로 설정해놓으면 자동으로 @types를 포함하지 않음
// 그러므로 typeRoots에 @types를 추가하거나 typeRoots 자체를 다 지운다
$().append();
