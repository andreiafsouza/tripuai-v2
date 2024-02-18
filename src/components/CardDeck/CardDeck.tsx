import { useEffect, useState } from "react";
import { CardProps, CardInGameProps } from "@/@types/global";
import { getRandomCards } from "@/utils";
import citiesData from "../../../citiesGrouped.json";
/* redux */
import { cardAdded, cardRemoved, cardSelected } from "@/store/slices/deckSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
/* components */
import { CityCard } from "../CityCard/CityCard";
/* style */
import * as S from "./styles";

type CardDeckProps = {
  player: "playerOne" | "playerTwo";
};

const CardDeck = ({ player }: CardDeckProps) => {
  const cities: CardProps[] = citiesData;
  const dispatch = useAppDispatch();
  const currentPlayerTurn = useAppSelector((state) => state.board.turn);
  const board = useAppSelector((state) => state.board.spaces);
  const playerDeck = useAppSelector((state) => state.decks[player].cards);
  const selectedCard = useAppSelector(
    (state) => state.decks[player].selectedCard
  );
  const [isSelected, setIsSelected] = useState<number | undefined>(0);
  const [turnMessage, setTurnMessage] = useState<string>("");
  const isPlayerTurn = currentPlayerTurn === player;
  const [selectedDeckIndex, setSelectedDeckIndex] = useState<number | null>(
    null
  );
  const [deckIndexWhenEnterIsPressed, setDeckIndexWhenEnterIsPressed] =
    useState<number | null>(null);

  const selectCardFromDeck = (selectedId: number, index: number) => {
    const selectedCard = playerDeck.find((card) => card.id === selectedId);
    dispatch(cardSelected({ player: currentPlayerTurn, card: selectedCard! }));
    setIsSelected(selectedCard?.id);
    setSelectedDeckIndex(index);
  };

  const handleSelectCardOnKeyPress = (event: KeyboardEvent) => {
    setSelectedDeckIndex((prevselectedDeckIndex) => {
      let newSelectedDeckIndex =
        prevselectedDeckIndex !== null ? prevselectedDeckIndex : 0;

      switch (event.key) {
        case "ArrowUp":
          newSelectedDeckIndex = Math.max(0, newSelectedDeckIndex - 1);
          break;
        case "ArrowDown":
          newSelectedDeckIndex = Math.min(
            playerDeck.length > 0 ? playerDeck.length - 1 : 0,
            newSelectedDeckIndex + 1
          );
          break;
        case "Enter":
          if (newSelectedDeckIndex !== null) {
            setDeckIndexWhenEnterIsPressed(newSelectedDeckIndex);
          }
          break;
        default:
          break;
      }

      return newSelectedDeckIndex;
    });
  };

  const handlePressEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      dispatch(cardSelected({ player: currentPlayerTurn, card: null }));
      setDeckIndexWhenEnterIsPressed(null);
      setIsSelected(0);
    }
  };

  const handleMouseOverCard = (index: number) => {
    !selectedCard && isPlayerTurn && setSelectedDeckIndex(index);
  };

  const handleOnClickCard = (id: number, index: number) => {
    isPlayerTurn && selectCardFromDeck(id, index);
  };

  useEffect(() => {
    if (
      deckIndexWhenEnterIsPressed !== null &&
      deckIndexWhenEnterIsPressed >= 0 &&
      deckIndexWhenEnterIsPressed < playerDeck.length
    ) {
      const cardOnDeckIndex = playerDeck[deckIndexWhenEnterIsPressed];

      if (cardOnDeckIndex) {
        const cardId = cardOnDeckIndex.id;
        selectCardFromDeck(cardId, deckIndexWhenEnterIsPressed);
      }
      setDeckIndexWhenEnterIsPressed(null);
    }
  }, [deckIndexWhenEnterIsPressed, playerDeck, selectCardFromDeck]);

  useEffect(() => {
    const cardAlreadyPlacedOnTheBoard = playerDeck.find((playerCard) =>
      board.some((boardCard) => boardCard && boardCard.id === playerCard.id)
    );

    if (cardAlreadyPlacedOnTheBoard) {
      dispatch(
        cardRemoved({ player: player, card: cardAlreadyPlacedOnTheBoard })
      );
    }
  }, [board]);

  useEffect(() => {
    if (isPlayerTurn) {
      setSelectedDeckIndex(0)
      const message = isPlayerTurn ? `sua vez ${currentPlayerTurn}!` : " ";
      setTurnMessage(message);
    }
  }, [isPlayerTurn]);

  useEffect(() => {
    if (isPlayerTurn && selectedCard) {
      document.addEventListener(
        "keydown",
        handlePressEscapeKey as unknown as EventListener
      );

      return () => {
        document.removeEventListener(
          "keydown",
          handlePressEscapeKey as unknown as EventListener
        );
      };
    }

    if (!selectedCard && isPlayerTurn) {
      document.addEventListener(
        "keydown",
        handleSelectCardOnKeyPress as unknown as EventListener
      );

      return () => {
        document.removeEventListener(
          "keydown",
          handleSelectCardOnKeyPress as unknown as EventListener
        );
      };
    }
  }, [selectedCard, isPlayerTurn]);

  useEffect(() => {
    const playerDeck = getRandomCards(cities, 5);
    playerDeck.forEach((card) => {
      const cardInGame: CardInGameProps = { ...card, player: player };
      dispatch(cardAdded({ player: player, card: cardInGame }));
    });
  }, []);

  return (
    <S.DeckContainer id={player}>
      <S.DeckTurnTitle>{turnMessage}</S.DeckTurnTitle>
      {playerDeck?.map((city, index) => (
        <S.CardButton
          key={city.id}
          id={city.id}
          $currentPlayerTurn={currentPlayerTurn}
          $isCardSelected={isSelected === city.id}
          $isIndexSelected={selectedDeckIndex === index}
          onClick={() => handleOnClickCard(city.id, index)}
          onMouseOver={() => handleMouseOverCard(index)}
          onFocus={() => setSelectedDeckIndex(index)}
          disabled={!isPlayerTurn}
        >
          <CityCard
            nome={city.nome}
            id={city.id}
            top={city.top}
            right={city.right}
            left={city.left}
            bottom={city.bottom}
            bioma={city.bioma}
          />
        </S.CardButton>
      ))}
    </S.DeckContainer>
  );
};

export default CardDeck;
