import { Bangers } from "@/pages/_app";
import { colors } from "@/style/theme";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ContainerHome = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 40px;
  height: 100%;
  width: 100%;
  .home__option {
    color: ${colors.light};
    font-family: ${Bangers?.style?.fontFamily};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
    transition: all 0.3s;
    border: none;
    :hover {
      transform: translateY(-15px);
    }
  }

  @media screen and (max-width: 1023px) {
    .home__option {
      font-size: ${pxToRem(35)};
      letter-spacing: ${pxToRem(5)};
    }
  }

  @media screen and (min-width: 1024px) {
    .home__option {
      font-size: ${pxToRem(55)};
      letter-spacing: ${pxToRem(7)};
    }
  }
`;
