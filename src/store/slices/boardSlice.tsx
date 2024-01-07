import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityProps } from "@/@types/global";

export interface PlayerScoreState {
  player: "playerOne" | "playerTwo";
  addScore: number;
}

export interface BoardState {
  board: (CityProps | null)[];
  turn: "playerOne" | "playerTwo";
  score: {
    playerOne: number;
    playerTwo: number;
  };
}

const initialState: BoardState = {
  board: Array.from({ length: 9 }, () => null),
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
    boardUpdated(state, action: PayloadAction<(CityProps | null)[]>) {
      state.board = action.payload;
    },
    turnChanged(state, action: PayloadAction<"playerOne" | "playerTwo">) {
      state.turn = action.payload;
    },
    scoreUpdated(state, action: PayloadAction<PlayerScoreState>) {
      state.score[action.payload.player] =
        state.score[action.payload.player] + action.payload.addScore;
    },
  },
});

export const { boardUpdated, turnChanged, scoreUpdated } = boardSlice.actions;

export default boardSlice.reducer;
