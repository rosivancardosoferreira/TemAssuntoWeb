import { Bangers } from "@/pages/_app";
import { colors } from "@/style/theme";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ContainerTitle = styled.h1`
  color: ${colors.light};
  font-family: ${Bangers?.style?.fontFamily};
  font-size: ${pxToRem(30)};
  letter-spacing: ${pxToRem(7)};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
`;
