import Link from "next/link";
import React from "react";

const NavLogo = () => {
    return (
        <Link href="/">
            <button className="text-xl font-semibold lg:text-2xl">
                <span className="text-green-400 ">Diet </span>
                Checker
            </button>
        </Link>
    );
};

export default NavLogo;
