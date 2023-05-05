/**
 * cart slice.
 * this slice will handle cart related actions.
 */

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddedProductType, CartSliceStatesTypes} from '../types/cartSliceTypes';

/** initial states */
const initialState: CartSliceStatesTypes = {
  addedProducts: [],
};

export const cartSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addProductToCart: (
      state,
      action: PayloadAction<Array<AddedProductType>>,
    ) => {
      state.addedProducts = action.payload;
    },
  },
});

export const {addProductToCart} = cartSlice.actions;

export default cartSlice.reducer;
