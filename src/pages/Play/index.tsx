import Deck from "@/components/Deck/Deck";
import Board from "@/components/Board/Board";
import { CityProps } from "@/@types/global";
import citiesData from "../../../cities.json";
import * as S from "./styles";

const Play = () => {
  const cities: CityProps[] = citiesData;
  return (
    <S.Main>
      <Deck />
      <Board />
      <Deck />
    </S.Main>
  );
};

export default Play;
