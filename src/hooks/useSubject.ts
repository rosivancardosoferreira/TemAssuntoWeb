import { useRouter } from "next/router";
import { themesData } from "@/utils/constants";
import { type themeDataOptions } from "@/_types/shared";
import { type useSubjectData } from "@/_types/Subject";

export function useSubject(): useSubjectData {
  const router = useRouter();
  const { theme = "not-found" } = router.query;
  const _theme = (theme as themeDataOptions) ?? "not-found";
  const subject = themesData[_theme] ?? themesData["not-found"];
  const destinyQuestions = _theme;
  const shouldRenderButton = subject.value !== "not-found";

  return {
    subject,
    shouldRenderButton,
    navigateToQuestions: () => router.push(`/perguntas/${destinyQuestions}`),
    naviagateToSubjects: () => router.push("/escolher-assunto")
  };
}
