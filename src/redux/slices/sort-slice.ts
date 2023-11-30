import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  url: string;
  sort: string;
  order: string;
};

const initialState: InitialState = {
  url: "",
  sort: "Sort By",
  order: "asc",
};
const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    changeOrder(state) {
      state.order = state.order === "asc" ? "desc" : "asc";
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
  },
});

// export const {  } = sortSlice.actions;
export default sortSlice.reducer;
