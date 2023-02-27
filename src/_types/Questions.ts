export type variantItem = "initial" | "error" | "selected" | "success";
export interface OptionItemModifier {
  variant: variantItem;
}

export interface questionsData {
  subjects: Array<
    Record<
      string,
      Array<{
        problem: string;
      }>
    >
  >;
}

export interface questionData {
  problem: string;
}

export interface onHandleSelectAnswerParams {
  value: string;
}

export interface showSelectAnswerParams {
  value: string;
}

export interface useQuestionsData {
  question: {
    problem: string;
    correct: string;
    options: Array<{
      id: number;
      label: string;
      value: string;
    }>;
  };
  showButtonConfirm: string;
  isConfirmAnswer: boolean;
  amountQuestions: number;
  isExistNextQuestion: boolean;
  onHandleSelectAnswer: (data: onHandleSelectAnswerParams) => void;
  showSelectAnswer: (data: showSelectAnswerParams) => variantItem;
  onConfirmAnswer: () => void;
  goToHome: () => void;
  onNextQuestion: () => void;
}
