import { createSlice } from "@reduxjs/toolkit";

const initailDropdownState = { isOpen: false };

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: initailDropdownState,
  reducers: {
    dropdownHandler(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const dropdownActions = dropdownSlice.actions;
export default dropdownSlice;
