import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialPasswordState = {
  length: 12,
  hasLowercase: true,
  hasUppercase: false,
  hasNumbers: false,
  hasSymbols: false,
  isRegenerate: false,

  thePassword: "initialPassword",
};

const generatePasswordSlice = createSlice({
  name: "generatePassword",
  initialState: initialPasswordState,
  reducers: {
    lengthHandler(state, action) {
      state.length = action.payload;
    },
    hasLowercaseHandler(state) {
      state.hasLowercase = !state.hasLowercase;
    },
    hasUppercaseHandler(state) {
      state.hasUppercase = !state.hasUppercase;
    },
    hasNumbersHandler(state) {
      state.hasNumbers = !state.hasNumbers;
    },
    hasSymbolsHandler(state) {
      state.hasSymbols = !state.hasSymbols;
    },
    isRegenerateHandler(state) {
      state.isRegenerate = !state.isRegenerate;
    },

    createPasswordHandler(state, action) {
      state.thePassword = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { password: generatePasswordSlice.reducer },
});

export const generatePasswordActions = generatePasswordSlice.actions;
export default store;
