import * as S from "./styles";
import { useState, useEffect, KeyboardEvent } from "react";
import { CityCard } from "../CityCard/CityCard";
import {
  turnChanged,
  scoreUpdated,
  cardAddedToBoard,
  boardReset,
} from "@/store/slices/boardSlice";
import { cardSelected } from "@/store/slices/deckSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

const Board = () => {
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.board.spaces);
  const playerOneScore = useAppSelector((state) => state.board.score.playerOne);
  const playerTwoScore = useAppSelector((state) => state.board.score.playerTwo);
  const turn = useAppSelector((state) => state.board.turn);
  const playerDeck = useAppSelector((state) => state.decks[turn].cards);
  const selectedCard = useAppSelector(
    (state) => state.decks[turn].selectedCard
  );
  const [selectedBoardSpace, setSelectedBoardSpace] = useState<number | null>(
    null
  );
  const [boardSpaceWhenEnterIsPressed, setBoardSpaceWhenEnterIsPressed] =
    useState<number | null>(null);
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";
  const columns = 3;
  const boarMessage = selectedCard
    ? "Escolha onde quer colocar a carta selecionada"
    : "Escolha uma carta para adicionar ao tabuleiro";

  const getAdjacentIndexes = (index: number) => {
    const adjacentIndexes: number[] = [];

    if (index % columns !== 0) adjacentIndexes.push(index - 1); // Left
    if (index % columns < columns - 1) adjacentIndexes.push(index + 1); // Right
    if (index - columns >= 0) adjacentIndexes.push(index - columns); // Top
    if (index + columns < columns * columns)
      adjacentIndexes.push(index + columns); // Bottom

    return adjacentIndexes;
  };

  const checkIfPlayerScored = (index: number) => {
    const adjacentIndexes = getAdjacentIndexes(index);

    adjacentIndexes.forEach((adjacentIndex) => {
      const currentPlacedCard = selectedCard;
      const adjacentCard = board[adjacentIndex];

      if (
        adjacentCard &&
        currentPlacedCard &&
        adjacentCard.player !== currentPlacedCard.player
      ) {
        const comparisons = [
          {
            index: adjacentIndex === index - 1,
            condition: currentPlacedCard.left > adjacentCard.right,
          },
          {
            index: adjacentIndex === index + 1,
            condition: currentPlacedCard.right > adjacentCard.left,
          },
          {
            index: adjacentIndex === index - columns,
            condition: currentPlacedCard.top > adjacentCard.bottom,
          },
          {
            index: adjacentIndex === index + columns,
            condition: currentPlacedCard.bottom > adjacentCard.top,
          },
        ];

        comparisons.forEach(({ index, condition }) => {
          if (index && condition) {
            dispatch(
              scoreUpdated({
                player: currentPlacedCard.player,
                turnedCard: adjacentCard,
                addScore: 1,
              })
            );
          }
        });
      }
    });
  };

  const handleAddCardToBoard = (index: number) => {
    if (selectedCard) {
      const isCardPlacedOnTheBoard = playerDeck.find((playerCard) =>
        board.some((boardCard) => boardCard && boardCard.id === playerCard.id)
      );

      const isBoardSpaceEmpty = board[index] === null;

      if (!isCardPlacedOnTheBoard && isBoardSpaceEmpty) {
        dispatch(cardAddedToBoard({ index: index, card: selectedCard }));
        dispatch(cardSelected({ player: turn, card: null }));
        const nextPlayerTurn = turn === playerTwo ? playerOne : playerTwo;
        dispatch(turnChanged(nextPlayerTurn));
        setSelectedBoardSpace(index);
        checkIfPlayerScored(index);
      }
    }
  };

  const handleSelectSpaceOnKeyPress = (event: KeyboardEvent) => {
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
      const nextAvailableBoardSpace = board.findIndex(
        (space) => space === null
      );
      setSelectedBoardSpace(nextAvailableBoardSpace);

      //if the card is selected add the event listener to move across the board with arrow keys
      document.addEventListener(
        "keydown",
        handleSelectSpaceOnKeyPress as unknown as EventListener
      );

      return () => {
        document.removeEventListener(
          "keydown",
          handleSelectSpaceOnKeyPress as unknown as EventListener
        );
      };
    }

    //reset the board if it is full (match is over)
    const isBoardNotFull = board.filter((space) => space === null);
    if (!isBoardNotFull.length) {
      //ADD LOADING AND THEN RESET BOARD
      dispatch(boardReset(true));
    }
  }, [board, selectedCard]);

  useEffect(() => {
    if (boardSpaceWhenEnterIsPressed !== null) {
      const boardIndex = boardSpaceWhenEnterIsPressed;
      handleAddCardToBoard(boardIndex);
      setBoardSpaceWhenEnterIsPressed(null);
    }
  }, [boardSpaceWhenEnterIsPressed]);

  return (
    <S.Container>
      <S.BoardMessage>{boarMessage}</S.BoardMessage>
      <S.BoardContainer>
        {board.map((_, index) => (
          <S.BoardSpace
            key={index}
            disabled={!selectedCard}
            selected={selectedBoardSpace === index}
            $player={board[index]?.player}
            onClick={() => handleAddCardToBoard(index)}
          >
            {board[index] !== null ? (
              <CityCard
                nome={board[index]!.nome}
                id={board[index]!.id}
                top={board[index]!.top}
                right={board[index]!.right}
                left={board[index]!.left}
                bottom={board[index]!.bottom}
                bioma={board[index]!.bioma}
              />
            ) : null}
          </S.BoardSpace>
        ))}
      </S.BoardContainer>
      <S.ScoreContainer>
        <S.ScoreDisplay>{playerTwoScore}</S.ScoreDisplay>
        <S.ScoreDisplay>{playerOneScore}</S.ScoreDisplay>
      </S.ScoreContainer>
    </S.Container>
  );
};

export default Board;
