import { ReactNode } from "react";
import * as S from "./styles";

type SelectButtonProps = {
  title: string;
  id: number;
  selectCity: (name: string, id: number) => void;
  children: ReactNode;
};

const SelectCityButton = ({
  title,
  id,
  selectCity,
  children,
}: SelectButtonProps) => {
  return (
    <S.SelectButton onClick={() => selectCity(title, id)}>
      {children}
    </S.SelectButton>
  );
};

export default SelectCityButton;
