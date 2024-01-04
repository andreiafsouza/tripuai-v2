import { configureStore } from "@reduxjs/toolkit";
import deckSlice from "./slices/deckSlice";

const store = configureStore({
  reducer: {
    decks: deckSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
