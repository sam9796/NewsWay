import {configureStore,createSlice} from '@reduxjs/toolkit'
const counterSlice=createSlice({
    name:'counter',
    initialState:{counter:0,
    col:'red'},
    reducers:{
        increment(state,action){
            state.counter+=1;
        },
        decrement(state,action){
             state.counter=state.counter-1;
        },
         addBy(state,action){
            state.counter+=action.payload;
         },
         change(state,action){
            if(state.col==='black')state.col='red'
            else state.col='black'
         }
    },
})
export const actions=counterSlice.actions
const store=configureStore({
reducer:counterSlice.reducer})
export default store