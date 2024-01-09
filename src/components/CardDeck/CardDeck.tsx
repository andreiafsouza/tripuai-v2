import { useEffect, useState } from "react";
import { CardProps, CardInGameProps } from "@/@types/global";
import { getRandomCards } from "@/utils";
import citiesData from "../../../citiesGrouped.json";
/* redux */
import { turnChanged } from "@/store/slices/boardSlice";
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
  const [isSelected, setIsSelected] = useState<number | undefined>(0);
  const [turnMessage, setTurnMessage] = useState<string>("");
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";
  const isPlayerTurn = currentPlayerTurn === player;

  const selectCardFromDeck = (selectedId: number) => {
    const selectedCard = playerDeck.find((card) => card.id === selectedId);
    dispatch(cardSelected({ player: currentPlayerTurn, card: selectedCard! }));
    setIsSelected(selectedCard?.id);
  };

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
    const message = isPlayerTurn
      ? `sua vez ${currentPlayerTurn}!`
      : `Aguarde o adversário`;
    setTurnMessage(message);
  }, [isPlayerTurn]);

  useEffect(() => {
    const playerDeck = getRandomCards(cities, 5);
    playerDeck.forEach((card) => {
      const cardInGame: CardInGameProps = { ...card, player: player };
      dispatch(cardAdded({ player: player, card: cardInGame }));
    });

    const randomPlayer = Math.random() < 0.5 ? playerOne : playerTwo;
    dispatch(turnChanged(randomPlayer));
  }, []);

  return (
    <S.DeckContainer
      $isPlayerTurn={isPlayerTurn}
      $currentPlayerTurn={currentPlayerTurn}
    >
      <S.DeckTurnTitle>{turnMessage}</S.DeckTurnTitle>
      {playerDeck?.map((city) => (
        <S.CardButton
          disabled={!isPlayerTurn}
          $isSelected={isSelected === city.id}
          key={city.id}
          id={city.id}
          onClick={() => selectCardFromDeck(city.id)}
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
