import { createSlice } from "@reduxjs/toolkit";
//import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const apiCall = action.payload.apiCall;
     // const currentUser = store.getState().user.currentUser._id;
     const pd = [{
               productId: action.payload._id,
               price: action.payload.price,
               quantity: action.payload.quantity,
             }];
      state.quantity +=1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;

      if (apiCall) {
        // Call the API to update the cart on the server
       userRequest
          .post("carts/add", {
            userId: action.payload.currentUser._id,
            products:pd,
          })
          .then((response) => {
            // Handle the API response here if needed
            console.log(response.data);
          })
          .catch((error) => {
            // Handle any errors here
            console.error(error);
          });
      }
    },
     removeProduct: (state, action) => {
          const productId = action.payload;
          console.log(productId);
          const productIndex = state.products.findIndex(
            (product) => product._id === productId
          );
          console.log(productIndex);
          if (productIndex !== -1) {
            const removedProduct = state.products.splice(productIndex, 1)[0];
            state.quantity -=1;
            state.total -= removedProduct.price * removedProduct.quantity;
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

