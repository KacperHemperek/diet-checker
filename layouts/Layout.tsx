import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import NavLink from "../components/NavLink";

type Props = {
    children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: Props) => {
    const router = useRouter();

    return (
        <>
            <NavBar />
            <main className="flex w-full flex-col justify-center pt-16">
                {children}
            </main>
        </>
    );
};

export default Layout;
