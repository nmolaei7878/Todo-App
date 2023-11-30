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
    createUrl(state) {
      let sortType = "";
      if (state.sort === "Alphabitcally") {
        sortType = "title";
      }
      if (state.sort === "Important") {
        sortType = "important";
      }
      state.url = `&_sort=${sortType}&_order=${state.order}`;
    },
    changeOrder(state) {
      state.order = state.order === "asc" ? "desc" : "asc";
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { changeOrder, changeSort, createUrl } = sortSlice.actions;
export default sortSlice.reducer;
