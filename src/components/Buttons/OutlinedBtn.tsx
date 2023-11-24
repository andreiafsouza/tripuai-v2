import { ButtonProps } from "@/@types/global";
import * as S from "./styles";

const OutlinedBtn = ({ text, size }: ButtonProps) => {
  return (
    <S.ButtonContainer outlined size={size}>
      <S.ButtonText className={"outlinedText"} size={size}>
        {text}
      </S.ButtonText>
    </S.ButtonContainer>
  );
};

export default OutlinedBtn;
