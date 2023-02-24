// type Square = { color: string; width: number };
// object 타입지정시 interface 사용 가능
// class 만드는 법과 유사
interface Square {
  color: string;
  width: number;
}

let square: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}

interface Teacher {
  name: string;
  age: number;
}

// interface 장점 : extends로 복사 가능
type Animal = { name: string };
// type Cat = { name: number } & Animal;    & 쓸 때 중복속성 발생하면? -> 미리 에러가 안나서 주의해야함
type Cat = { age: number } & Animal;
// &는 합치는게 아니라 왼쪽 오른쪽 둘 다 만족하는 타입이다
let cat: Cat = { name: "kim", age: 20 };
// & : intersection type(교차타입), 왼쪽, 오른쪽 둘다 만족해야 하는 타입
// type vs interface
// interface는 중복 선언이 가능하다, type은 중복선언 불가능
// 외부 라이브러리같은 경우 interface를 많이 씀
interface Student {
  // 중복선언
  score: number;
}

interface Teacher extends Student {
  age: number;
}

// let student: Student = { name: "kim" };
// let teacher: Teacher = { name: "kim", age: 20 };

// 숙제1

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let product: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// 숙제2
interface Cart {
  product: string;
  price: number;
}

let cart: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// 숙제3
interface New extends Cart {
  card: boolean;
}

// 숙제4
interface Func {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}

let obj: Func = {
  plus(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
};
