import React from "react";
import NavBar from "../components/NavBar";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main
        data-testid="main"
        className="z-0 flex w-full flex-col justify-center pt-16"
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
