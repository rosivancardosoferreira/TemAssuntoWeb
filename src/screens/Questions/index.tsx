import { useQuestions } from "@/hooks/useQuestions copy";
import React from "react";
import { ContainerQuestions } from "./style";

export function Questions(): JSX.Element {
  useQuestions();
  return (
    <ContainerQuestions>
      <h1>Questions</h1>
    </ContainerQuestions>
  );
}
