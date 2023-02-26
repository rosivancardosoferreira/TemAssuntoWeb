import React from "react";
import { Button } from "@/components";
import { ContainerSubject } from "./style";
import { useSpring, animated } from "react-spring";
import { useSubject } from "@/hooks/useSubject";

export function Subject(): JSX.Element {
  const { subject } = useSubject();
  const animation = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 300 }
  });
  return (
    <ContainerSubject>
      <animated.div className="subject__box" style={animation}>
        <h1 className="subject__title">{subject?.label}</h1>
        <div className="subject__body">
          <p className="subject__text">{subject?.subject}</p>
        </div>
        <Button variant="orange" title="RESPONDER PERGUNTAS" />
      </animated.div>
    </ContainerSubject>
  );
}
