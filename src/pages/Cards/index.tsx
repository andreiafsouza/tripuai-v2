import { CardProps } from "@/@types/global";
import citiesData from "../../../citiesGrouped.json";
import * as S from "./styles";
import CityCardList from "@/components/CityCardList/CityCardList";

const Cards = () => {
  const cities: CardProps[] = citiesData;
  return (
    <S.Main>
      <CityCardList cities={cities} />
    </S.Main>
  );
};

export default Cards;
