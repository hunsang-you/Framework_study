// narrowing 시 typeof로 할 수 없는 상황에서 이용할 것들
// typeof 연산자는 number string boolean object 이런 식으로만 판정가능
// 2. in 키워드로 object narrowing 가능 ( 속성명 in 오브젝트자료)
function animal(animal) {
    // if (typeof animal === ) {
    if ("swim" in animal) {
        // => Fish 타입인지 검사
        animal.swim;
    }
}
// object 타입이 둘다 비슷한데 어떻게 narrowing을 하는가?
// 속성명 in 오브젝트자료(불가능), 오브젝트 instanceof 부모class(불가능)
// 4. object 타입마다 literal type만들어두면 narrowing 편리해짐
function Ride(x) {
    if (x.wheel === "4개") {
        console.log("이 차는 " + x.color);
    }
    else {
        console.log("이 바이크는 " + x.color);
    }
}
Ride({ wheel: "2개", color: "red" });
// 요약 : 논리적으로 이 타입인지 특정지을 수 있으면 narrowing으로 인정해줌
