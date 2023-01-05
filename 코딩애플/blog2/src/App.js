// /* eslint-disable */
// 경고 무시

// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  // 자주 변경될것 같은 html 부분은 state로 만들어놓기
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');  

  return (
    <div className="App">
      <div className="black-nav">
        <h4> ReactBlog </h4>
      </div>

      <button onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
      }}> 글수정 </button>

      <button onClick={() => {
        let copy = [...글제목]
        copy.sort()
        글제목변경(copy)
      }}> 정렬 </button>

      {/* <div className="list">
        <h4> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) } }> 👍 </span> { 따봉 } </h4>
        <p> 2월 17일 발행  </p>  
        
      </div>  
      <div className="list">
        <h4 onClick={() => { setModal(!modal)}}> { 글제목[1] } </h4>
        <p> 2월 17일 발행 </p>  
      </div>  
      <div className="list">
        <h4> { 글제목[2] } </h4>
        <p> 2월 17일 발행 </p>  
      </div>   */}


      {
        글제목.map(function(a, i) {
          return (
            <div className="list" key={i}>
            <h4 onClick={() => {setModal(!modal); setTitle(i)}}> { 글제목[i] } 
              <span onClick={ (e) => {따봉변경(따봉+1) } }> 👍 </span> { 따봉 } </h4>
            <p> 2월 17일 발행 </p>
            <button onClick={() => {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy)
            }}> 삭제 </button>
          </div>  
          )
        })
      }

      <input onChange={ (e)=> { 
        입력값변경(e.target.value); 
        console.log(입력값) }}/>
      
      <button onClick={ (e)=> {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
        
      }}> 글 발행 </button>

      {
        modal == true ? <Modal 글제목={글제목} title={title}/> : null
      }
      <Modal2> </Modal2>
    </div>
  );
}
function Modal(props) {
  
  return (
    <div className="modal">
      <h4> { props.글제목[props.title] } </h4>
      <p> 날짜 </p>
      <p> 상세내용 </p>
      <button onClick={() => { props.글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']) }}> 글 수정 </button>
    </div>
  )
}

class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'kim',
      age : 20
    }
  }
  render() {
    return (
      <div> {this.state.age}
        <button onClick={() => {
          this.setState({age:21})
        }}> 버튼 </button>
      </div>
    )
  }
}

export default App;
