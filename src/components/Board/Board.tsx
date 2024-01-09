import * as S from "./styles";
import { useState, useEffect, KeyboardEvent } from "react";
import { CityProps } from "@/@types/global";
import { CityCard } from "../CityCard/CityCard";
import {
  boardUpdated,
  turnChanged,
  scoreUpdated,
  cardAddedToBoard,
} from "@/store/slices/boardSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { cardRemoved } from "@/store/slices/deckSlice";
import { checkAlreadyPlacedCards } from "@/utils";

const Board = () => {
  const dispatch = useAppDispatch();
  const boardState = useAppSelector((state) => state.board.board);
  const turnState = useAppSelector((state) => state.board.turn);
  const selectedCard = useAppSelector(
    (state) => state.decks[turnState].selectedCard
  );
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";
  const columns = 3;

  const handleSpaceClick = (index: number) => {
    if (selectedCard) {
      setMessage(
        `${turnState} Escolha uma nova carta para adicionar ao tabuleiro`
      );

      const isCardAlreadyPlaced = checkAlreadyPlacedCards(
        boardState,
        selectedCard
      );

      if (!isCardAlreadyPlaced) {
        const nextTurn = turnState === playerTwo ? playerOne : playerTwo; //set next turn
        dispatch(cardRemoved({ player: turnState, card: selectedCard }));
        dispatch(turnChanged(nextTurn)); // updated turn on redux state to the next player to make a move
        setSelectedSpace(index);
        dispatch(cardAddedToBoard({ index: index, card: selectedCard })); // updated board state with new card added
      }
    }
  };

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
      const nextAvailableBoardSpace = boardState.findIndex(
        (space) => space === null
      );
      setSelectedSpace(nextAvailableBoardSpace);

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
  }, [boardState, selectedCard]);

  useEffect(() => {
    setMessage("Escolha uma carta para adicionar ao tabuleiro");
  }, []);

  return (
    <S.Container>
      <S.BoardMessage>{message}</S.BoardMessage>
      <S.BoardContainer>
        {boardState.map((_, index) => (
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
        <S.ScoreDisplay>{2}</S.ScoreDisplay>
        <S.ScoreDisplay>{4}</S.ScoreDisplay>
      </S.ScoreContainer>
    </S.Container>
  );
};

export default Board;
