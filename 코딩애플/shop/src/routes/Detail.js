import {useParams} from "react-router-dom";
import styled from 'styled-components';
import { useContext, useEffect } from "react";
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

import {Context1} from './../App.js';
import { addItem } from "../store.js";
import { useDispatch } from "react-redux";

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`

let Box = styled.div`
    background : grey;
    padding : 20px;
`

// let NewBtn = styled.button(YellowBtn)`
    
// `


function Detail(props) {
    
    let {재고} = useContext(Context1)
    
    let {id} = useParams();
    let 찾은상품 = props.shoes.find(x => x.id == id);
    let [count, setCount] = useState(0)
    let [alert, setalert] = useState(true)
    let [탭, 탭변경] = useState(0)
    let dispatch = useDispatch()

    useEffect(()=> {
        let a = setTimeout(()=> { setalert(false) }, 2000)
        console.log(1)
        return () => {
            console.log(2)
            clearTimeout(a) // 기존 데이터 요청을 제거(cleanup function)
        }
    }, [])

    return (
        <div className="container">
            {
                alert == true ?
                <div className="alert alert-warning"> 2초 이내 구매시 할인</div>
                : null
            }


            {재고}
            {/* {count}
            <button onClick={()=> setCount(count+1)}> 버튼 </button>
            <Box>
                <YellowBtn bg='blue'> 버튼 </YellowBtn>
            </Box> */}
            <div className="row mb-5">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5"> {props.shoes[id].title} </h4>
                    <p> {props.shoes[id].content} </p>
                    <p> {props.shoes[id].price}원 </p>
                    <button className="btn btn-danger" onClick={()=> {
                        dispatch(addItem( { id : 1, name : 'Red Knit', count : 1 } ))
                    }}> 주문하기 </button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=> { 탭변경(0)}} eventKey="link0"> 버튼0 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=> { 탭변경(1)}} eventKey="link1"> 버튼1 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=> {탭변경(2)}}eventKey="link2"> 버튼2 </Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent shoes={props.shoes} 탭={탭}/>

        </div>
    )
}

function TabContent({탭, shoes}) {
    
    let [fade, setFade] = useState('')
    let {재고} = useContext(Context1)

    useEffect(() => {
        let a = setTimeout(()=>{setFade('end')}, 10)
        // setFade('end')
        return () => {
            clearTimeout(a)
            setFade('')
        }
    }, [탭]) // 탭이 변경될때 마다 안에 있는 코드를 실행시킴


    return (<div className={`start ${fade}`}>
        { [<div> {재고} </div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>)

    // if (탭 == 0) {
    //     return <div> 내용0 </div>
    // }
    // if (탭 == 1) {
    //     return <div> 내용1 </div>
    // }
    // if (탭 == 2) {
    //     return <div> 내용2 </div>
    // }
    
}


export default Detail;