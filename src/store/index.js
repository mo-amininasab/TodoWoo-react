import { configureStore } from "@reduxjs/toolkit";

import dropdownSlice from "./dropdownSlice";

const store = configureStore({
  reducer: { dropdown: dropdownSlice.reducer },
});

export default store;
