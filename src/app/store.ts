import { configureStore } from "@reduxjs/toolkit";

import contactFormReducer from "./contactFormSlice";

export function makeStore() {
  return configureStore({
    reducer: { message: contactFormReducer },
  });
}

const store = makeStore();

export default store;
