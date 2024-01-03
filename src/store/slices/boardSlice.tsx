import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityProps } from "@/@types/global";

export interface BoardState {
  board: (CityProps | null)[];
  playerName: string;
  rivalName: string;
  selectedCard: CityProps | null;
  playerPoints: number;
  computerPoints: number;
}

const initialState: BoardState = {
  board: [],
  playerName: "",
  rivalName: "",
  selectedCard: null,
  playerPoints: 0,
  computerPoints: 0,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    cardAdded(state, action: PayloadAction<CityProps>) {
      state.board.push(action.payload);
    },
  },
});

export const { cardAdded } = boardSlice.actions;

export default boardSlice.reducer;
