import { Bangers } from "@/pages/_app";
import { colors } from "@/style/theme";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ContainerChoiceTheme = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;
  height: 100%;
  width: 100%;
  .theme__title {
    color: ${colors.light};
    font-family: ${Bangers?.style?.fontFamily};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  }
  .theme__items {
    width: 100%;
    row-gap: 40px;
    column-gap: 30px;
    max-width: 1300px;
    display: grid;
    transition: all 0.3s;
  }
  @media screen and (max-width: 1023px) {
    padding-top: 25px;
    padding-bottom: 25px;
    overflow: auto;
    .theme__title {
      font-size: ${pxToRem(35)};
      letter-spacing: ${pxToRem(5)};
    }
    .theme__items {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    .theme__title {
      font-size: ${pxToRem(55)};
      letter-spacing: ${pxToRem(7)};
    }
  }

  @media screen and (max-width: 1096px) {
    .theme__items {
      grid-template-columns: repeat(2, 1fr);
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media (min-width: 1097px) {
    .theme__items {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
