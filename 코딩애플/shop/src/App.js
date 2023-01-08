import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import data from './data.js';
import Detail from './routes/Detail.js';

function App() {
  
  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"> 홈 </Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/') }}> Home </Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}> 상세페이지 </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      


      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}></div>
          <div className='container'>  
            <div className='row'>
              { shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i}></Card>
                })}
            </div>
          </div>
          </>
        } />
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/>} />

        <Route path="/about" element={<About/>} >
          <Route path="member" element={<div> 멤버 정보</div>} />
          <Route path="location" element={<div> 위치 정보 </div>} />
        </Route>
        {/* <Route path="/about/member" element={<About/>} />
        <Route path="/about/location" element={<About/>} /> */}
      </Routes>

      </div>
  );
}
function About() {
  return (
    <div>
      <h4> 회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Card(props) {
  return (
    <div className='col-md-4'> 
    <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%"/>
    <h5> {props.shoes.title} </h5>
    <p> {props.shoes.price}원 </p>
  </div>
  )
}

export default App;
