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
    //defines a random player to start the match
    const randomPlayer = Math.random() < 0.5 ? playerOne : playerTwo;
    dispatch(turnChanged(randomPlayer));
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
