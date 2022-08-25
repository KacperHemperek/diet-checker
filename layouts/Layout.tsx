import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import NavBar from "../components/NavBar";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <main className="z-0 flex w-full flex-col justify-center pt-16">
        {children}
      </main>
    </>
  );
};

export default Layout;
