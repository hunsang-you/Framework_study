// interface는 object 타입 지정할 때 사용하는 것
// 다른 용도로는 class타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있다
// (implements 키워드도 필요함)
class Car1 {
    constructor(a) {
        this.price = 1000;
        this.model = a;
    }
}
let myCar = new Car1('morning');
class Car2 {
    constructor(a) {
        this.price = 1000;
        this.model = a;
    }
}
let myCar2 = new Car2('morning');
// class (클래스명) implements (interface명)
// ==> 이 class가 interface에 있는 속성을 다 들고 있는지에 대해 확인 가능
// 빠진게 있다면 에러
// class에 타입을 할당하고 변형시키는 것이 아닌, 확인만 하는 기능
class Car3 {
    tax(a) {
        return a * 0.1;
    }
}
// Car3의 경우, model이 string이 반영되는 것이 아닌, any 타입
// implement는 class의 타입을 체크하는 용도일 뿐, 할당하는게 아님을 꼭 명심
