import { createSlice } from '@reduxjs/toolkit'

const initialState = {
count:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {}
  
})


export const { increment, decrement,incrementByAmount } = counterSlice.actions

export default counterSlice.reducer