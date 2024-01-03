import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityProps } from "@/@types/global";

export interface RivalDeckState {
  cards: CityProps[];
}

const initialState: RivalDeckState = {
  cards: [],
};

const MAX_CARDS = 5;

const rivalDeckSlice = createSlice({
  name: "rivalDeck",
  initialState,
  reducers: {
    rivalCardAdded(state, action: PayloadAction<CityProps>) {
      if (state.cards.length < MAX_CARDS) {
        state.cards.push(action.payload);
      }
    },
    rivalCardRemoved(state, action: PayloadAction<CityProps>) {
      const filteredState = state.cards.filter(
        (card) => card.id !== action.payload.id
      );
      state.cards = filteredState; //its ok to use mutating logic inside createSlice because of Immer
    },
  },
});

export const { rivalCardAdded, rivalCardRemoved } = rivalDeckSlice.actions;

export default rivalDeckSlice.reducer;
