export type ButtonProps = {
  text: string;
  size: "small" | "default" | "large";
  color?: "primary" | "secondary";
  outlined?: boolean;
};

export type CityProps = {
  id: number;
  nome: string;
  top: number;
  right: number;
  left: number;
  bottom: number;
  bioma: string;
};

export type CardProps = {
  title: string;
};
