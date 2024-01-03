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
  const [boardState, setBoardState] = useState<(CityProps | null)[]>(
    Array.from({ length: 9 }, () => null)
  );
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  //const [selectedCard, setSelectedCard] = useState<CityProps | null>(null);
  const columns = 3;

  const handleSpaceClick = (index: number) => {
    if (selectedCard) {
      setMessage("Escolha uma nova carta para adicionar ao tabuleiro");
      const updatedBoardState = [...boardState];
      const isCardAlreadyPlaced = checkAlreadyPlacedCards(
        updatedBoardState,
        selectedCard
      );

      if (!isCardAlreadyPlaced) {
        updatedBoardState[index] = selectedCard;
        setBoardState(updatedBoardState);
        setSelectedSpace(index);
      }
    }
  };

  // Check if selected card is already placed on the Board
  function checkAlreadyPlacedCards(
    board: (CityProps | null)[],
    newSelectedCard: CityProps
  ) {
    const isCardAlreadyPlaced = board.some(
      (card) => card && card.id === newSelectedCard.id
    );

    return isCardAlreadyPlaced;
  }

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
        case "Enter":
          if (newSelectedSpace || newSelectedSpace === 0) {
            handleSpaceClick(newSelectedSpace);
          }
          break;
        default:
          break;
      }

      return newSelectedSpace;
    });
  };

  useEffect(() => {
    if (selectedCard) {
      setMessage("Escolha onde quer colocar a carta selecionada");
      setSelectedSpace(0);

      //if the card is selected add the event listener to move across the board with arrow keys
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
    }
  }, [selectedCard]);

  useEffect(() => {
    setMessage("Escolha uma carta para adicionar ao tabuleiro");
  }, []);

  return (
    <S.Container>
      <S.BoardMessage>{message}</S.BoardMessage>
      <S.BoardContainer>
        {Array.from({ length: 9 }).map((_, index) => (
          <S.BoardSpace
            key={index}
            selected={selectedSpace === index}
            onClick={() => handleSpaceClick(index)}
          >
            {boardState[index] !== null ? (
              <CityCard
                nome={boardState[index]!.nome}
                id={boardState[index]!.id}
                top={boardState[index]!.top}
                right={boardState[index]!.right}
                left={boardState[index]!.left}
                bottom={boardState[index]!.bottom}
                bioma={boardState[index]!.bioma}
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
