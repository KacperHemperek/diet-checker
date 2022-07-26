import React, { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode | ReactNode[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  mobile?: boolean;
  empty?: boolean;
  href?: string;
};

function CustomButton({
  children,
  onClick,
  mobile = false,
  empty = false,
  href,
}: Props) {
  const mobileButton = (
    <button
      className="aspect-square rounded-full bg-green-500 fill-white p-4"
      onClick={onClick}
    >
      {children}
    </button>
  );

  const desktopButton = (
    <button
      className={`${
        empty
          ? "text-green-500"
          : "bg-green-500 text-white hover:bg-green-500/90"
      } rounded-full border-2 border-green-500  px-4 py-1 transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  return mobile ? (
    href ? (
      <Link href={href}>{mobileButton}</Link>
    ) : (
      mobileButton
    )
  ) : href ? (
    <Link href={href}>{desktopButton}</Link>
  ) : (
    desktopButton
  );
}

export default CustomButton;
