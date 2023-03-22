import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filter from "./filter/slice";
import guitar from "./guitar/slice"

export const store = configureStore({
  reducer: {
    filter,
    guitar,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>;
