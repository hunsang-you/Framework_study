function 함수(x) {
  return x * 2;
}
// return이 없을경우
// void : 실수로 뭔가 return하는걸 사전에 막음
function 함수1(x) {
  1 + 1;
}
// 파라미터가 옵션일 경우엔 -> 파라미터변수? : 타입
// ? == number | undefined 라는 뜻
function 함수2(x) {}
// 숙제
function call(name) {
  if (name) {
    console.log("안녕하세요 " + name);
  } else {
    console.log("이름이 없습니다");
  }
}
call();
function count(x) {
  if (typeof x == "number") {
    console.log(x.toString().length);
    return x.toString().length;
  } else {
    console.log(x.length);
    return x.length;
  }
}
count(192);
function CanMarry(income, home, charm) {
  let score = 0;
  score += income;
  if (home === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(CanMarry(700, false, "중"));
console.log(CanMarry(100, false, "상"));
