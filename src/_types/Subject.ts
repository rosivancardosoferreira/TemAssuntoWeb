export interface useSubjectData {
  subject: {
    label: string;
    value: string;
    subject: string;
  };
  shouldRenderButton: boolean;
  navigateToQuestions: () => void;
  naviagateToSubjects: () => void;
}
