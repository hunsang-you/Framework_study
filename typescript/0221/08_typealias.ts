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
