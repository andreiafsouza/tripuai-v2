import { CityCard } from "../CityCard/CityCard";
import { CityProps, CardButtonProps } from "@/@types/global";
import { cardSelected } from "@/store/slices/deckSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
/* style */
import * as S from "./styles";
import { ReactNode, useEffect, useState } from "react";

type CardDeckProps = {
  cards: CityProps[];
  isDeckTurn: boolean;
};

const CardDeck = ({ cards, isDeckTurn }: CardDeckProps) => {
  const dispatch = useAppDispatch();
  const turnState = useAppSelector((state) => state.board.turn);
  const [isSelected, setIsSelected] = useState<number | undefined>(0);
  const [turnMessage, setTurnMessage] = useState<string>("");

  const selectCardFromDeck = (selectedId: number) => {
    const selectedCard = cards.find((card) => card.id === selectedId);
    dispatch(cardSelected({ player: turnState, card: selectedCard! }));
    setIsSelected(selectedCard?.id);
  };

  useEffect(() => {
    const message = isDeckTurn
      ? `sua vez ${turnState}!`
      : `Aguarde o adversário`;
    setTurnMessage(message);
  }, [isDeckTurn]);

  return (
    <S.DeckContainer isDeckTurn={isDeckTurn}>
      <S.DeckTurnTitle>{turnMessage}</S.DeckTurnTitle>
      {cards?.map((city) => (
        <S.CardButton
          disabled={!isDeckTurn}
          isSelected={isSelected === city.id}
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
