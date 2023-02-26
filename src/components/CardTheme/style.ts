import { Roboto } from "@/pages/_app";
import { colors } from "@/style/theme";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ContainerCardTheme = styled.div`
  width: fit-content;
  margin: auto;
  border: 8px solid #ff9800;
  border-radius: 15px;
  position: relative;
  background-color: #ff9800;
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
      background-color: #03a9f4;
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
  :hover {
    .theme__bottom {
      opacity: 1;
    }
    transform: translateY(-20px);
    scale: 1.2;
  }
`;
