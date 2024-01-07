import styled from "styled-components";
import { CardButtonProps } from "@/@types/global";

export const DeckContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CardButton = styled.button<CardButtonProps>`
  all: unset;

  padding: 8px;

  cursor: pointer;

  border: ${({ isDisabled }) => (isDisabled ? "none" : "1px solid red")};

  & :hover {
    background: ${(props) => props.theme.color.greenTea};
  }
`;
