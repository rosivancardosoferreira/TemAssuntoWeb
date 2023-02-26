import { CardTheme } from "@/components";
import { useChoiceTheme } from "@/hooks/useChoiceTheme";
import React from "react";
import { ContainerChoiceTheme } from "./style";

export function ChoiceTheme(): JSX.Element {
  const { themes } = useChoiceTheme();
  return (
    <ContainerChoiceTheme>
      <h1 className="theme__title">ESCOLHA O ASSUNTO</h1>
      <div className="theme__items">
        {themes.map(({ id, label, image, destiny }) => (
          <CardTheme key={id} label={label} image={image} destiny={destiny} />
        ))}
      </div>
    </ContainerChoiceTheme>
  );
}
