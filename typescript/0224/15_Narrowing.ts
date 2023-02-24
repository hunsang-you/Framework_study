// narrowing 시 typeof로 할 수 없는 상황에서 이용할 것들

// && -> 조건식 2개가 참이면 전부 참으로 판정하라는 논리연산자
// case1 : a가 undefined일 경우 -> 조건문 전체가 undefined가 되어 if문이 실행이 안됨
// case2 : a가 string일 경우 -> 우측에 있는 조건식(true)이 실행
// function func(a :string | undefined) {
//     if (a && typeof a === 'string') {

//     }
// }

// 서로 가진 속성명이 다르면 in을써보면 편하다
type Fish = { swim: string };
type Bird = { fly: string };

// typeof 연산자는 number string boolean object 이런 식으로만 판정가능
// 2. in 키워드로 object narrowing 가능 ( 속성명 in 오브젝트자료)
function animal(animal: Fish | Bird) {
  // if (typeof animal === ) {
  if ("swim" in animal) {
    // => Fish 타입인지 검사
    animal.swim;
  }
}

// 3. instanceof 연산자로 object narrowing 가능
// 오브젝트 instanceof 부모class => 오브젝트의 부모가 누구인지 검사
// ojbect 두개가 비슷하면 부모 class가 누군지 물어봐서 narrowing 가능
// let date = new Date()
// if (date instanceof Date) {
//     ...
// }

type Car = {
  // 비슷한 object 타입일 경우 literal type을 강제로 만들어두면 나중에 도움됨
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};
// object 타입이 둘다 비슷한데 어떻게 narrowing을 하는가?
// 속성명 in 오브젝트자료(불가능), 오브젝트 instanceof 부모class(불가능)

// 4. object 타입마다 literal type만들어두면 narrowing 편리해짐
function Ride(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("이 차는 " + x.color);
  } else {
    console.log("이 바이크는 " + x.color);
  }
}
Ride({ wheel: "2개", color: "red" });
// 요약 : 논리적으로 이 타입인지 특정지을 수 있으면 narrowing으로 인정해줌
