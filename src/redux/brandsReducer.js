import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
loading:false,branding:[],Error:null,specificbrand:[],
}
export const getallbrands = createAsyncThunk(`brands/getallbrands`,async() => {
  let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
return data?.data
})
export const getspecifcbrand = createAsyncThunk(`brands/getspecifcbrand`,async(id) => {
  let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
return data.data
})



export const categoriesSlice = createSlice({
  name: 'brands',
  initialState,
  extraReducers:(builder) => {
    builder.addCase( getallbrands.fulfilled,(state ,action) => {
      state.branding=action.payload
      state.loading=false
    })
    builder.addCase( getallbrands.pending,(state ) => {
    state.loading=true
    })
    builder.addCase( getallbrands.rejected,(state ) => {
      state.loading=false
    
    })
    builder.addCase( getspecifcbrand.fulfilled,(state ,action) => {
      state.specificbrand = action.payload
      
    })

  }


  
})

  export default categoriesSlice.reducer
