import React from "react";
import { Button } from "@/components";
import { type SubjectProps } from "@/_types/Questions";
import { ContainerSubject } from "./style";
import { useSpring } from "react-spring";

export function Subject({ subject }: SubjectProps): JSX.Element {
  const animation = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 300 }
  });
  return (
    <ContainerSubject style={animation}>
      <h1 className="subject__title">{subject?.label}</h1>
      <div className="subject__body">
        <p className="subject__text">{subject?.subject}</p>
      </div>
      <Button variant="orange" title="RESPONDER PERGUNTAS" />
    </ContainerSubject>
  );
}
