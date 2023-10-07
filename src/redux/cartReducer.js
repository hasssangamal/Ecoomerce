import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
can:[]
}




export const arrSlice = createSlice({
  name: 'arr',
  initialState,
  reducers:{
    arradd: (state , action) => {
state.can.push(action.payload)
      
    },


  }


  
})
export const {arradd} = arrSlice.actions

  export default arrSlice.reducer
