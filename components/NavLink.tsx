import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
    children: React.ReactNode;
    href: string;
};

const NavLink = ({ children, href }: Props) => {
    const { pathname } = useRouter();

    return (
        <Link href={href}>
            <button
                className={`${
                    pathname === href
                        ? "font-semibold text-green-500"
                        : "hover:text-green-500"
                } w-max p-4 text-start   transition-all lg:mx-4 lg:p-0 lg:px-2`}
            >
                {children}
            </button>
        </Link>
    );
};

export default NavLink;
