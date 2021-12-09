import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { isLoggedIn: true, name: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
