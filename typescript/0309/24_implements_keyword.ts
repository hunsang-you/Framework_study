// interface는 object 타입 지정할 때 사용하는 것
// 다른 용도로는 class타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있다
// (implements 키워드도 필요함)


class Car1 {
    model : string;
    price : number = 1000;
    constructor(a :string) {
        this.model = a
    }
}

let myCar = new Car1('morning');
// Car1이라는 class를 사용한 object들은 model과 price 속성을 가지게 됨
// class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면?
// interface + implements 키워드로 확인

interface CarType {
    model : string,
    price : number
}

class Car2 implements CarType {
    model : string;
    price : number = 1000;
    constructor(a :string) {
        this.model = a
    }
}

let myCar2 = new Car2('morning');

// class (클래스명) implements (interface명)
// ==> 이 class가 interface에 있는 속성을 다 들고 있는지에 대해 확인 가능
// 빠진게 있다면 에러
// class에 타입을 할당하고 변형시키는 것이 아닌, 확인만 하는 기능

class Car3 implements CarType {
    model;  // => any 타입
    tax (a) {   // a 파라미터 == any
        return a * 0.1
    }
}

// Car3의 경우, model이 string이 반영되는 것이 아닌, any 타입
// implement는 class의 타입을 체크하는 용도일 뿐, 할당하는게 아님을 꼭 명심
