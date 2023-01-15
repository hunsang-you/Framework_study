import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { changeName } from "./../store.js"


// tr : 행
// th, td : 열
function Cart() {
    
    // Redux store를 가져옴
    let state = useSelector((state) => { return state })
    // console.log(a)
    // console.log(a.stock)
    let dispatch = useDispatch()    // store.js로 요청을 보내주는 함수

    return (
    <div>

        {state.user}의 장바구니
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.cart.map((a, i)=>
                    <tr key={i}>
                        <td> 1 </td>
                        <td>{state.cart[i].id}</td>
                        <td>{state.cart[i].name}</td>
                        <td>{state.cart[i].count}</td>
                        <td>안녕</td>
                        <td>
                            <button onClick={()=> {
                                dispatch(changeName())
                            }}> + </button>
                        </td>
                    </tr>
                    )
                }

            </tbody>
        </Table>
    </div>
    )
}

export default Cart;