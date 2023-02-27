import { Bangers, Roboto } from "@/pages/_app";
import { colors } from "@/style/theme";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ContainerSubject = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  .subject__box {
    max-width: 1300px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 30px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: flex-start;
    .subject__title {
      font-family: ${Bangers?.style?.fontFamily};
      color: ${colors.dark};
      text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    }
    .subject__body {
      overflow: auto;
      flex: 1;
      .subject__text {
        white-space: pre-line;
        font-size: ${pxToRem(18)};
        line-height: ${pxToRem(25.5)};
        font-family: ${Roboto?.style?.fontFamily};
        color: ${colors.dark};
      }
    }
  }
  @media screen and (max-width: 1023px) {
    .subject__box {
      width: 95%;
      height: 98%;
      .subject__title {
        font-size: ${pxToRem(25)};
        letter-spacing: ${pxToRem(5)};
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .subject__box {
      width: 80%;
      height: 80%;
      .subject__title {
        font-size: ${pxToRem(35)};
        letter-spacing: ${pxToRem(5)};
      }
    }
  }
`;
