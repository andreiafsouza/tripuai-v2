import styled from "styled-components";

export const CardContainer = styled.section`
  width: 173px;
  height: 216px;
  padding: 12px;
  background: ${(props) => props.theme.color.greenTeaOpacity["50"]};
  border-radius: 28px;
`;

export const CardContent = styled.div`
  padding: 0.4rem;
  background-color: ${(props) => props.theme.color.nudeRose};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  border-radius: 16px;
`;

export const MiddleScoreContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
