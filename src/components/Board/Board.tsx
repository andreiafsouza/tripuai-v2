import * as S from "./styles";
import { useState, useEffect, KeyboardEvent } from "react";
import { CityProps } from "@/@types/global";
import { CityCard } from "../CityCard/CityCard";

export type BoardProps = {
  player: string;
  rival: string;
  playerDeck: CityProps[];
  computerDeck: CityProps[];
  selectedCard?: CityProps | null;
  playerPoints: number;
  computerPoints: number;
};

const Board = ({
  player,
  rival,
  playerDeck,
  computerDeck,
  selectedCard,
  playerPoints,
  computerPoints,
}: BoardProps) => {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);
  //const [selectedCard, setSelectedCard] = useState<CityProps | null>(null);
  const columns = 3;

  const handleKeyDown = (event: KeyboardEvent) => {
    setSelectedSpace((prevSelectedSpace) => {
      let newSelectedSpace = prevSelectedSpace !== null ? prevSelectedSpace : 0;

      switch (event.key) {
        case "ArrowLeft":
          if (newSelectedSpace % columns !== 0) newSelectedSpace -= 1;
          break;
        case "ArrowRight":
          if (newSelectedSpace % columns < columns - 1) newSelectedSpace += 1;
          break;
        case "ArrowUp":
          if (newSelectedSpace - columns >= 0) newSelectedSpace -= columns;
          break;
        case "ArrowDown":
          if (newSelectedSpace + columns < columns * columns)
            newSelectedSpace += columns;
          break;
        default:
          break;
      }

      return newSelectedSpace;
    });
  };

  const handleSpaceClick = (index: number) => {
    setSelectedSpace(index);
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      handleKeyDown as unknown as EventListener
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    };
  }, []);

  /*   useEffect(() => {
    if (!selectedCard) {
      setSelectedSpace(null);
    }
  }, [selectedCard]); */

  return (
    <S.Container>
      <S.BoardContainer>
        {Array.from({ length: 9 }).map((_, index) => (
          <S.BoardSpace
            key={index}
            selected={selectedSpace === index}
            onClick={() => handleSpaceClick(index)}
          >
            {selectedCard ? (
              <CityCard
                nome={selectedCard.nome}
                id={selectedCard.id}
                top={selectedCard.top}
                right={selectedCard.right}
                left={selectedCard.left}
                bottom={selectedCard.bottom}
                bioma={selectedCard.bioma}
              />
            ) : null}
          </S.BoardSpace>
        ))}
      </S.BoardContainer>
      <S.ScoreContainer>
        <S.ScoreDisplay>{computerPoints}</S.ScoreDisplay>
        <S.ScoreDisplay>{playerPoints}</S.ScoreDisplay>
      </S.ScoreContainer>
    </S.Container>
  );
};

export default Board;
