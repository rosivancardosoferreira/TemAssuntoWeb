import { Roboto } from "@/pages/_app";
import { colors } from "@/style/theme";
import { pxToRem } from "@/utils/pxToRem";
import { type OptionItemModifier } from "@/_types/Questions";
import styled, { css } from "styled-components";

const modifier = {
  variantOptionItem: {
    initial: css`
      color: ${colors.dark};
    `,
    error: css`
      color: ${colors.light};
      :before {
        background: ${colors.red};
        height: 100%;
      }
    `,
    selected: css`
      color: ${colors.light};
      :before {
        background: ${colors.blue};
        height: 100%;
      }
    `,
    success: css`
      color: ${colors.light};
      :before {
        background: ${colors.green};
        height: 100%;
      }
    `
  }
};

export const ContainerQuestions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  overflow: auto;
  max-height: 90%;
  padding: 0 30px;
  .question__box {
    background: rgba(36, 45, 71, 0.8);
    border: 8px solid #c5dba1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 45px 70px;
    margin: 35px 0 25px;
    width: 100%;
    .question__text {
      font-weight: 500;
      color: ${colors.light};
      font-family: ${Roboto?.style?.fontFamily};
      font-size: ${pxToRem(22)};
      letter-spacing: ${pxToRem(0.5)};
    }
  }
  .question__options {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
  }
  .question__confirm {
    margin-top: 50px;
    width: 25%;
    min-width: fit-content;
    transition: all 0.3s;
    transform: scale(1);
  }
  .question__confirm--hidden {
    border: 2px solid red;
    transform: scale(0);
  }
  .question__controls {
    display: flex;
    width: 100%;
    column-gap: 25px;
  }
`;

export const OptionItem = styled.button<OptionItemModifier>`
  ${({ variant }) => css`
    padding: 20px;
    width: 100%;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-family: ${Roboto?.style?.fontFamily};
    font-size: ${pxToRem(21)};
    letter-spacing: ${pxToRem(0.5)};
    transition: all 0.4s;
    position: relative;
    z-index: 1;
    background: ${colors.light};
    :before {
      content: " ";
      border-radius: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0%;
      transition: all 0.3s;
      z-index: -1;
    }
    ${modifier.variantOptionItem[variant]}
    :hover {
      transform: translateY(-5px);
    }
    :disabled {
      :hover {
        transform: translateY(0);
      }
    }
  `}
`;
