import React, { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode | ReactNode[];
  type?: "button" | "submit" | "reset";
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
  type = "button",
  href,
}: Props) {
  const mobileButton = (
    <button
      className="aspect-square rounded-full bg-green-500 fill-white p-4"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );

  const desktopButton = (
    <button
      className={`${
        empty
          ? "bg-white fill-green-500 text-green-500 hover:bg-green-500 hover:fill-white hover:text-white "
          : "bg-green-500 fill-white text-white hover:bg-green-500/90"
      } flex items-center gap-2 rounded-full border-2 border-green-500 px-4 py-1 transition-all`}
      onClick={onClick}
      type={type}
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
