import styled from "styled-components";
import { CardButtonProps } from "@/@types/global";

export const DeckContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CardButton = styled.button<CardButtonProps>`
  all: unset;

  padding: 2px;

  cursor: pointer;

  background: ${({ $isCardSelected, theme }) =>
    $isCardSelected ? theme.color.greenWasabi : ""};

  border-radius: 32px;
  border: 2px solid transparent;

  &:not(:disabled) {
    border: ${({
      $isCardSelected,
      $currentPlayerTurn,
      $isIndexSelected,
      theme,
    }) =>
      !$isCardSelected && $isIndexSelected
        ? $currentPlayerTurn === "playerOne"
          ? `2px solid ${theme.color.redCarmine}`
          : $currentPlayerTurn === "playerTwo"
          ? `2px solid ${theme.color.blueCerulean}`
          : "2px solid transparent"
        : "2px solid transparent"};
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    border: ${({
      $isCardSelected,
      $currentPlayerTurn,
      $isIndexSelected,
      theme,
    }) =>
      !$isCardSelected || $isIndexSelected
        ? $currentPlayerTurn === "playerOne"
          ? `2px solid ${theme.color.redCarmine}`
          : $currentPlayerTurn === "playerTwo"
          ? `2px solid ${theme.color.blueCerulean}`
          : "2px solid transparent"
        : "2px solid transparent"};
  }
`;

export const DeckTurnTitle = styled.p`
  text-align: center;
`;
