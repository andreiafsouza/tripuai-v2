import CardDeck from "@/components/CardDeck/CardDeck";
import Board from "@/components/Board/Board";
import { CityProps } from "@/@types/global";
import citiesData from "../../../citiesGrouped.json";
import * as S from "./styles";
import { useEffect, useState } from "react";

const Play = () => {
  const cities: CityProps[] = citiesData;
  const [playerCardDeck, setPlayerCardDeck] = useState<CityProps[]>([]);
  const [computerCardDeck, setComputerCardDeck] = useState<CityProps[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<CityProps | null>(null);
  const [deckTurn, setDeckTurn] = useState("dedeia");

  function getRandomCards(cityCard: CityProps[], count: number) {
    const shuffledCities = cityCard.slice().sort(() => Math.random() - 0.5); // Shuffle the array
    const selectedCards = shuffledCities.slice(0, count);
    return selectedCards;
  }

  useEffect(() => {
    if (cities) {
      const playerDeck = getRandomCards(cities, 4);
      const computerDeck = getRandomCards(cities, 4);
      setPlayerCardDeck(playerDeck);
      setComputerCardDeck(computerDeck);
    }
  }, []);

  const handleSelectCard = (id: number) => {
    setSelectedCardId(id);
  };

  useEffect(() => {
    if (selectedCardId && deckTurn === "dedeia") {
      const card = playerCardDeck.find((card) => card.id === selectedCardId);
      setSelectedCard(card || null);
    }

    if (selectedCardId && deckTurn === "computer") {
      const card = computerCardDeck.find((card) => card.id === selectedCardId);
      setSelectedCard(card || null);
    }
  }, [selectedCardId, deckTurn]);

  return (
    <S.Main>
      <CardDeck
        cards={computerCardDeck}
        onCardSelect={handleSelectCard}
        isDeckTurn={deckTurn === "computer"}
      />
      <Board
        player="dedeia"
        rival="computer"
        playerDeck={playerCardDeck}
        computerDeck={computerCardDeck}
        playerPoints={4}
        computerPoints={2}
        selectedCard={selectedCard}
      />

      <CardDeck
        cards={playerCardDeck}
        onCardSelect={handleSelectCard}
        isDeckTurn={deckTurn === "dedeia"}
      />
    </S.Main>
  );
};

export default Play;
