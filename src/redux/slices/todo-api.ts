import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getAllTodos: builder.query<TodoType[], void>({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    getMyDayTodos: builder.query<TodoType[], void>({
      query: () => "/todos?myDay=true&completed=false",
      providesTags: ["Todos"],
    }),
    getMyDayCompletedTodos: builder.query<TodoType[], void>({
      query: () => "/todos?myDay=true&completed=true",
      providesTags: ["Todos"],
    }),
    getCompletedTodos: builder.query<TodoType[], void>({
      query: () => "/todos?completed=true",
      providesTags: ["Todos"],
    }),
    getImportantTodos: builder.query<TodoType[], void>({
      query: () => "/todos?important=true",
      providesTags: ["Todos"],
    }),

    addTodo: builder.mutation<TodoType, TodoType>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation<TodoType, TodoType>({
      query: (todo) => {
        return {
          url: `/todos/${todo.id}`,
          method: "PATCH",
          body: todo,
        };
      },
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<TodoType, string>({
      query: (id) => {
        return {
          url: `/todos/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useDeleteTodoMutation,
  useGetAllTodosQuery,
  useGetMyDayCompletedTodosQuery,
  useGetCompletedTodosQuery,
  useGetImportantTodosQuery,
  useGetMyDayTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
