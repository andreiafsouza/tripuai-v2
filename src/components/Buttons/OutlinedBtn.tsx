import { ButtonProps } from "@/@types/global";
import * as S from "./styles";

const OutlinedBtn = ({ text, size, outlined = "true" }: ButtonProps) => {
  return (
    <S.ButtonContainer outlined={outlined} size={size}>
      <S.ButtonText className={"outlinedText"} size={size}>
        {text}
      </S.ButtonText>
    </S.ButtonContainer>
  );
};

export default OutlinedBtn;
