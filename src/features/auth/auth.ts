import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authInfo {
  email: unknown;
  password: unknown;
}

const initialState: authInfo = {
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<any>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export default authSlice.reducer;

export const { setInfo } = authSlice.actions;
