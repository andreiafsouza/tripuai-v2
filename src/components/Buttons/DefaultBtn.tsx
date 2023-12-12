import { ButtonProps } from "@/@types/global";
import * as S from "./styles";

const DefaultBtn = ({ text, size, color }: ButtonProps) => {
  return (
    <S.ButtonContainer color={color} size={size}>
      <S.ButtonText size={size}>{text}</S.ButtonText>
    </S.ButtonContainer>
  );
};

export default DefaultBtn;
