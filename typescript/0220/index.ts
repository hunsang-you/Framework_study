// let 이름1: string[] = ["kim", "park"];
// let name: { name: string } = { name: "kim" };

// let name: string | number = "kim";

type myType = string | number;

let 이름1: myType = "kim";

function func(x: number): number {
  return x * 2;
}

// 무조건 첫째는 number, 두번째는 boolean
// type Member = [number, boolean];

// let john: Member = [123, true];

//[key: string] => 모든 object 속성 -> 글자로 된 모든 object 속성의 타입은 :string
type Member = {
  [key: string]: string;
};
let john: Member = { name: "kim", age: "12" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
