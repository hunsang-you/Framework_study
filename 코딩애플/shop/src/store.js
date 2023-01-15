import { configureStore, createSlice } from '@reduxjs/toolkit';

// state 보관하는법

let user = createSlice({
    name: 'user',
    initialState : 'kim',

    // state 수정
    reducers : {
        changeName(state) {
            return 'john' + state
        },
    }
})

// state 변경함수 남음
export let { changeName } = user.actions

let stock = createSlice({
    name: 'stock',
    initialState : [10, 11, 12],
})

let cart = createSlice({
    name: 'cart',
    initialState : [
        {id : 0, name : "White and Black", count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ]
})

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer,
    }
})