// type aliases (타입 정의가 너무 길면 Thpe Aliases 별칭)

// let animal : string|number|undefined;
type Animal = string | number | undefined;
let 동물: Animal;

type Person = { name: string; age: number };

let teacher: Person = { name: "john", age: 20 };

// readonly로 잠그기
// object자료를 const에 집어넣어도 object 내부는 마음대로 변경 가능
// const 변수는 재할당만 막아줄 뿐이지 그 안에 있넌 object 속성 바꾸는 것 까지 관여하지 않음

// readonly 키워드는 속성 왼쪽에 붙일 수 있으며 특정 속성을 변경불가능하게 잠궈줌

type Girlfriend = {
  readonly name: string;
};

let 여친: Girlfriend = {
  name: "엠버",
};

// 여친.name = "유라"; // readonly라서 에러남

// 속성 몇개가 선택사항이라면
type Square = {
  color?: string;
  width: number;
};

let 네모2: Square = {
  width: 100,
};

// type 키워드 여러개를 합칠 수 있다
type Name = string;
type Age = number;
type NewOne = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY;
let 좌표: XandY = { x: 1, y: 2 };

// type 키워드는 재정의가 불가능하다
type Name1 = string;
// type Name1 = number;

// 숙제

type work = { color?: string; size: number; readonly position: number[] };

type User = { name: string; phone: number; email?: string };
let info: User = {
  name: "kim",
  phone: 123,
  //   email: "abc@naver.com",
};

type User2 = { name: string; phone: number; email?: string };
type Adult = { adult: boolean };

type NewUser = User2 & Adult;

let Info: NewUser = {
  name: "kim",
  phone: 123,
  adult: false,
};
