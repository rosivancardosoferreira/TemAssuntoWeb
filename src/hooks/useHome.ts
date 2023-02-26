import type { useHomeData } from "@/_types/Home";
import { useRouter } from "next/router";

export function useHome(): useHomeData {
  const router = useRouter();
  const options = [
    { id: 0, label: "COMEÇAR", destiny: "escolher-assunto" },
    { id: 1, label: "ENTRAR EM JOGO", destiny: "/" },
    { id: 2, label: "COMO JOGAR", destiny: "/" },
    { id: 3, label: "CRÉDITOS", destiny: "/" }
  ];
  return {
    naviagateTo: (value: string) => router.push(value),
    options
  };
}
