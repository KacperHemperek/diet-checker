import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
};

const NavLink = ({ children, href }: Props) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <Link href={href}>
      <button
        className={`${
          router.asPath === href
            ? "font-semibold text-green-500"
            : "hover:text-green-500"
        } py-4 text-start transition-all lg:mx-2 lg:py-0 lg:px-2`}
      >
        {children}
      </button>
    </Link>
  );
};

export default NavLink;
