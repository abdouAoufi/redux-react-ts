import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counter-slice";
import authSlice from "../features/auth/auth";

export const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
