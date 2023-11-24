import { createSlice} from "@reduxjs/toolkit";

const initialState = [
];

const addFilmsSlice = createSlice({
  name:'adder',
  initialState,
  reducers:{
    addFilm:(state, action)=>{
      state.push(action.payload)
    },
  }
})
export const {addFilm} = addFilmsSlice.actions;
export default addFilmsSlice.reducer;