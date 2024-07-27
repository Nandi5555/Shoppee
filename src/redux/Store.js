import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import themeSlice from "./Slices/themeSlice";

export const store = configureStore({
    reducer:{
        cart: cartSlice,
        theme: themeSlice
    }
})