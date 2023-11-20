import { createGlobalStyle } from "styled-components";
import bgMesh from "../assets/images/bgMesh.png";

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
  height: 100%;
  width: 100%;
}

body {
  position: relative;
  background: url(${bgMesh}) no-repeat;
  background-color: ${(props) => props.theme.color.nudeDust};
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.main};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  padding-inline: 16px;
  height: 100%;
  width: 100%;
}

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    font-family: ${(props) => props.theme.font.main};
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  // 8. Create a root stacking context
  #root, #__next {
    isolation: isolate;
  }
`;
