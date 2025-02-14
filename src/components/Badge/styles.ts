import styled, { css } from "styled-components";

const sizeStyles = {
  small: css`
    font-size: 10px;
    padding: 4px 8px;
  `,
  medium: css`
    font-size: 12px;
    padding: 6px 10px;
  `,
  large: css`
    font-size: 14px;
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
  border: 1px solid;
  border-color: ${(props) => props.theme.color.nudeDust};
  font-weight: bold;
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
