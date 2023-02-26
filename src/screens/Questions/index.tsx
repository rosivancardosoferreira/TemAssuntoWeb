import React from "react";
import { Button } from "@/components";
import { useQuestions } from "@/hooks/useQuestions";
import { ContainerQuestions } from "./style";

export function Questions(): JSX.Element {
  const { subject } = useQuestions();
  return (
    <ContainerQuestions>
      <div className="questions__box">
        <h1 className="questions__title">{subject?.label}</h1>
        <div className="questions__body">
          <p className="questions__text">{subject?.subject}</p>
        </div>
        <Button variant="orange" title="RESPONDER PERGUNTAS" />
      </div>
    </ContainerQuestions>
  );
}
