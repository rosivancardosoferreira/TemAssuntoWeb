import { Bangers } from "@/pages/_app";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerHome = styled.section`
  border: 2px solid red;
  h1 {
    color: ${colors.contrast};
    font-family: ${Bangers?.style?.fontFamily};
  }
`;
