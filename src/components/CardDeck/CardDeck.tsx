import { useEffect, useState } from "react";
import { CityCard } from "../CityCard/CityCard";
import { CityProps } from "@/@types/global";
/* style */
import * as S from "./styles";

const CardDeck = ({ cards }: { cards: CityProps[] }) => {
  return (
    <S.DeckContainer>
      {cards?.map((city) => (
        <CityCard
          nome={city.nome}
          id={city.id}
          top={city.top}
          right={city.right}
          left={city.left}
          bottom={city.bottom}
          bioma={city.bioma}
        />
      ))}
    </S.DeckContainer>
  );
};

export default CardDeck;
