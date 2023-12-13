import styled from "styled-components";

type ButtonProps = {
  size?: "small" | "default" | "large";
  color?: "primary" | "secondary";
  outlined?: boolean;
};

export const ButtonContainer = styled.button<ButtonProps>`
  --_bg: ${({ color, theme }) =>
    color === "primary"
      ? `${theme.color.greenTea}`
      : color === "secondary"
      ? `${theme.color.nudeDust}`
      : "transparent"};

  --_out-color: ${({ outlined, theme }) =>
    outlined ? `${theme.color.nudeDust}` : `${theme.color.nudeLion}`};
  background: var(--_bg);
  padding-inline: 1.5rem;
  padding-block: 1rem;
  border-radius: 16px;
  font-size: var(--_size);
  font-weight: bold;
  border: none;
  outline: 8px solid var(--_out-color);
  outline-offset: -8px;
  filter: drop-shadow(
    ${(props) => props.theme.color.greenPalmOpacity["20"]} -4px 3px 4px
  );

  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;

  & .outlinedText {
    --stroke-color: ${(props) => props.theme.color.nudeDust};
    --stroke-width: 2px;
    text-shadow: calc(var(--stroke-width) * 1) calc(var(--stroke-width) * 0) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.9239) calc(var(--stroke-width) * 0.3827) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.7071) calc(var(--stroke-width) * 0.7071) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.3827) calc(var(--stroke-width) * 0.9239) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0) calc(var(--stroke-width) * 1) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.3827) calc(var(--stroke-width) * 0.9239) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.7071) calc(var(--stroke-width) * 0.7071) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.9239) calc(var(--stroke-width) * 0.3827) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -1) calc(var(--stroke-width) * 0) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.9239) calc(var(--stroke-width) * -0.3827) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.7071) calc(var(--stroke-width) * -0.7071) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.3827) calc(var(--stroke-width) * -0.9239) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0) calc(var(--stroke-width) * -1) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.3827) calc(var(--stroke-width) * -0.9239) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.7071) calc(var(--stroke-width) * -0.7071) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.9239) calc(var(--stroke-width) * -0.3827) 0
        var(--stroke-color);
  }
`;

export const ButtonText = styled.p<ButtonProps>`
  font-size: ${({ size }) =>
    size === "large" ? "2rem" : size === "small" ? "1.25rem" : "1.5rem"};
`;
