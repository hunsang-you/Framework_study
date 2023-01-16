import { createSlice } from '@reduxjs/toolkit'
// state 보관하는법

let user = createSlice({
    name: 'user',
    initialState : { name : 'kim', age : 20 },

    // state 수정
    reducers : {
        changeName(state) {
            state.name = 'park'
        },
        increase(state, action) {
            state.age += action.payload
        }
    }
})

export let { changeName, increase } = user.actions

export default user