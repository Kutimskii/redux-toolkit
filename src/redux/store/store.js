import { configureStore} from '@reduxjs/toolkit';
import adderReducer from './slicers/adder';
import {apiSlice} from './slicers/fetchData'

const store = configureStore({
   reducer:{
    adder:adderReducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
   },
   middleware:(getDefaultMiddleware)=> {
    return getDefaultMiddleware().concat(apiSlice.middleware)
   }
  });
export default store;
