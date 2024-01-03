import { configureStore } from "@reduxjs/toolkit";
import playerDeckSlice from "./slices/playerDeckSlice";
import rivalDeckSlice from "./slices/rivalDeckSlice";

const store = configureStore({
  reducer: {
    playerDeck: playerDeckSlice,
    rivalDeck: rivalDeckSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
