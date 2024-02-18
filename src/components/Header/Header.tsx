import { DefaultBtn, OutlinedBtn } from "@/components/Buttons/Buttons";
import Logo from "../Logo/Logo";
import * as S from "./styles";

const Header = () => {
  return (
    <header>
      <S.HeaderContainer>
        <Logo size="small" />
        <DefaultBtn text="Menu" size="small" color="primary" />
      </S.HeaderContainer>
    </header>
  );
};

export default Header;
