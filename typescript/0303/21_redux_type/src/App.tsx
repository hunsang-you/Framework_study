import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "./index";

// redux 사용 이유
// 1. state를 한 곳에서 관리할 수 있어서 props없이 state를 다루기 쉬움
// 2. 수정방법을 미리 reducer라는 함수로 정의해놔서 state 수정시 바랭하는 버그를 줄일 수 있음
// npm install redux react-redux

// useSelector를 이용하여 state를 빼옴
// useDispatch를 이용하여 redux로 수정요청, 기입한 type 대로 미리 index.tsx에 정의해둔 수정 동작
function App() {
  // useSelector의 타입 지정은 파라미터에 바로 state:RootState 이런식
  // state의 타입을 파악하고 손수 지정해주거나, index.ts에서 타입을 export 하는식
  // index.ts의 export type RootState코드가 store의 타입을 미리 export 해두는 방법
  const data = useSelector((state: RootState) => state);

  // import {Dispatch} from 'redux' 로 타입을 가져와서 :Dispatch로 타입 정의
  // 이러면 dispatch를 보낼때 안에 파라미터를 쓰지 않으면 에러를 냄
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h4> {data.count}</h4>
        <button
          onClick={() => {
            dispatch({ type: "증가" });
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            dispatch({ type: "감소" });
          }}
        >
          감소
        </button>
        <button
          onClick={() => {
            dispatch({ type: "" });
          }}
        >
          초기화
        </button>
        <hr />
        <div>
          <Profile name={"Hong"} age={data.count} />
        </div>
      </div>
    </div>
  );
}

function Profile(props: { name: string; age: number }): JSX.Element {
  return (
    <div>
      <p>이름 {props.name}</p>
      <p>나이 {props.age}</p>
    </div>
  );
}

export default App;
