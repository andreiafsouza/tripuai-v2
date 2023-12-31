import { CityCard } from "../CityCard/CityCard";
import { CityProps, CardButtonProps } from "@/@types/global";
/* style */
import * as S from "./styles";
import { ReactNode, useEffect, useState } from "react";

type CardDeckProps = {
  cards: CityProps[];
  onCardSelect: (id: number) => void;
  isDeckTurn: boolean;
};

const CardDeck = ({ cards, onCardSelect, isDeckTurn }: CardDeckProps) => {
  return (
    <S.DeckContainer>
      {cards?.map((city) => (
        <S.CardButton
          disabled={!isDeckTurn}
          key={city.id}
          id={city.id}
          onClick={() => onCardSelect(city.id)}
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
