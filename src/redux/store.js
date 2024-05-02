import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filter/slice";

const store = configureStore({
  reducer: {
  contacts: contactsReducer,
  filters: filtersReducer,
},
});

export default store;