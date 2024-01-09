import styled from "styled-components";
import { CardButtonProps } from "@/@types/global";

type DeckConteinerProps = {
  $isPlayerTurn: boolean;
  $currentPlayerTurn: "playerOne" | "playerTwo";
};

export const DeckContainer = styled.section<DeckConteinerProps>`
  display: flex;
  flex-direction: column;

  border: ${({ $isPlayerTurn, $currentPlayerTurn }) =>
    $isPlayerTurn && $currentPlayerTurn === "playerOne"
      ? "2px solid red"
      : $isPlayerTurn && $currentPlayerTurn === "playerTwo"
      ? "2px solid blue"
      : "2px solid tranparent"};
`;

export const CardButton = styled.button<CardButtonProps>`
  all: unset;

  padding: 2px;

  cursor: pointer;

  border: ${({ $isSelected }) =>
    $isSelected ? "2px solid green" : "2px solid tranparent"};

  & :hover {
    background: ${(props) => props.theme.color.greenTea};
  }
`;

export const DeckTurnTitle = styled.p`
  text-align: center;
`;
