import styled, { css } from "styled-components";

const sizeStyles = {
  small: css`
    font-size: ${(props) => props.theme.fontSize[10]};
    padding: 4px 8px;
  `,
  medium: css`
    font-size: ${(props) => props.theme.fontSize[12]};
    padding: 4px 8px;
    padding: 6px 10px;
  `,
  large: css`
    font-size: ${(props) => props.theme.fontSize[14]};
    padding: 8px 12px;
  `,
};

const positionStyles = {
  "top-left": css`
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  `,
  "top-right": css`
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  `,
  "bottom-left": css`
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
  `,
  "bottom-right": css`
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
  `,
  "top-center": css`
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  "bottom-center": css`
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  `,
};

export const BadgeWrapper = styled.div<{
  position: keyof typeof positionStyles;
}>`
  position: absolute;
  z-index: 1000;
  ${({ position }) => positionStyles[position]};
`;

export const Badge = styled.span<{
  variant: "primary" | "secondary" | "success" | "warning" | "danger";
  size: keyof typeof sizeStyles;
}>`
  display: inline-block;
  border-radius: 12px;
  border: 2px solid;
  border-color: ${(props) => props.theme.color.nudeDust};
  filter: drop-shadow(
    ${(props) => props.theme.color.greenPalmOpacity["20"]} -1px 2px 2px
  );

  font-weight: bold;
  white-space: nowrap;
  ${({ size }) => sizeStyles[size]};

  ${({ variant, theme }) => {
    const colors = theme.color;
    switch (variant) {
      case "primary":
        return css`
          background-color: ${colors.blueCerulean};
          color: ${colors.white};
        `;
      case "secondary":
        return css`
          background-color: ${colors.nudeCoffee};
          color: ${colors.white};
        `;
      case "success":
        return css`
          background-color: ${colors.greenTea};
          color: ${colors.black};
        `;
      case "warning":
        return css`
          background-color: ${colors.orangeSaffron};
          color: ${colors.black};
        `;
      case "danger":
        return css`
          background-color: ${colors.redCarmine};
          color: ${colors.white};
        `;
      default:
        return css``;
    }
  }};
`;
