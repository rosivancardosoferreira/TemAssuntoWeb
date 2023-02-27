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
  overflow: auto;
  .question__box {
    background: rgba(36, 45, 71, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    margin: 35px 0 25px;
    width: 100%;
    .question__text {
      font-weight: 500;
      color: ${colors.light};
      font-family: ${Roboto?.style?.fontFamily};
    }
  }
  .question__options {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .question__confirm {
    width: 25%;
    min-width: fit-content;
    transition: all 0.3s;
    transform: scale(1);
  }
  .question__confirm--hidden {
    transform: scale(0);
  }
  .question__controls {
    display: flex;
    width: 100%;
    column-gap: 25px;
  }
  @media screen and (max-width: 1023px) {
    padding: 20px;
    max-height: 98%;
    .question__box {
      padding: 20px 10px;
      border: 4px solid #c5dba1;
      .question__text {
        font-size: ${pxToRem(16)};
        letter-spacing: ${pxToRem(0.3)};
      }
    }
    .question__options {
      row-gap: 10px;
    }
    .question__confirm {
      margin-top: 10px;
    }
    .question__controls {
      flex-direction: column;
    }
  }
  @media screen and (min-width: 1024px) {
    margin: auto;
    padding: 0 30px;
    max-height: 90%;
    .question__box {
      padding: 45px 70px;
      border: 8px solid #c5dba1;
      .question__text {
        font-size: ${pxToRem(22)};
        letter-spacing: ${pxToRem(0.5)};
      }
    }
    .question__options {
      row-gap: 20px;
    }
    .question__confirm {
      margin-top: 50px;
    }
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

  @media screen and (max-width: 1023px) {
    font-size: ${pxToRem(16)};
    letter-spacing: ${pxToRem(0.3)};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${pxToRem(21)};
    letter-spacing: ${pxToRem(0.5)};
  }
`;
