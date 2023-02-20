// Union Type - 타입 2개 이상 합친 새로운 타입 만들기
let member = "kim";
let members = [1, "2", 3];
let object = { a: "123" };
// any : 모든 자료형을 허용해줌 -> unknown을 쓰는게 더 안전
let name3;
let 변수1 = object;
// 숙제
let user = "kim";
let age1 = undefined;
let married1 = false;
let 철수 = [user, age1, married1];
let school = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
