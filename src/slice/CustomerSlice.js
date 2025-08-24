import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart"))?.products || [],
};

const saveToLocalStorage = (state) => {
  const totalAmount = state.products.reduce((sum, item) => sum + item.subtotal, 0);
  localStorage.setItem("cart", JSON.stringify({
    products: state.products,
    totalAmount,
  }));
};

const customerSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.products.find((p) => p.title === item.title);

      if (existing) {
        existing.quantity += 1;
        existing.subtotal = existing.price * existing.quantity;
      } else {
        state.products.push({
          ...item,
          quantity: 1,
          subtotal: item.price,
        });
      }
      saveToLocalStorage(state);
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((p) => p.title === action.payload);
      if (item) {
        item.quantity += 1;
        item.subtotal = item.price * item.quantity;
      }
      saveToLocalStorage(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((p) => p.title === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.subtotal = item.price * item.quantity;
      }
      saveToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((p) => p.title !== action.payload);
      saveToLocalStorage(state);
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  customerSlice.actions;

export default customerSlice.reducer;
