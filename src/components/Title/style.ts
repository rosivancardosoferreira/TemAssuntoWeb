import { Bangers } from "@/pages/_app";
import { colors } from "@/style/theme";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ContainerTitle = styled.h1`
  color: ${colors.light};
  font-family: ${Bangers?.style?.fontFamily};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  @media screen and (max-width: 1023px) {
    padding: 0 20px;
    font-size: ${pxToRem(25)};
    letter-spacing: ${pxToRem(6)};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${pxToRem(30)};
    letter-spacing: ${pxToRem(7)};
  }
`;
