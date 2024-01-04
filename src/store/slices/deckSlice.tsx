import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityProps } from "@/@types/global";

export interface DeckPayloadState {
  player: "playerOne" | "playerTwo";
  card: CityProps;
}

export interface UserPayloadState {
  player: "playerOne" | "playerTwo";
  id: number | null;
}

export interface DeckState {
  playerOne: {
    userId: number | null;
    cards: CityProps[];
    selectedCard: CityProps | null;
  };
  playerTwo: {
    userId: number | null;
    cards: CityProps[];
    selectedCard: CityProps | null;
  };
}

const initialState: DeckState = {
  playerOne: {
    userId: null,
    cards: [],
    selectedCard: null,
  },
  playerTwo: {
    userId: null,
    cards: [],
    selectedCard: null,
  },
};

const MAX_CARDS = 5;

const deckSlice = createSlice({
  name: "decks",
  initialState,
  reducers: {
    userAdded(state, action: PayloadAction<UserPayloadState>) {
      state[action.payload.player].userId = action.payload.id;
    },
    cardAdded(state, action: PayloadAction<DeckPayloadState>) {
      if (state[action.payload.player].cards.length < MAX_CARDS) {
        state[action.payload.player].cards.push(action.payload.card);
      }
    },
    cardRemoved(state, action: PayloadAction<DeckPayloadState>) {
      const filteredDeck = state[action.payload.player].cards.filter(
        (card) => card.id !== action.payload.card.id
      );
      state[action.payload.player].cards = filteredDeck;
    },
  },
});

export const { userAdded, cardAdded, cardRemoved } = deckSlice.actions;

export default deckSlice.reducer;
