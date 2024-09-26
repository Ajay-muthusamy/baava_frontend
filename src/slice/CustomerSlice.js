import {createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    
    products:[]
}

export const addcustomerDetails = async(customerdata) =>{
    try {
        const response = axios.post('http://localhost:1234/user/data',customerdata);
        console.log(customerdata);
        return response.data;
    } catch (error) {
        console.error('Error adding customer details:', error);
    }
}

const customer = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProducts:(state,action) =>{
            console.log("addProducts Reducer triggerd");
            state.products.push(action.payload);
            console.log("Current Producuts in the slice",state.products);
        }
    }
})


export const{addProducts,cutomerdetails}=customer.actions;
export default customer.reducer;