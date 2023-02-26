import { themesData } from "@/utils/constants";
import { type ChoiceThemeData } from "@/_types/ChoiceTheme";

export function useChoiceTheme(): ChoiceThemeData {
  const themes = [
    {
      id: 0,
      label: "ÉTICA PROFISSIONAL",
      image: "/images/hand-shake.webp",
      destiny: `/perguntas/${themesData["etica-profissional"]?.value}`
    },
    {
      id: 1,
      label: "ÉTICA NAS REDES SOCIAIS",
      image: "/images/social.webp",
      destiny: `/perguntas/${themesData["etica-nas-redes-sociais"]?.value}`
    },
    {
      id: 2,
      label: "EDUCAÇÃO E QUESTÕES AMBIENTAIS",
      image: "/images/protection.webp",
      destiny: `/perguntas/${themesData["educacao-e-questoes-ambientais"]?.value}`
    },
    {
      id: 3,
      label: "EDUCAÇÃO E QUESTÕES RACIAIS",
      image: "/images/classroom.webp",
      destiny: `/perguntas/${themesData["educacao-e-questoes-raciais"]?.value}`
    },
    {
      id: 4,
      label: "EDUCAÇÃO E QUESTÕES DE SAÚDE",
      image: "/images/fruits.webp",
      destiny: `/perguntas/${themesData["educacao-e-questoes-de-saude"]?.value}`
    },
    {
      id: 5,
      label: "EDUCAÇÃO E QUESTÕES DE INCLUSÃO DIGITAL",
      image: "/images/keyboard.webp",
      destiny: `/perguntas/${themesData["educacao-e-questoes-de-inclusao-digital"]?.value}`
    }
  ];

  return {
    themes
  };
}
