import React, { type ReactElement } from "react";
import { BackgroundDefault } from "@/layouts/BackgroundDefault";
import type { NextPageWithLayout } from "./_app";
import { Home } from "@/screens";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <BackgroundDefault>{page}</BackgroundDefault>;
};

export default HomePage;
