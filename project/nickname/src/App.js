import './App.css';
import React, { useState } from 'react';
import { TextField, Divider, Button } from '@mui/material';


function App() {
  
  const [text, setText] = useState('');
  // const [error, setError] = useState(false);
 
  
  const changeText = (e) => {
    // console.log(e.target.value)
    setText(e.target.value);
  };

  // 닉네임 가능여부 확인
  const validation = () => {
    let check_spe = /[~!@\#$%^&*\()\-=+_'\;<>\/.\`:\"\\,\[\]?|{}]/gi;      // 특수문자 제거
    let check_str = /[ㄱ-ㅎㅏ-ㅣ]/gi;                                         // 자음, 모음 제거
    let space = /\s/g;                                                      // 공백 제거
    let check_name = ['kim', 'ssafy', '김싸피', '싸피']

    if (check_spe.test(text) === true) {
      return '특수문자는 사용할 수 없습니다.'
    }
      else if (check_str.test(text) === true) {
      return '자음 혹은 모음만 사용할 수 없습니다'
    } else if (space.test(text) === true) {
      return '공백은 사용할 수 없습니다.'
    } else if (text.length > 10) {
      return '글자수가 초과되었습니다.'
    } 
    // else if (check_name.includes(text) === true) {
    //   return '중복된 닉네임이 존재합니다.'
    // }
  }
  
  // 닉네임 오류시 색 변경
  const changeRed = () => {
    if (text.length > 10) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="App">
      <div className='container-center-horizontal'>
        <div className='namePage screen'>
          <div className='view'>

            <div className='text-1 valign-text-middle'>
              닉네임 설정
            </div>

            <div className='nameInput'>
              <TextField
                id="nickname"
                placeholder="닉네임을 입력해주세요."
                variant="standard"
                onChange={ changeText }
                value = { text }
                error = { validation() }
                helperText = { validation() ? validation() : "" }
                inputProps = {{ maxLength: 15 }}
                />
                
              <div className={ changeRed() ? 'lenError' : 'nameLength '} >
                {text.length}/10
              </div>
              
            </div>
          </div>

          <div className='createBtn'>
            <Button id='createBtn' variant='outlined' size='large' >
                미리하기
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}


export default App;

// className=`{기존클래스 ${addClass === true ? "클래스" : "클래스"} }`