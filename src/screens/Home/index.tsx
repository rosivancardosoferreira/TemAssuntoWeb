import React from "react";
import { ContainerHome } from "./style";

export function Home(): JSX.Element {
  const data = "nome";
  return (
    <ContainerHome>
      <h1>{data}</h1>
    </ContainerHome>
  );
}
