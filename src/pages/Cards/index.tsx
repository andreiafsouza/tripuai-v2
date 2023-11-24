import { CityProps } from "@/@types/global";
import citiesData from "../../../cities.json";
import * as S from "./styles";
import CityCardList from "@/components/CityCardList/CityCardList";

const Cards = () => {
  const cities: CityProps[] = citiesData;
  return (
    <S.Main>
      {" "}
      <CityCardList cities={cities} />
    </S.Main>
  );
};

export default Cards;
