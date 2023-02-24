// never type
// function return 값에 붙일 수 있는 never type
// 조건1. return 값이 없어야함
// 조건2. 함수실행이 끝나지 않아햐함 == endpoint가 없어야함
function Never(): never {
  // 방법 1
  //   throw new Error(); // 강제로 에러를 발생 -> 코드실행중단
  // 방법2
  while (true) {
    console.log("내부함수 무한반복");
  }
}

// never 타입 활용 -> 대부분은 :void를 써서 쓸모가 없다
// never 타입은 코드를 이상하게 짜면 출몰

// else에 다른 타입이 들어갈 수 없기 때문에 param에 never타입을 자동으로 부여
function err(param: string) {
  if (typeof param == "string") {
    console.log(param); // type -> string
  } else {
    console.log(param); // type -> never
  }
}

// never 타입이 등장하는 경우2
// 어떤 함수 표현식은 return타입이 자동으로 never
// 함수 자체가 never
let err2 = function () {
  throw new Error();
};

// 요약 - 굳이 쓸 일은 없고 등장했을 때 이해만 하면 된다
