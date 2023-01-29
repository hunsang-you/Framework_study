import React from 'react';
import axios from 'axios';
import kakaobtn from '../asset/kakaobtn.png'
import '../App.css';

const KakaoLogin = () => {
    // 카카오 로그인 함수를 실행시키면 아래에 설정해 놓은 KAKAO_AUTH_URL 주소로 이동한다
    // 이동 된 창에서 kakao 계정 로그인을 시도할 수 있으며 로그인 버튼 클릭 시 Redirect URI로 이동하면서
    // 빈 화면과 함게 인가코드가 발급된다.(인가코드는 파라미터 값에 들어가 있다!)
    const REST_API_KEY = 'f27e1e6db6f64ba333644ab52453396d';
    const REDIRECT_URI = 'http://localhost:3000/oauth';
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;



    const kakaoLogin = () => {
      window.location.href = KAKAO_AUTH_URL;
    }
    return (

            <img src={ kakaobtn } onClick={ kakaoLogin } alt="kakao_login" className='loginbtn_1'></img>
            // <button onClick={ kakaoLogin }> 카카오 로그인 </button>
  
    )
  };



export default KakaoLogin;