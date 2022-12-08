import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  name: String;
  email: String;
  subject: String;
  message: String;
}

const initialState: CounterState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const contactFormSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    clearAll: (state) => {
      state.name = "";
      state.email = "";
      state.subject = "";
      state.message = "";
    },
    nameSet: (state, action: PayloadAction<String>) => {
      state.name = action.payload;
    },
    emailSet: (state, action: PayloadAction<String>) => {
      state.email = action.payload;
    },
    subjectSet: (state, action: PayloadAction<String>) => {
      state.subject = action.payload;
    },
    messageSet: (state, action: PayloadAction<String>) => {
      state.message = action.payload;
    },
  },
});

export const { clearAll, nameSet, emailSet, subjectSet, messageSet } =
  contactFormSlice.actions;

export const selectMessage = (state) => state.message;

export default contactFormSlice.reducer;
