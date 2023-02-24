import { createSlice } from "@reduxjs/toolkit";

const cartContext = createSlice({
  name: "cartContext",
  initialState: {
    cartOpen: false,
    cartItem: [],
  },
  reducers: {
    openCart(state) {
      state.cartOpen = !state.cartOpen;
    },
    addOrder(state, action) {
      const { id } = action.payload;

      const existingItem = state.cartItem.find((item) => item.id === id);

      if (!existingItem) {
        state.cartItem.push({ ...action.payload, count: 1 });
      } else {
        existingItem.count++;
      }
    },
    incrementOrder(state, action) {
      const id = action.payload;

      const existingItem: any = state.cartItem.find((item) => item.id === id);
      existingItem!.count++;
    },
    decrementOrder(state, action) {
      const id = action.payload;
      let index : number;
      
      const existingItem: any = state.cartItem.find((item, i) => {
        index = i;
        return item.id === id;
      });
      if (existingItem.count === 1) {
        state.cartItem = state.cartItem.splice(index, 1);
      } else {
        existingItem.count--;
      }
    },
  },
});
export const cartContextAction = cartContext.actions;
export default cartContext.reducer;
