import * as S from "./styles";
import logoBg from "@/assets/images/logo-bg.svg";
import logo from "@/assets/images/logo.svg";

export type LogoProps = {
  size?: "small" | "default";
};

const Logo = ({ size }: LogoProps) => {
  return (
    <S.Wrapper>
      <S.ImageLogo
        src={logo}
        alt="Logo tripUAI"
        size={size}
        width={size === "small" ? 208 : 573}
      />
      <S.ImageLogoBg
        src={logoBg}
        alt=""
        size={size}
        width={size === "small" ? 248 : 685}
      />
    </S.Wrapper>
  );
};

export default Logo;
