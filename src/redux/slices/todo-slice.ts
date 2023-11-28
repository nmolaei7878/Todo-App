import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  todos: Array<TodoType>;
};

const initialState: InitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {},
});

export default todoSlice.reducer;
