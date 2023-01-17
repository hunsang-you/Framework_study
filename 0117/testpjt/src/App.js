import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';


function App() {

  let title = ['이름', '전공'];
  // let name = ['박세영', '서효림'];
  // let major = ['산업공학', '컴퓨터공학'];

  const columns = [
    { field : 'id', headerName : '사번', width : 90 },
    { field : 'name', headerName : '이름', width : 190 },
    { field : 'teamNo', headerName : '팀', width : 90 },
  ];

  const rows = [
    { id : 1, name : '박세영', teamNo : 'A301' },
    { id : 2, name : '김재영', teamNo : 'A302' },
    { id : 3, name : '이제영', teamNo : 'A303' },
    { id : 4, name : '강세영', teamNo : 'A304' },
    { id : 5, name : '최제영', teamNo : 'A305' },
  ];


  return (
    <div className="App">
      <div style={{ height:500, width: '100%' }}>
        <DataGrid rows={rows} column={columns} rowsPerPageOptions={[13, 26, 100]}/>

      </div>
    </div>
  );
}

function TrComp(props) {
  return (
    <tr>
      <th scope="row"> { props.name }</th>
      <td> { props.major }</td>
    </tr>
  )
}

export default App;
