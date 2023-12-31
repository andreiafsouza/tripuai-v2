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

  return (
    <S.Main>
      <CardDeck cards={computerCardDeck} />
      <Board />
      <CardDeck cards={playerCardDeck} />
    </S.Main>
  );
};

export default Play;
