// 객체지향언어 같은 문법도 제공
// public, private, protected, static 키워드

// 1. class의 public 키워드 - public이 붙으면 모든 자식들이 이용가능
// public은 원래 생략되어있다고 생각
class PublicUser {
  public name = "kim";
  constructor(a: string) {
    this.name = a;
  }
}

let user1 = new PublicUser("park");
user1.name = "ㅋㅋ";

// 2. private - private가 붙으면 class 안에서만 수정, 이용가능
class PrivateUser {
  private name = "kim";
  constructor(a: string) {
    this.name = a;
  }
}

let user2 = new PrivateUser("park");

// private 키워드 사용예시
// private은 class {} 안에서만 수정, 사용가능 (수정불가가 아니다)
class PrivateEx {
  name: string;
  private familyName: string = "kim";
  constructor(a: string) {
    this.name = this.familyName + a;
  }
  // 자식들이 familyName을 바꾸고 싶으면?
  // 1. class 안에 familyName 변경 함수 생성
  // 2. 자식들이 사용
  changeName() {
    this.familyName = "park";
  }
}
let user3 = new PrivateEx("민수");
user3.changeName();
console.log(user3);

// public 키워드 쓰면 this. 생략가능

class Person {
  constructor(public name: string) {
    // public name -> 이 자리에 들어온 파라미터는 자식의 name 속성에 기입해주세요
  }
}

let 자식 = new Person("kim");
console.log(자식);
