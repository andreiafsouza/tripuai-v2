import { DefaultBtn, OutlinedBtn } from "@/components/Buttons/Buttons";
import Logo from "../Logo/Logo";
import * as S from "./styles";

const Header = () => {
  return (
    <header>
      <S.HeaderContainer>
        <Logo size="small" />
        <OutlinedBtn text="Menu" size="small" />
      </S.HeaderContainer>
    </header>
  );
};

export default Header;
