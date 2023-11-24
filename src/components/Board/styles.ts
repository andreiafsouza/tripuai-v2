import styled from "styled-components";

type BoardSpaceProps = {
  selected: boolean;
};

export const BoardContainer = styled.div`
  display: grid;
  max-width: fit-content;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

export const BoardSpace = styled.button<BoardSpaceProps>`
  width: 173px;
  height: 216px;
  outline: none;

  border: ${({ selected }) => (selected ? `2px solid blue` : `1px solid red`)};
`;
