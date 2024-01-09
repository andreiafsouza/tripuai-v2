import { useEffect, useState } from "react";
import { CityProps } from "@/@types/global";
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
  const cities: CityProps[] = citiesData;
  const dispatch = useAppDispatch();
  const turnState = useAppSelector((state) => state.board.turn);
  const boardState = useAppSelector((state) => state.board.board);
  const playerDeck = useAppSelector((state) => state.decks[player].cards);
  /*   const playerDeckSelectedCard = useAppSelector(
    (state) => state.decks[player].selectedCard
  ); */
  const [isSelected, setIsSelected] = useState<number | undefined>(0);
  const [turnMessage, setTurnMessage] = useState<string>("");
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";
  const isDeckTurn = turnState === player;

  const selectCardFromDeck = (selectedId: number) => {
    const selectedCard = playerDeck.find((card) => card.id === selectedId);
    dispatch(cardSelected({ player: turnState, card: selectedCard! }));
    setIsSelected(selectedCard?.id);
  };

  useEffect(() => {
    const cardAlreadyPlacedOnTheBoard = playerDeck.find((playerCard) =>
      boardState.some(
        (boardCard) => boardCard && boardCard.id === playerCard.id
      )
    );

    if (cardAlreadyPlacedOnTheBoard) {
      dispatch(
        cardRemoved({ player: player, card: cardAlreadyPlacedOnTheBoard })
      );
    }
  }, [boardState]);

  useEffect(() => {
    const message = isDeckTurn
      ? `sua vez ${turnState}!`
      : `Aguarde o adversário`;
    setTurnMessage(message);
  }, [isDeckTurn]);

  useEffect(() => {
    const playerDeck = getRandomCards(cities, 5);
    playerDeck.forEach((card) => {
      dispatch(cardAdded({ player: player, card: card }));
    });

    const randomPlayer = Math.random() < 0.5 ? playerOne : playerTwo;
    dispatch(turnChanged(randomPlayer));
  }, []);

  return (
    <S.DeckContainer $isDeckTurn={isDeckTurn}>
      <S.DeckTurnTitle>{turnMessage}</S.DeckTurnTitle>
      {playerDeck?.map((city) => (
        <S.CardButton
          disabled={!isDeckTurn}
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
