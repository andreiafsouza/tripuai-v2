import styled from "styled-components";

export const CardContainer = styled.section`
  width: 173px;
  height: 216px;
  padding: 12px;
  background: ${(props) => props.theme.color.nudeDust};
  border-radius: 28px;
  border: 1px solid;
  border-color: ${(props) => props.theme.color.nudeRose};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    transform: translateY(-5px);
    background: ${(props) => props.theme.color.greenTea};
    border-color: ${(props) => props.theme.color.greenTeaLight};
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${(props) => props.theme.color.nudeRose};
  font-size: ${(props) => props.theme.fontSize["12"]};
  text-align: center;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  border-radius: 16px;
  position: relative;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.color.nudeCoffee};
  font-size: ${(props) => props.theme.fontSize["14"]};
  margin-top: 1rem;
`;

export const NumberContainer = styled.div<{
  position: "top" | "right" | "bottom" | "left";
}>`
  position: absolute;
  font-family: ${({ theme }) => theme.font.display};
  font-size: ${({ theme }) => theme.fontSize["24"]};
  font-weight: bold;

  ${({ position, theme }) => {
    switch (position) {
      case "top":
        return `
          top: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: ${theme.color.greenSpring};
        `;
      case "right":
        return `
          top: 50%;
          right: 0.5rem;
          transform: translateY(-50%);
          color: ${theme.color.redCarmine};
        `;
      case "bottom":
        return `
          bottom: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: ${theme.color.greenWasabi};
        `;
      case "left":
        return `
          top: 50%;
          left: 0.5rem;
          transform: translateY(-50%);
          color: ${theme.color.orangeSaffronDark};
        `;
      default:
        return "";
    }
  }}

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    color: ${({ theme }) => theme.color.nudeDust};
    -webkit-text-stroke: 2px ${({ theme }) => theme.color.nudeDust};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75%;
`;
