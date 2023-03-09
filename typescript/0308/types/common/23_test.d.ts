// 파일이름.d.ts
// - 타입 정의 보관용 파일(자바스크립트로 컴파일되지 않음)
// - 다른 ts파일에서 import 가능
// ts파일에 타입정의가 너무 길면 d.ts파일 만들기도 함
// 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용
// tsconfig -> "declaration": true => ts파일마다 d.ts파일 자동생성 옵션

// import / export 할 것이 많으면 namespace를 사용하거나 import * as ~~ 로 사용

// export type Age = number;
// export interface Person { name : string }
type Age = number;
interface Person { name : string }
