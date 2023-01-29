import React from "react";
import styled from 'styled-components';

const KakaoAuthHandler = (props) => {
    

    // 발급된 인가코드를 백엔드로 넘겨주기 위해 꺼내오는 작업이 필요
    // code라는 이름으로 파라미터 코드값을 꺼내오려면 아래처럼 선언
    let code = new URL(window.location.href).searchParams.get("code");

    
}