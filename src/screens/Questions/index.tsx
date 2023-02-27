import React from "react";
import { Button, Title } from "@/components";
import { useQuestions } from "@/hooks/useQuestions";
import { ContainerQuestions, OptionItem } from "./style";

export function Questions(): JSX.Element {
  const {
    question,
    showButtonConfirm,
    isConfirmAnswer,
    amountQuestions,
    isExistNextQuestion,
    onHandleSelectAnswer,
    showSelectAnswer,
    onConfirmAnswer,
    goToHome,
    onNextQuestion
  } = useQuestions();
  const { problem, options } = question;
  const showOptions = isConfirmAnswer;

  return (
    <ContainerQuestions>
      <Title value="SOBRE ÉTICA NAS REDES SOCIAIS" />
      <div className="question__box">
        <p className="question__text">{problem}</p>
      </div>
      <ul className="question__options">
        {options.map(({ id, label, value }) => (
          <li key={id}>
            <OptionItem
              disabled={isConfirmAnswer}
              variant={showSelectAnswer({ value })}
              onClick={() => {
                onHandleSelectAnswer({ value });
              }}
            >
              {label}
            </OptionItem>
          </li>
        ))}
      </ul>
      {showOptions ? (
        <div className="question__controls">
          <Button
            title="INÍCIO"
            variant="blue"
            className="question__confirm"
            onClick={goToHome}
          />
          {isExistNextQuestion && (
            <Button
              title="PRÓXIMA"
              variant="green"
              className="question__confirm"
              onClick={onNextQuestion}
            />
          )}
        </div>
      ) : (
        <Button
          title="CONFIRMAR"
          variant="blue"
          className={`question__confirm ${showButtonConfirm}`}
          onClick={onConfirmAnswer}
        />
      )}
    </ContainerQuestions>
  );
}
