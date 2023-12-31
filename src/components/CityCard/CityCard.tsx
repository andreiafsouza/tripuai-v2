import * as S from "./styles";
import { CityProps } from "@/@types/global";

export const CityCard = ({
  id,
  nome,
  top,
  right,
  left,
  bottom,
  bioma,
}: CityProps) => {
  return (
    <S.CardContainer title={nome}>
      <S.CardContent>
        <div>
          <h1>{top}</h1>
        </div>
        <S.MiddleScoreContainer>
          <h1>{left}</h1>
          <h1 style={{ padding: "4px" }}>{nome}</h1>
          <h1>{right}</h1>
        </S.MiddleScoreContainer>
        <div>
          <h1>{bottom}</h1>
        </div>
      </S.CardContent>
    </S.CardContainer>
  );
};
