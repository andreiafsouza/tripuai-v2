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
  board: [],
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
    cardAddedToBoard(state, action: PayloadAction<CityProps>) {
      state.board.push(action.payload);
    },
  },
});

export const { cardAddedToBoard } = boardSlice.actions;

export default boardSlice.reducer;
