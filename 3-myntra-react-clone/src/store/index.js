import {configureStore} from "@reduxjs/toolkit";
import itemslice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagslice";

const myntraStore = configureStore({
  reducer : {
    items: itemslice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag : bagSlice.reducer,
  }
});

export default myntraStore;