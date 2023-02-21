// narrowing -> if문에 파라미터의 타입을 명확하게 지정
function func3(x: number | string) {
  if (typeof x === "string") {
    return x + 1;
  } else {
    return x + 1;
  }
}

function func1(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
  }
}

// assertion (타입 덮어쓰기)
function func2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // 왼쪽의 변수를 number로 덮어씀
}

// assertion의 용도
// 1. Narrowing할 때
// 2. 무슨 타입이 들어올지 확실할 때 사용

// 숙제
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function myfunc(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "없다";
  }
}

console.log(myfunc({ subject: ["english", "art"] }));
