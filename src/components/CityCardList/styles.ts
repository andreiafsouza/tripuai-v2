import styled from "styled-components";

export const DisplayCardSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
`;

export const CardSelected = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid red;
`;

export const CardsList = styled.section`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  max-width: 1440px;
  overflow-x: scroll;
  padding-block: 1rem;
`;

export const SearchContainer = styled.div`
  position: relative;
`;
export const SearchInput = styled.input``;

export const SuggestionContainer = styled.div`
  position: absolute;

  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: ${(props) => props.theme.color.nudeRose};
`;

export const SuggestionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SuggestionItem = styled.li`
  cursor: pointer;
`;
