import React from "react";
import { ContainerBackgroundDefault } from "./style";

export function BackgroundDefault({
  children
}: {
  children: React.ReactNode | JSX.Element;
}): JSX.Element {
  return <ContainerBackgroundDefault>{children}</ContainerBackgroundDefault>;
}
