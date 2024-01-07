import { configureStore } from "@reduxjs/toolkit";
import deckSlice from "./slices/deckSlice";
import boardSlice from "./slices/boardSlice";

const store = configureStore({
  reducer: {
    decks: deckSlice,
    board: boardSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
