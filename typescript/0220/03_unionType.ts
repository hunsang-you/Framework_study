// Union Type - 타입 2개 이상 합친 새로운 타입 만들기
let member: number | string = "kim";

let members: (number | string)[] = [1, "2", 3];

let object: { a: string | number } = { a: "123" };

// any : 모든 자료형을 허용해줌 -> unknown을 쓰는게 더 안전
let name3: any;

let 변수1: unknown = object;

// 숙제
let user: string = "kim";
let age1: undefined = undefined;
let married1: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age1, married1];

let school: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

school.score[4] = false;
school.friend = ["Lee", school.teacher];
