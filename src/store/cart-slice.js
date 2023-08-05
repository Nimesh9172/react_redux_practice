import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {showCart:false}

const cartSlice =  createSlice({
  name:'cart',
  initialState:cartInitialState,
  reducers:{
    toggle(state){
      state.showCart = !state.showCart
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice