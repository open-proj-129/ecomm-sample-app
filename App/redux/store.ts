/**
 * redux store.
 * this file configures a redux store.
 */

import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from './services/products';
import cartReducer from './slices/cartSlice';

/** configure store */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productSlice.reducerPath]: productSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(productSlice.middleware),
});

/** infer the `RootState` and `AppDispatch` types from the store itself **/
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
