import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInGameProps } from "@/@types/global";

export interface DeckPayloadState {
  player: "playerOne" | "playerTwo";
  card: CardInGameProps;
}

export interface UserPayloadState {
  player: "playerOne" | "playerTwo";
  id: number | null;
}

export interface CardPayloadState {
  player: "playerOne" | "playerTwo";
  card: CardInGameProps | null;
}

type DeckState = {
  playerOne: {
    userId: number | null;
    cards: CardInGameProps[];
    selectedCard: CardInGameProps | null;
  };
  playerTwo: {
    userId: number | null;
    cards: CardInGameProps[];
    selectedCard: CardInGameProps | null;
  };
};

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
    cardSelected(state, action: PayloadAction<CardPayloadState>) {
      state[action.payload.player].selectedCard = action.payload.card;
    },
  },
});

export const { userAdded, cardAdded, cardRemoved, cardSelected } =
  deckSlice.actions;

export default deckSlice.reducer;
