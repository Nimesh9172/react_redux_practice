import { createSlice } from "@reduxjs/toolkit";

const intialCartState = {cartItem:[]}

const cartItemSlice = createSlice({
  name:'cartItem',
  initialState:intialCartState,
  reducers:{
    addItem(){

    },
    removeItem(){

    }
  }
})
