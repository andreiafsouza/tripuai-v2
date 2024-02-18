import { ButtonProps } from "@/@types/global";
import * as S from "./styles";
import { useEffect, useMemo, useRef } from "react";
import { VanillaTilt } from "@/plugins/VanillaTilt.js";

const DefaultBtn = ({ text, size, color, onClick }: ButtonProps) => {
  const tilt = useRef<HTMLButtonElement | null>(null);

  const options = useMemo(
    () => ({
      scale: 1.1,
      speed: 1000,
      max: 10,
    }),
    []
  );

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, options);
    }
  }, [options]);

  return (
    <S.ButtonContainer /* ref={tilt} */ color={color} size={size} onClick={onClick}>
      <S.ButtonText size={size}>{text}</S.ButtonText>
    </S.ButtonContainer>
  );
};

export default DefaultBtn;
