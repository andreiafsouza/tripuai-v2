import CardDeck from "@/components/CardDeck/CardDeck";
import Board from "@/components/Board/Board";
import * as S from "./styles";

const Play = () => {
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";

  return (
    <S.Main>
      <CardDeck player={playerTwo} />
      <Board />
      <CardDeck player={playerOne} />
    </S.Main>
  );
};

export default Play;
