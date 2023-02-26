import React from "react";
import { ContainerHome } from "./style";
import { useHome } from "@/hooks/useHome";

export function Home(): JSX.Element {
  const { options, naviagateTo } = useHome();
  return (
    <ContainerHome>
      {options?.map(({ id, label, destiny }) => (
        <button
          key={id}
          type="button"
          className="home__option"
          onClick={() => {
            naviagateTo(destiny);
          }}
        >
          {label}
        </button>
      ))}
    </ContainerHome>
  );
}
