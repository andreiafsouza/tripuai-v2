import Deck from "@/components/Deck/Deck";
import Board from "@/components/Board/Board";
import * as S from "./styles";

const Play = () => {
  return (
    <S.Main>
      <Deck />
      <Board />
      <Deck />
    </S.Main>
  );
};

export default Play;
