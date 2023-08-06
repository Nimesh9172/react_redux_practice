import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {showCart:false,notification:null}

const cartSlice =  createSlice({
  name:'cart',
  initialState:cartInitialState,
  reducers:{
    toggle(state){
      state.showCart = !state.showCart
    },
    showNotification(state,action){
      state.notification = {
        status:action.payload.status,
        title:action.payload.title,
        message:action.payload.message,
      }
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice