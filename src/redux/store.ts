import {
  configureStore,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import { todoApi } from "./slices/todo-api";
import sortSlice from "./slices/sort-slice";

const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
  sortSlice: sortSlice,
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
