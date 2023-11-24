import { ReactNode } from "react";
import * as S from "./styles";

type SelectButtonProps = {
  title: string;
  selectCity: (name: string) => void;
  children: ReactNode;
};

const SelectCityButton = ({
  title,
  selectCity,
  children,
}: SelectButtonProps) => {
  return (
    <S.SelectButton onClick={() => selectCity(title)}>
      {children}
    </S.SelectButton>
  );
};

export default SelectCityButton;
