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
  reducers: {
    addTodo(state, action) {
      // const { planIndex, todo } = action.payload;
      // state.plans[planIndex].todos.push(todo);
    },
    ImportantTodo(state, action) {
      // const { planIndex, todoIndex, value } = action.payload;
      // state.plans[planIndex].todos[todoIndex].status = value;
    },
    CompletedTodo(state, action) {
      // const { planIndex, todoIndex, title } = action.payload;
      // state.plans[planIndex].todos[todoIndex].title = title;
    },
  },
});

export const { addTodo, ImportantTodo, CompletedTodo } = todoSlice.actions;
export default todoSlice.reducer;
