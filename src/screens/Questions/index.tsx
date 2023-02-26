import React from "react";
import { useQuestions } from "@/hooks/useQuestions";
import { ContainerQuestions } from "./style";
import { Subject } from "./partials/Subject";

export function Questions(): JSX.Element {
  const { subject } = useQuestions();
  return (
    <ContainerQuestions>
      <Subject subject={subject} />
    </ContainerQuestions>
  );
}
