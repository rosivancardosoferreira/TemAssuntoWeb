import { useRouter } from "next/router";
// eslint-disable-next-line import/no-extraneous-dependencies
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "@/services/firebase";
import { useCallback, useEffect } from "react";
import { themesData } from "@/utils/constants";
import { type themeDataOptions } from "@/_types/shared";
import { type useQuestionsData } from "@/_types/Questions";
export function useQuestions(): useQuestionsData {
  const router = useRouter();
  const { theme = "not-found" } = router.query;
  const _theme = (theme as themeDataOptions) ?? "not-found";
  const subject = themesData[_theme] ?? themesData["not-found"];
  const dbConnection = getFirestore(firebaseApp);
  const questionsColletionRef = collection(dbConnection, "questions");

  const getQuestions = useCallback(async (): Promise<void> => {
    try {
      const questions = await getDocs(questionsColletionRef);
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");
      console.log(
        JSON.stringify(
          questions?.docs.map(element => ({ ...element.data() })),
          null,
          2
        )
      );
    } catch (error) {
      alert("ROSIVAN CARDOSO FERREIRA");
    }
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");
  }, []);

  useEffect(() => {
    getQuestions();
  }, []);
  return {
    subject
  };
}
