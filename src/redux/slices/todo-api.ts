import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<TodoType[], void>({
      query: () => "/todos",
    }),
    getMyDayTodos: builder.query<TodoType[], void>({
      query: () => "/todos?myday=true",
    }),
    getCompletedTodos: builder.query<TodoType[], void>({
      query: () => "/todos?completed=true",
    }),
    getImportantTodos: builder.query<TodoType[], void>({
      query: () => "/todos?important=true",
    }),

    addTodo: builder.mutation<TodoType, TodoType>({
      query: (todo) => {
        return {
          url: "/todos",
          method: "POST",
          data: todo,
        };
      },
    }),
    updateTodo: builder.mutation<TodoType, TodoType>({
      query: (todo) => {
        return {
          url: "/todos",
          method: "PUT",
          data: todo,
        };
      },
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useGetCompletedTodosQuery,
  useGetImportantTodosQuery,
  useGetMyDayTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
