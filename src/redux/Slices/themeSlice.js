import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 0,
  reducers: {
    //theme by default is dark i.e 0 means dark 1 is light
    toggle: (state) => { return !state}
  },
})

//functions
export const { toggle } = themeSlice.actions

//function themeslice as a whole
export default themeSlice.reducer