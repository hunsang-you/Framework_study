// Literal Type 만드는법
let john: "대머리";
let kim: "솔로";

let direction: "left" | "right";
direction = "left";

function func4(a: "hello"): 1 | 0 | -1 {
  return 1;
}

function 가위바위보(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "바위"];
}

let data = {
  name: "kim",
} as const;

function func(a: "kim") {}
func(data.name);

// as const의 효과
// 1. 타입을 object의 value로 바꿔줌(타입을 'kim'으로 바꿔줌)
// 2. object안에 있는 모든 속성을 readonly로 바꿔줌
