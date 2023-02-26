import React, { type ReactElement } from "react";
import { BackgroundDefault } from "@/layouts/BackgroundDefault";
import type { NextPageWithLayout } from "../_app";
import { Subject } from "@/screens";

const SubjectPage: NextPageWithLayout = () => {
  return <Subject />;
};

SubjectPage.getLayout = function getLayout(page: ReactElement) {
  return <BackgroundDefault>{page}</BackgroundDefault>;
};

export default SubjectPage;
