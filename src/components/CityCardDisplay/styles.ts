import styled from "styled-components";

export const DisplayCardContainer = styled.section`
  width: 270px;
  height: 344px;
  padding: 12px;

  background: ${(props) => props.theme.color.greenTeaOpacity["50"]};
  border-radius: 32px;
`;

export const CardContent = styled.div`
  background-color: ${(props) => props.theme.color.nudeRose};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  border-radius: 16px;
`;
