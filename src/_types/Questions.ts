export interface useQuestionsData {
  subject: {
    label: string;
    value: string;
    subject: string;
  };
}

export type SubjectProps = Pick<useQuestionsData, "subject">;
