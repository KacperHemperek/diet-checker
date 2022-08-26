import Link from "next/link";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";

type Props = {
  href: string;
};

const NavLink = ({ children, href }: PropsWithChildren<Props>) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <button
        className={`${
          router.asPath === href ? " text-green-500" : "hover:text-green-500"
        } py-4 text-start text-xl font-semibold transition-all lg:mx-2 lg:py-0 lg:px-2 lg:text-base`}
      >
        {children}
      </button>
    </Link>
  );
};

export default NavLink;
