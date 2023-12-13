import styled from "styled-components";

export const SelectButton = styled.button`
  all: unset;

  margin-bottom: 8px;
  padding: 8px;

  cursor: pointer;

  & :hover {
    background: ${(props) => props.theme.color.greenTea};
  }
`;
