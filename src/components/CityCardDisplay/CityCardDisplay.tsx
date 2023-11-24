import * as S from "./styles";

export type CardProps = {
  title: string;
};

export const CityCardDisplay = ({ title }: CardProps) => {
  return (
    <S.DisplayCardContainer>
      <S.CardContent>
        <h1>{title}</h1>
      </S.CardContent>
    </S.DisplayCardContainer>
  );
};
