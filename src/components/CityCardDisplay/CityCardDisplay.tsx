import * as S from "./styles";

export type DisplayCardProps = {
  title: string;
};

export const CityCardDisplay = ({ title }: DisplayCardProps) => {
  return (
    <S.DisplayCardContainer>
      <S.CardContent>
        <h1>{title}</h1>
      </S.CardContent>
    </S.DisplayCardContainer>
  );
};
