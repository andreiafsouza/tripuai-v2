import * as S from "./styles";
import type { CardProps } from "@/@types/global";

export const CityCard = ({
  id,
  nome,
  top,
  right,
  left,
  bottom,
  bioma,
  image,
}: CardProps) => {
  if (nome === "Belo Horizonte") {
    console.log("Belo Horizonte", image);
  }
  return (
    <S.CardContainer title={nome}>
      <S.CardContent>
        <S.Title>{nome}</S.Title>

        <S.NumberContainer position="top" data-text={top}>
          {top}
        </S.NumberContainer>

        <S.NumberContainer position="right" data-text={right}>
          {right}
        </S.NumberContainer>

        <S.NumberContainer position="bottom" data-text={bottom}>
          {bottom}
        </S.NumberContainer>

        <S.NumberContainer position="left" data-text={left}>
          {left}
        </S.NumberContainer>

        <S.ImageContainer>
          <img width={60} src={image || ""} alt={nome} />
        </S.ImageContainer>
      </S.CardContent>
    </S.CardContainer>
  );
};
