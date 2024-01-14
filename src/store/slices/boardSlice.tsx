import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInGameProps } from "@/@types/global";

export interface PlayerScoreState {
  player: "playerOne" | "playerTwo";
  turnedCard: CardInGameProps;
  addScore: number;
}

export interface AddCardState {
  index: number;
  card: CardInGameProps;
}

type BoardState = {
  spaces: (CardInGameProps | null)[];
  turn: "playerOne" | "playerTwo";
  score: {
    playerOne: number;
    playerTwo: number;
  };
};

const initialState: BoardState = {
  spaces: Array.from({ length: 9 }, () => null),
  turn: "playerOne",
  score: {
    playerOne: 0,
    playerTwo: 0,
  },
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    boardUpdated(state, action: PayloadAction<(CardInGameProps | null)[]>) {
      state.spaces = action.payload;
    },
    turnChanged(state, action: PayloadAction<"playerOne" | "playerTwo">) {
      state.turn = action.payload;
    },
    scoreUpdated(state, action: PayloadAction<PlayerScoreState>) {
      state.score[action.payload.player] += action.payload.addScore;

      state.spaces = state.spaces.map((card) => {
        if (card && card.id === action.payload.turnedCard.id) {
          return { ...card, player: action.payload.player };
        }
        return card;
      });
    },
    cardAddedToBoard(state, action: PayloadAction<AddCardState>) {
      if (state.spaces[action.payload.index] === null)
        state.spaces[action.payload.index] = action.payload.card;
    },
  },
});

export const { boardUpdated, turnChanged, scoreUpdated, cardAddedToBoard } =
  boardSlice.actions;

export default boardSlice.reducer;
