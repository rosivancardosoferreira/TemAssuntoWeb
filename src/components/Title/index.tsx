import React from "react";
import { type TitleProps } from "@/_types/Title";
import { ContainerTitle } from "./style";

export function Title({ value, className }: TitleProps): JSX.Element {
  return <ContainerTitle className={className}>{value}</ContainerTitle>;
}
