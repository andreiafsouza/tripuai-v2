import { ReactNode } from "react";
import styled from "styled-components";

type BoardSpaceProps = {
  selected: boolean;
  $player?: "playerOne" | "playerTwo";
  children: ReactNode;
};

export const Container = styled.section``;

export const BoardContainer = styled.div`
  display: grid;
  max-width: fit-content;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: fit-content;
`;

export const BoardMessage = styled.h1`
  font-size: ${(props) => props.theme.fontSize["16"]};
`;

export const BoardSpace = styled.button<BoardSpaceProps>`
  all: unset;
  display: flex;
  width: 173px;
  height: 216px;
  outline: none;
  background: ${(props) => props.theme.color.nudeRose};
  border: 2px solid transparent;

  border: ${({ selected, $player, theme }) =>
    $player === "playerOne"
      ? `2px solid red`
      : $player === "playerTwo"
      ? `2px solid blue`
      : selected && !$player
      ? `2px solid ${theme.color.greenWasabi}`
      : `2px solid ${theme.color.nudeDust}`};

  &:hover:not(:disabled) {
    cursor: pointer;
    background: ${({ $player, theme }) =>
      !$player ? theme.color.greenWasabi : ""};
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ScoreDisplay = styled.p`
  background-color: ${(props) => props.theme.color.nudeRose};
  font-size: ${(props) => props.theme.fontSize["24"]};
`;
