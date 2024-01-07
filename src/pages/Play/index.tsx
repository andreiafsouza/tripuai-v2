import CardDeck from "@/components/CardDeck/CardDeck";
import Board from "@/components/Board/Board";
import { CityProps } from "@/@types/global";
import citiesData from "../../../citiesGrouped.json";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { getRandomCards } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { cardAdded, userAdded } from "@/store/slices/deckSlice";
import {
  boardUpdated,
  turnChanged,
  scoreUpdated,
} from "@/store/slices/boardSlice";

const Play = () => {
  const dispatch = useAppDispatch();
  const cities: CityProps[] = citiesData;
  const playerDeck = useAppSelector((state) => state.decks.playerOne.cards);
  const rivalDeck = useAppSelector((state) => state.decks.playerTwo.cards);
  const turnState = useAppSelector((state) => state.board.turn);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<CityProps | null>(null);
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";

  const handleSelectCard = (id: number) => {
    setSelectedCardId(id);
  };

  useEffect(() => {
    const playerDeck = getRandomCards(cities, 10);
    playerDeck.forEach((card) => {
      dispatch(cardAdded({ player: "playerOne", card: card }));
    });

    //call getRandomCards again so both players have chances of getting same cards
    const rivalDeck = getRandomCards(cities, 5);
    rivalDeck.forEach((card) => {
      dispatch(cardAdded({ player: "playerTwo", card: card }));
    });

    const randomPlayer = Math.random() < 0.5 ? playerOne : playerTwo;
    dispatch(turnChanged(randomPlayer));
  }, []);

  useEffect(() => {
    if (selectedCardId && turnState === playerOne) {
      const card = playerDeck.find((card) => card.id === selectedCardId);
      setSelectedCard(card || null);
    }

    if (selectedCardId && turnState === playerTwo) {
      const card = rivalDeck.find((card) => card.id === selectedCardId);
      setSelectedCard(card || null);
    }
  }, [selectedCardId]);

  return (
    <S.Main>
      <CardDeck cards={rivalDeck} isDeckTurn={turnState === playerTwo} />
      <Board
        player="dedeia"
        rival="computer"
        playerPoints={4}
        computerPoints={2}
        selectedCard={selectedCard}
      />

      <CardDeck cards={playerDeck} isDeckTurn={turnState === playerOne} />
    </S.Main>
  );
};

export default Play;
