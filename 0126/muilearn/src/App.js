import './App.css';
import React, { useState } from 'react';
import { TextField } from '@mui/material';


function App() {
  // ["중복된 닉네임입니다.", "글자수가 초과되었습니다.", "특수문자는 사용할 수 없습니다." ]
  // const name = ['kim', 'ssafy', '김싸피', '싸피']
  
  
  const [text, setText] = useState('');
  const [error, setError] = useState(["중복된 닉네임입니다.", "글자수가 초과되었습니다.", "특수문자는 사용할 수 없습니다.", '자음, 모음만 사용할 수 없습니다.', '공백은 사용할 수 없습니다.' ]);
  
  
  const changeText = (e) => {
    // console.log(e.target.value)
    setText(e.target.value);
  }

    
    const validation = () => {
      let check_alp = /^[a-zA-Z0-9]*$/;
      let check_spe = /[~!@#$%^&*()_+-/|<>?:{}.,/;='"\\\[\]`]/;
      let check_str = /([^가-힣\x20])/;
      // let space = /\s/i;
      // return check.test(text);
      if (check_alp.test(text) === false) {
        return ""
      } else if (check_spe.test(text) === true) {
        return error[2]
      } else if (check_str.test(text) === true) {
        return error[3]
      } 
    }

  return (
    <div className="App">
        <div className='nicknameInput'>
          <TextField
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            variant="standard"
            onChange={ changeText }
            value = { text }
            error = { validation() }
            helperText= {validation() ? validation():""}
            
            // label="Helper text"
            // helperText="Some important text"
            />
          <div>
            1
          </div>
        </div>

    </div>
  );
}


export default App;
