// Literal Type 만드는법
let john;
let kim;
let direction;
direction = "left";
function func4(a) {
    return 1;
}
function 가위바위보(x) {
    return ["가위", "바위"];
}
let data = {
    name: "kim",
};
function func(a) { }
func(data.name);
// as const의 효과
// 1. 타입을 object의 value로 바꿔줌(타입을 'kim'으로 바꿔줌)
// 2. object안에 있는 모든 속성을 readonly로 바꿔줌
