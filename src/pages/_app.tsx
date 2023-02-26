import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/style/ThemeProvider";
import GlobalStyle from "@/style/global";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
