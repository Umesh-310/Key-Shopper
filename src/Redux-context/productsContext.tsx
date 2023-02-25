import { createSlice } from "@reduxjs/toolkit";


const ProductsContext = createSlice({
  name: "ProductsContext",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});
export const ProductsContextAction = ProductsContext.actions;
export default ProductsContext.reducer;
//next-dev.js?3515:20
