import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityProps } from "@/@types/global";

export interface PlayerDeckState {
  cards: CityProps[];
}

const initialState: PlayerDeckState = {
  cards: [],
};

const MAX_CARDS = 5;

const playerDeckSlice = createSlice({
  name: "playerDeck",
  initialState,
  reducers: {
    playerCardAdded(state, action: PayloadAction<CityProps>) {
      if (state.cards.length < MAX_CARDS) {
        state.cards.push(action.payload);
      }
    },
    playerCardRemoved(state, action: PayloadAction<CityProps>) {
      const filteredState = state.cards.filter(
        (card) => card.id !== action.payload.id
      );
      state.cards = filteredState;
    },
  },
});

export const { playerCardAdded, playerCardRemoved } = playerDeckSlice.actions;

export default playerDeckSlice.reducer;
