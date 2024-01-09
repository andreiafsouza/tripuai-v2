import * as S from "./styles";
import { useState, useEffect, KeyboardEvent } from "react";
import { CityCard } from "../CityCard/CityCard";
import {
  turnChanged,
  scoreUpdated,
  cardAddedToBoard,
} from "@/store/slices/boardSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { checkAlreadyPlacedCards } from "@/utils";

const Board = () => {
  const dispatch = useAppDispatch();
  const boardState = useAppSelector((state) => state.board.board);
  const turnState = useAppSelector((state) => state.board.turn);
  const selectedCard = useAppSelector(
    (state) => state.decks[turnState].selectedCard
  );
  const [selectedBoardSpace, setSelectedBoardSpace] = useState<number | null>(
    null
  );
  const [boardSpaceWhenEnterIsPressed, setBoardSpaceWhenEnterIsPressed] =
    useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";
  const columns = 3;

  const handleAddCardToBoard = (index: number) => {
    if (selectedCard) {
      const isCardAlreadyPlaced = checkAlreadyPlacedCards(
        boardState,
        selectedCard
      );

      if (!isCardAlreadyPlaced) {
        dispatch(cardAddedToBoard({ index: index, card: selectedCard }));
        const nextPlayerTurn = turnState === playerTwo ? playerOne : playerTwo;
        dispatch(turnChanged(nextPlayerTurn));
        setSelectedBoardSpace(index);
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    setSelectedBoardSpace((prevSelectedBoardSpace) => {
      let newSelectedBoardSpace =
        prevSelectedBoardSpace !== null ? prevSelectedBoardSpace : 0;

      switch (event.key) {
        case "ArrowLeft":
          if (newSelectedBoardSpace % columns !== 0) newSelectedBoardSpace -= 1;
          break;
        case "ArrowRight":
          if (newSelectedBoardSpace % columns < columns - 1)
            newSelectedBoardSpace += 1;
          break;
        case "ArrowUp":
          if (newSelectedBoardSpace - columns >= 0)
            newSelectedBoardSpace -= columns;
          break;
        case "ArrowDown":
          if (newSelectedBoardSpace + columns < columns * columns)
            newSelectedBoardSpace += columns;
          break;
        case "Enter":
          if (newSelectedBoardSpace || newSelectedBoardSpace === 0) {
            setBoardSpaceWhenEnterIsPressed(newSelectedBoardSpace);
          }
          break;
        default:
          break;
      }

      return newSelectedBoardSpace;
    });
  };

  useEffect(() => {
    if (selectedCard) {
      setMessage("Escolha onde quer colocar a carta selecionada");
      const nextAvailableBoardSpace = boardState.findIndex(
        (space) => space === null
      );
      setSelectedBoardSpace(nextAvailableBoardSpace);

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
    setMessage(
      `${turnState} Escolha uma nova carta para adicionar ao tabuleiro`
    );
  }, [turnState]);

  useEffect(() => {
    if (boardSpaceWhenEnterIsPressed !== null) {
      handleAddCardToBoard(boardSpaceWhenEnterIsPressed);
      setBoardSpaceWhenEnterIsPressed(null); // Reset the pending click after handling
    }
  }, [boardSpaceWhenEnterIsPressed]);

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
            selected={selectedBoardSpace === index}
            onClick={() => handleAddCardToBoard(index)}
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
