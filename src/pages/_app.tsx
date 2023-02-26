import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/style/ThemeProvider";
import GlobalStyle from "@/style/global";

import {
  Bangers as BangersFont,
  Roboto as RobotoFont
} from "@next/font/google";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export const Bangers = BangersFont({ weight: "400", subsets: ["latin"] });
export const Roboto = RobotoFont({
  weight: ["400", "500"],
  subsets: ["latin"]
});

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <ThemeProvider>
      {getLayout(<Component {...pageProps} />)}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
