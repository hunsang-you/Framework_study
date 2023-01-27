import './App.css';
import React, { useState } from 'react';
import { TextField, Divider, Button } from '@mui/material';

function App() {


  return (
    <div className="App">
      <div className='searchGroup'>
        <TextField 
          id="searchBar"
          placeholder="종목명을 입력하세요"
          variant="standard"
          >
        </TextField>
        
      </div>
      <div className='recentList'>
        최근 검색한 목록
      </div>
    </div>
  );
}

export default App;
