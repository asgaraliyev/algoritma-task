import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import alertReducer from "./slices/alertSlice";
import orderReducer from "./slices/orderSlice";
const store = configureStore({
  reducer: {
    orders: orderReducer,
    alerts:alertReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
