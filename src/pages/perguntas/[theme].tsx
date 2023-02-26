import React, { type ReactElement } from "react";
import { BackgroundDefault } from "@/layouts/BackgroundDefault";
import type { NextPageWithLayout } from "../_app";
import { Questions } from "@/screens";

const QuestionsPage: NextPageWithLayout = () => {
  return <Questions />;
};

QuestionsPage.getLayout = function getLayout(page: ReactElement) {
  return <BackgroundDefault>{page}</BackgroundDefault>;
};

export default QuestionsPage;
