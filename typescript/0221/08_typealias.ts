type NumOut = (x: number, y: number) => number;

let ABC: NumOut = function (x, y) {
  return x + y;
};

let MemberInfo = {
  name: "kim",
  age: 30,
  plusOne(x: number) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
MemberInfo.plusOne(1);
MemberInfo.changeName();

// 숙제
type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

type tp1 = (x: string) => string;
type tp2 = (x: string) => number;

function func5(x, func1: tp1, func2: tp2) {
  let result = func1(x);
  let result2 = func2(result);
  console.log(result2);
}
func5("010-1111-2222", cutZero, removeDash);
