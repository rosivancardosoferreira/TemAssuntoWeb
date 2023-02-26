// eslint-disable-next-line import/no-extraneous-dependencies
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "@/services/firebase";
import { useCallback, useEffect } from "react";

export function useQuestions(): void {
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
}
