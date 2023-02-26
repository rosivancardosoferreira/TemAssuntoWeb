import { Roboto } from "@/pages/_app";
import { colors } from "@/style/theme";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ContainerCardTheme = styled.div`
  width: fit-content;
  margin: auto;
  border: 8px solid ${colors.light};
  border-radius: 15px;
  position: relative;
  background-color: ${colors.orange};
  transition: all 0.3s;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  .theme__picture {
    border-radius: 15px;
  }
  .theme__bottom {
    position: absolute;
    bottom: 0;
    height: fit-content;
    width: 100%;
    opacity: 0.8;
    transition: all 0.3s;
    .theme__label {
      background-color: ${colors.blue};
      text-align: center;
      border-radius: 5px;
      padding: 5px 10px;
      font-weight: 500;
      color: ${colors.light};
      font-family: ${Roboto?.style?.fontFamily};
      font-size: ${pxToRem(20)};
      letter-spacing: ${pxToRem(0.5)};
    }
  }
  .theme__line {
    display: block;
    height: 9px;
    width: 0;
    background-color: ${colors.blue};
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: -8px;
    z-index: 2;
    transition: all 0.4s;
  }
  :hover {
    transform: translateY(-20px);
    scale: 1.2;
    .theme__bottom {
      opacity: 1;
    }
    .theme__line {
      width: 90%;
    }
  }
`;
