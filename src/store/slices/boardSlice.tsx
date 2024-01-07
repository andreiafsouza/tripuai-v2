import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityProps } from "@/@types/global";

export interface BoardState {
  board: (CityProps | null)[];
  turn: "playerOne" | "playerTwo" | null;
  score: {
    playerOne: number;
    playerTwo: number;
  };
}

const initialState: BoardState = {
  board: Array.from({ length: 9 }, () => null),
  turn: null,
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
  },
});

export const { boardUpdated } = boardSlice.actions;

export default boardSlice.reducer;
