// 함수에 타입도 파라미터로 입력가능
// function func1(x: unknown[]) {
// return type이 unknown으로 나옴 -> a + 1이 불가
//     return x[0];

// }
// 해결책1 -> narrowing 하거나 as를 써서 해결
// 해결책2 -> Generic 함수 만들기(파라미터로 타입을 입력하는 함수)
// <작명> => type만 입력가능
// type은 여러개 넣을 수 있음
// Generic 함수 장점 : 확장성이 있다(매번 다른 타입 출력 가능)
// 가끔 타입파라미터를 자동으로 유추함
function func1<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = func1<number>([4, 2]);
let b = func1<string>(["4", "2"]);
console.log(a + 1);
console.log(b);

// 숫자를 넣으면 -1해서 return하는 함수
// return에 에러가 나는 이유 : Type자리에 어떤 타입이 들어올지 모르기 때문에 미리 에러를 내고 있는것
// function func2<Type>(x: Type) {
//     return x - 1;
// }
// narrowing 해주거나 or 타입파라미터를 제한(extends)
function func2<Type extends number>(x: Type) {
  // extends -> Type이 우측에 있는 속성을 가지고 있는지 체크
  return x - 1;
}

let num = func2<number>(5);
console.log(num);

// 커스텀 타입으로도 타입파라미터 제한 가능
interface LengthCheck {
  length: number;
}
// MyType이 LengthCheck 속성을 가지고 있는지 체크
function func3<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

// let customType = func3<number>(100)
let customType = func3<string[]>(["100"]);
console.log(customType);

// 요약
// 1. 함수에 타입파라미터를 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한 가능
// 3. class에도 타입파라미터 넣을 수 있음

class classParam<MyType> {}

// 숙제1

function work1<WorkType extends string | string[]>(x: WorkType) {
  return x.length;
}

let result1 = work1<string>("hello");
console.log("result1", result1);
let result2 = work1<string[]>(["kim", "park"]);
console.log("result2", result2);

// 숙제2
interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function work2(x: string) {
  return JSON.parse(x);
}

let work2Result = work2(data);
console.log(work2Result);

// 숙제3 class 수정
class Person<Type> {
  name;
  constructor(a: Type) {
    this.name = a;
  }
}

let res1 = new Person<string>("홍길동");
let res2 = new Person<number>(3);
console.log(res1.name);
console.log(res2.name);
