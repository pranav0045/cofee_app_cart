
import { configureStore } from "@reduxjs/toolkit";
import { cofeeReducer } from "./reducers";
 

const store = configureStore({
  
    reducer:{
        cart:cofeeReducer,
    },

});

export default store;