import { Bangers, Roboto } from "@/pages/_app";
import { colors } from "@/style/theme";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ContainerQuestions = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  .questions__box {
    width: 80%;
    height: 80%;
    max-width: 1300px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 30px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: flex-start;
    .questions__title {
      font-family: ${Bangers?.style?.fontFamily};
      font-size: ${pxToRem(35)};
      letter-spacing: ${pxToRem(5)};
      color: ${colors.dark};
      text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    }
    .questions__body {
      overflow: auto;
      flex: 1;
      .questions__text {
        white-space: pre-line;
        font-size: ${pxToRem(18)};
        line-height: ${pxToRem(25.5)};
        font-family: ${Roboto?.style?.fontFamily};
        color: ${colors.dark};
      }
    }
  }
`;
