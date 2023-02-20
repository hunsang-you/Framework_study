import './App.css';
import miriLogo from './logo1.png'
import axios from 'axios'
import React from 'react'
import KakaoLogin from './login/kakaologin'
import NaverLogin from './login/naverlogin';
import Naverbtn from './asset/naverbtn.png'

function App() {
  return (
    <div className="App">
      <div className='loginPage'>

        <div className="App-logo">
          <img src={ miriLogo } className="miriLogo"></img>
        </div>
        
        <div className='loginbtn'>

          <div>
            { KakaoLogin() }
          </div>
          {/* <div>
            { NaverLogin()}
          </div> */}
          <div id="naverIdLogin" >
              <img src={ Naverbtn } onClick={ NaverLogin } alt="naver_login" className='loginbtn_2'></img>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
