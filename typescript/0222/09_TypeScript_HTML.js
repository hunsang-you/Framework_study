let title = document.querySelector("#title");
// HTML 조작시 narrowing 하는 방법 5가지
// if (title != null) {
//   title.innerHTML = "반가워요";
// }
// 가장 많이 쓰게 될것
// 2. instanceof 연산자
if (title instanceof Element) {
    title.innerHTML = "반가워요";
}
// 3. assertion 키워드
let title2 = document.querySelector("#title");
title2.innerHTML = "반갑3";
// 4. 오브젝트에 붙이는 ?
// 제목에 innerHTMl이 있으면 출력해주고
// 없으면 undefined 출력(optional chaining)
let title3 = document.querySelector("#title");
if ((title3 === null || title3 === void 0 ? void 0 : title3.innerHTML) != undefined) {
    title3.innerHTML = "반갑4";
}
// 5. tsconfig.json의 strictNullChecks를 false로 바꿈
// ---------------------------
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
//HTMLAnchorElement 타입 - href, style, class ....
//HTMLButtonElement -  button...
//HTMLHeadingElement - h1, h2...
let 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () {
    console.log("안녕");
});
// 숙제
// 버튼을 누르면 이미지를 변경
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
let 네이버 = document.querySelector(".naver");
if (네이버 instanceof HTMLAnchorElement) {
    네이버.href = "https://kakao.com";
}
