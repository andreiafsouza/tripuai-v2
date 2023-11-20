import styled from "styled-components";
import { LogoProps } from "./Logo";

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const ImageLogo = styled.img<LogoProps>`
  top: 0;
  left: 0;
  filter: ${(props) =>
    !props.size || props.size === "default"
      ? `drop-shadow(${props.theme.color.greenPalmOpacity[35]} -10px 10px 5px)
    drop-shadow(${props.theme.color.greenPalmOpacity[20]} -30px 30px 30px)
    drop-shadow(${props.theme.color.whiteOpacity[7]} 8px -8px 10px)`
      : `drop-shadow(${props.theme.color.greenPalmOpacity[35]} -5px 5px 2px)
    drop-shadow(${props.theme.color.greenPalmOpacity[20]} -15px 15px 15px)`};
`;

export const ImageLogoBg = styled.img<LogoProps>`
  position: absolute;
  max-width: max-content;
  top: ${(props) =>
    !props.size || props.size === "default" ? "-56px" : "-20px"};
  left: ${(props) =>
    !props.size || props.size === "default" ? "-56px" : "-20px"};

  z-index: -1;
`;
