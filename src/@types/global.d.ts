export type ButtonProps = {
  text: string;
  size: "small" | "default" | "large";
  color?: "primary" | "secondary";
  outlined?: "true" | "false" | undefined;
};

export type CityProps = {
  id: number;
  nome: string;
  top: number; //Indicador IBGE 96386 - População - Densidade Demográfica.
  right: number; //Indicador IBGE 60045 - Educação - Taxa de escolarização de 6 a 14 anos de idade.
  left: number; //Indicador IBGE 60030 - Meio Ambiente - Esgotamento sanitário adequado.
  bottom: number; //Indicador IBGE 47001 - Economia - PIB per Capta.
  bioma: string; //Indicador IBGE 77861 - Biomas.
};

export type CardProps = {
  title: string;
};
