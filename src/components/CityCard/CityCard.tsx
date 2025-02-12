import * as S from "./styles"
import type { CardProps } from "@/@types/global"

export const CityCard = ({ id, nome, top, right, left, bottom, bioma, image }: CardProps) => {
  if(nome === "Belo Horizonte"){
    console.log("Belo Horizonte", image)
  }
  return (
    <S.CardContainer title={nome}>
      <S.CardContent>
        <S.Title>{nome}</S.Title>

        <S.NumberContainer position="top">{top}</S.NumberContainer>

        <S.NumberContainer position="right">{right}</S.NumberContainer>

        <S.NumberContainer position="bottom">{bottom}</S.NumberContainer>

        <S.NumberContainer position="left">{left}</S.NumberContainer>

        <S.ImageContainer >
          <img width={60} src={image || ""} alt={nome} />
        </S.ImageContainer>
      </S.CardContent>
    </S.CardContainer>
  )
}

