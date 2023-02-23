// class Person {
//   name: string;

//   constructor(x: string) {
//     this.name = x;
//   }

//   function(x: string) {
//     console.log("hi" + x);
//   }
// }

// let human1 = new Person("김");
// let human2 = new Person("이");

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  add(num: number) {
    console.log("1", this.age);
    this.age += num;
    console.log("2", this.age);
  }
}

let human1 = new Person("홍길동", 30);
let human2 = new Person("키키키", 10);
console.log(human1);
console.log(human2);

// 숙제

class Car {
  model: string;
  price: number;
  constructor(x: string, y: number) {
    this.model = x;
    this.price = y;
  }

  tax(): number {
    return this.price / 10;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

class Word {
  name;
  number;

  constructor(...data) {
    let names: string[] = [];
    let numbers: number[] = [];

    data.forEach((i) => {
      if (typeof i === "string") {
        names.push(i);
      } else {
        numbers.push(i);
      }
    });

    this.name = names;
    this.number = numbers;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.number);
console.log(obj.name);
