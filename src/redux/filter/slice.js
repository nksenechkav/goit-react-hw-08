import { createSlice } from "@reduxjs/toolkit";

const InitialFilters = {
    filters: {
      name: ""
    }
  }

const filtersSlice = createSlice({
  name: "filters/name",
  initialState: InitialFilters,
  reducers: {
    changeFilter: (state, action) => {
        state.filters.name = action.payload;
    },
  },
});


export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;