import React, { type ReactElement } from "react";
import { BackgroundDefault } from "@/layouts/BackgroundDefault";
import type { NextPageWithLayout } from "./_app";
import { ChoiceTheme } from "@/screens";

const ChoiceThemePage: NextPageWithLayout = () => {
  return <ChoiceTheme />;
};

ChoiceThemePage.getLayout = function getLayout(page: ReactElement) {
  return <BackgroundDefault>{page}</BackgroundDefault>;
};

export default ChoiceThemePage;
