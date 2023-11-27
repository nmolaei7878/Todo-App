import {
  configureStore,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import todoSlice from "./slices/todo-slice";
import { todoApi } from "./slices/todo-api";

const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
  todo: todoSlice,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
    preloadedState,
    devTools: true,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
