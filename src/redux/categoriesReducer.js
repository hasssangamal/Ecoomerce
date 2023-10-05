import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
loading:false,categories:[],Error:null,textcat:[],
}
export const getallcat = createAsyncThunk(`categories/getallcat`,async() => {
  let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
return data.data
})
export const v = createAsyncThunk(`categories/v`,async(id) => {
  let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
return data?.data
})


export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers:(builder) => {
    builder.addCase( getallcat.fulfilled,(state ,action) => {
      state.categories =action.payload
      state.loading=false
    })
    builder.addCase( getallcat.pending,(state ) => {
    state.loading=true
    })
    builder.addCase( getallcat.rejected,(state ) => {
      state.loading=false
    console.log(Error);
    })
    builder.addCase( v.fulfilled,(state ,action) => {
      state.textcat =action.payload
    
    })
  }


  
})

  export default categoriesSlice.reducer
