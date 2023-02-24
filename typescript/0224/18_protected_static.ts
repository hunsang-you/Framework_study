// class 복사 => class newClass extends 기존Class
class ProtectedUser {
  private x = 10; // private 붙이면 class {} 안에서만 사용가능
  protected y = 20; // protected 붙이면 class {} 안에서 + extends 된 class {} 안에서 사용 가능
}

class NewUser extends ProtectedUser {
  doThis() {
    this.y = 20;
  }
}

// static
class StaticUser {
  // static 키워드를 붙이면 부모 class에 직접 부여됨( + 자식에게 안물려줌)
  static x = 10;
  y = 20; // 자식만 사용가능
  private static z = 30; // private / protected / public + static 가능
}

let val = new StaticUser();
console.log(StaticUser.x);

class Class {
  static skill = "js";
  //   intro = this.skill + "전문가입니다"; static은 this로 사용할 수 없고 class만 사용가능하다
  intro = Class.skill + "전문가입니다";
}

let person1 = new Class();
console.log(person1);

Class.skill = "ts"; // 여기서부터 skill은 ts가 되버림

let person2 = new Class();
console.log(person2);

// 숙제1
class Homework {
  private static x = 10; // class {} 안에서만 사용 가능 + 부모class에 직접 부여됨(자식상속x)?
  // class 내부에서만 수정가능

  public static y = 20; // 모든자식들이 사용 가능 + 정적?
  // class 내부 외부 상관없이 수정가능

  protected z = 30; // class {}안에서만 사용 가능 + extends 된 class{}안에서 사용가능?
  // private와 유사하게 class 내부에서만 사용 가능 + extends로 복사한 class 내부에서도 사용
}

// 숙제2
class Homework2 {
  private static x = 10;
  public static y = 20;
  static addOne(num: number) {
    Homework2.x += num;
  }
  static printX() {
    console.log(Homework2.x);
  }
}

Homework2.addOne(3);
Homework2.addOne(4);
Homework2.printX();

// 숙제3
class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}
  draw() {
    let temp = Math.random();
    let square = `<div
        style="position:relative;
        top:${temp * 400}px;
        left:${temp * 400}px;
        width:${this.width}px;
        height:${this.height}px;
        background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let drawbox = new Square(30, 30, "red");
drawbox.draw();
drawbox.draw();
drawbox.draw();
drawbox.draw();
drawbox.draw();
drawbox.draw();
