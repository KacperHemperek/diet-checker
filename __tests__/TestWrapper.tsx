import React, { ReactNode } from "react";
import AppWrapper from "../app-wrappers/AppWrapper";

type Props = {
  children: ReactNode | ReactNode[];
};

function TestWrapper({ children }: Props) {
  return <AppWrapper>{children}</AppWrapper>;
}

export default TestWrapper;
