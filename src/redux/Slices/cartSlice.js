import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      return state.filter((post) => post.id !== action.payload)
    },
    removeall: (state, action) => {
      state.length = 0;
      return state;
    }
  },
})

export const { add, remove, removeall } = cartSlice.actions

export default cartSlice.reducer