import React from "react";
import * as S from "./styles";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "medium",
  position = "top-right",
}) => {
  return (
    <S.BadgeWrapper position={position}>
      <S.Badge variant={variant} size={size}>
        {children}
      </S.Badge>
    </S.BadgeWrapper>
  );
};

export default Badge;
