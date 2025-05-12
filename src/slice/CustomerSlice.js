import {createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    
    products:[]
}



export const addcustomerDetails = async(customerdata) =>{
    try {
        const response = axios.post("https://baava-backend-new-1.onrender.com/user/data",customerdata);
        console.log(customerdata);
        return response.data;
    } catch (error) {
        console.error('Error adding customer details:', error);
    }
}

const customer = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addProducts: (state, action) => {
        state.products.push(action.payload);
      },
  
      increaseQuantity: (state, action) => {
        const item = state.products[0]?.updatedata?.products?.find(
          (p) => p.title === action.payload
        );
        if (item) {
          item.quantity += 1;
          item.subtotal = item.quantity * item.price;
        }
  
        state.products[0].updatedata.totalAmount = state.products[0].updatedata.products.reduce(
          (acc, product) => acc + product.subtotal,
          0
        );
      },
  
      decreaseQuantity: (state, action) => {
        const item = state.products[0]?.updatedata?.products?.find(
          (p) => p.title === action.payload
        );
        if (item && item.quantity > 1) {
          item.quantity -= 1;
          item.subtotal = item.quantity * item.price;
        }
  
        state.products[0].updatedata.totalAmount = state.products[0].updatedata.products.reduce(
          (acc, product) => acc + product.subtotal,
          0
        );
      },
    },
  });
  
  export const { addProducts, increaseQuantity, decreaseQuantity } = customer.actions;
  export default customer.reducer;
  