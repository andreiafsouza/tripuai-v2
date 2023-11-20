import * as S from "./styles";
import logoBg from "@/assets/images/logo-bg.svg";
import logo from "@/assets/images/logo.svg";

export type LogoProps = {
  size?: "small" | "default";
};

const Logo = ({ size }: LogoProps) => {
  return (
    <S.Wrapper>
      <S.ImageLogo src={logo} alt="Logo tripUAI" size={size} />
      <S.ImageLogoBg src={logoBg} alt="" size={size} />
    </S.Wrapper>
  );
};

export default Logo;
