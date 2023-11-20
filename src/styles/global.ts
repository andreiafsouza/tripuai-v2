import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3 {
    text-wrap: balance;
  } 

  img,
  picture,
  svg {
    max-width: 100%;
    display: block;
  }
`;
