import React, { useState } from "react";
import "./App.css";
// npx create-react-app 프로젝트명 --template typescript
// 기존 프레젝트에 타입스크립트를 추가한다면
// npm instsall --save typescript @types/node @types/react @types/react-dom @types/jest
// => .js파일을  .ts파일로 바꿔서 이용가능
function App() {
  // useState 타입지정
  // let [user, setUser] = useState(['kim']); // useState타입지정은 알아서 해줌
  // 하지만 string | number 타입을 넣고 싶다면?
  let [user, setUser] = useState<string | number>("kim");

  // 2. JSX를 표현하는 타입
  let box: JSX.Element = <div></div>;
  let button: JSX.Element = <button></button>;
  return (
    <div className="App">
      <h4> ㅎㅇ </h4>
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}

// 3.component 만들 때 타입지정
// 함수 타입지정은 파라미터 & return값
// 4.component props 타입지정
// 컴포넌트는 JSX를 return(생략해도 자동으로 타입지정)
function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name} 입니다</div>;
}

export default App;
