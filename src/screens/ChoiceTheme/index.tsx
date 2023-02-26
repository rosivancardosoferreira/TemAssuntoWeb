import { CardTheme } from "@/components";
import { useChoiceTheme } from "@/hooks/useChoiceTheme";
import React from "react";
import { useTrail, animated } from "react-spring";
import { ContainerChoiceTheme } from "./style";

export function ChoiceTheme(): JSX.Element {
  const { themes } = useChoiceTheme();
  const amoutThemes = themes.length;

  const animation = useTrail(amoutThemes, {
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 130 }
  });

  return (
    <ContainerChoiceTheme>
      <h1 className="theme__title">ESCOLHA O ASSUNTO</h1>
      <div className="theme__items">
        {themes.map(({ id, label, image, destiny }, index) => (
          <animated.div key={id} style={animation[index]}>
            <CardTheme label={label} image={image} destiny={destiny} />
          </animated.div>
        ))}
      </div>
    </ContainerChoiceTheme>
  );
}
