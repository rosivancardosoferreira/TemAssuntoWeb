import { type ChoiceThemeData } from "@/_types/ChoiceTheme";

export function useChoiceTheme(): ChoiceThemeData {
  const themes = [
    {
      id: 0,
      label: "ÉTICA PROFISSIONAL",
      image: "/images/hand-shake.webp",
      destiny: "/"
    },
    {
      id: 1,
      label: "ÉTICA NAS REDES SOCIAIS",
      image: "/images/social.webp",
      destiny: "/"
    },
    {
      id: 2,
      label: "EDUCAÇÃO E QUESTÕES AMBIENTAIS",
      image: "/images/protection.webp",
      destiny: "/"
    },
    {
      id: 3,
      label: "EDUCAÇÃO E QUESTÕES RACIAIS",
      image: "/images/classroom.webp",
      destiny: "/"
    },
    {
      id: 4,
      label: "EDUCAÇÃO E QUESTÕES DE SAÚDE",
      image: "/images/fruits.webp",
      destiny: "/"
    },
    {
      id: 5,
      label: "EDUCAÇÃO E QUESTÕES DE INCLUSÃO DIGITAL",
      image: "/images/keyboard.webp",
      destiny: "/"
    }
  ];
  return {
    themes
  };
}
