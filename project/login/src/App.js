import './App.css';
import miriLogo from './logo1.png'
import axios from 'axios'
import React from 'react'
import KakaoLogin from './login/kakaologin'
import NaverLogin from './login/naverlogin';

function App() {
  return (
    <div className="App">
      <div className='loginPage'>

        <div className="App-logo">
          <img src={ miriLogo }></img>
        </div>
        
        <div className='loginbtn'>

          <div>
            { KakaoLogin() }
          </div>
          {/* <div>
            { NaverLogin()}
          </div> */}

        </div>

      </div>
    </div>
  );
}

export default App;
