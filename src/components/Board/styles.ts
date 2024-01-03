import { ReactNode } from "react";
import styled from "styled-components";

type BoardSpaceProps = {
  selected: boolean;
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
  width: 173px;
  height: 216px;
  outline: none;

  border: ${({ selected }) => (selected ? `2px solid blue` : `1px solid red`)};
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ScoreDisplay = styled.p`
  background-color: ${(props) => props.theme.color.nudeRose};
  font-size: ${(props) => props.theme.fontSize["24"]};
`;
