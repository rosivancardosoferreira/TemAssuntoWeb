import React, { useEffect } from "react";
import type { themeDataOptions } from "@/_types/shared";
import type {
  onHandleSelectAnswerParams,
  showSelectAnswerParams,
  useQuestionsData,
  variantItem
} from "@/_types/Questions";
import questions from "@/utils/questions.json";
import { themesData } from "@/utils/constants";
import { useRouter } from "next/router";

export function useQuestions(): useQuestionsData {
  const router = useRouter();
  const { theme = "not-found" } = router.query;
  const _theme = (theme as themeDataOptions) ?? "not-found";
  const subject = themesData[_theme] ?? themesData["not-found"];
  const currentTheme: themeDataOptions = subject?.value as themeDataOptions;
  const [currentQuestion, seCurrentQuestion] = React.useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<string>();
  const [isConfirmAnswer, setIsConfirmAnswer] = React.useState<boolean>(false);
  const isSelectedAnswer = selectedAnswer !== undefined;
  const showButtonConfirm = isSelectedAnswer ? "" : "question__confirm--hidden";
  const correctOption = questions[currentTheme][currentQuestion].correct;
  const amountQuestions = questions[currentTheme]?.length;

  function onHandleSelectAnswer({ value }: onHandleSelectAnswerParams): number {
    if (isConfirmAnswer) {
      setIsConfirmAnswer(false);
    }
    if (value === selectedAnswer) {
      setSelectedAnswer(undefined);
      return 0;
    }
    setSelectedAnswer(value);
    return 0;
  }

  function showSelectAnswer({ value }: showSelectAnswerParams): variantItem {
    const isItemSelected = value === selectedAnswer;
    const isSelectedCorrect =
      value === correctOption && selectedAnswer === value && isConfirmAnswer;
    const isSelectedError =
      selectedAnswer === value &&
      selectedAnswer !== correctOption &&
      isConfirmAnswer;
    const isIndicateCorrect = value === correctOption && isConfirmAnswer;

    if (isSelectedCorrect || isIndicateCorrect) {
      return "success";
    }
    if (isSelectedError) {
      console.log("caiu aqui");
      return "error";
    }
    if (isItemSelected) {
      return "selected";
    }
    return "initial";
  }

  function onConfirmAnswer(): void {
    setIsConfirmAnswer(true);
  }

  function onNextQuestion(): void {
    const _currentQuestion = currentQuestion + 1;
    seCurrentQuestion(_currentQuestion);
    setSelectedAnswer(undefined);
    setIsConfirmAnswer(false);
  }

  return {
    question:
      questions[currentTheme][currentQuestion] ?? questions["not-found"],
    showButtonConfirm,
    isConfirmAnswer,
    amountQuestions,
    isExistNextQuestion: currentQuestion < amountQuestions - 1,
    onHandleSelectAnswer,
    goToHome: () => router.push("/escolher-assunto"),
    showSelectAnswer,
    onConfirmAnswer,
    onNextQuestion
  };
}
