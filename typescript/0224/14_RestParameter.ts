// 개념
// ... -> rest parameter = parameter가 무한히 들어올 수 있음, 다른 파라미터가 있다면 a, ...b로
function func1(...param) {
  console.log(param);
}

func1(1, 5, 3, 5, 6, 6);

// rest parameter 타입 지정
// type을 number로 지정한다면
function func2(...param: number[]) {
  console.log(param);
}

// func2(1, 5, 3, 5, 6, 6);

// ...spread operator -> 괄호를 벗긴다
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

// destructuring 개념
let [변수1, 변수2] = ["hi", 100];
console.log(변수1);

let { student: student, age: age } = { student: true, age: 20 };

// 함수 파라미터에 destructuring 가능

function func({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
func({ student: true, age: 20 });

// 숙제 1
function MaxVal1(...num: number[]): number {
  let max: number = 0;
  for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i];
    }
  }
  console.log(max);
  return max;
}
MaxVal1(6, 3, 7, 2);

function MaxVal2(...num: number[]): number {
  let result: number = 0;
  num.forEach((i) => {
    if (result < i) {
      result = i;
    }
  });
  console.log(result);
  return result;
}

MaxVal2(6, 3, 7, 2);

// 숙제2
type UserType = {
  user: string;
  comment: number[];
  admin: boolean;
};

function objfunc({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin);
}
objfunc({ user: "kim", comment: [3, 5, 4], admin: false });

// 숙제 3
type DataType = (number | string | boolean)[];

function Wine([a, b, c]: DataType): void {
  console.log(a, b, c);
}

Wine([40, "wine", false]);
