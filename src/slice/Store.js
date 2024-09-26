import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "./CustomerSlice";

const store = configureStore({
    reducer:{
        products:CustomerReducer
    }
})

export default store