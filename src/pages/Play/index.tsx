import CardDeck from "@/components/CardDeck/CardDeck";
import Board from "@/components/Board/Board";
import * as S from "./styles";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks";
import { turnChanged } from "@/store/slices/boardSlice";

const Play = () => {
  const dispatch = useAppDispatch();
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";

  useEffect(() => {
    dispatch(turnChanged(Math.random() < 0.5 ? "playerOne" : "playerTwo"));
  }, []);

  return (
    <S.Main>
      <CardDeck player={playerTwo} />
      <Board />
      <CardDeck player={playerOne} />
    </S.Main>
  );
};

export default Play;
