import React from "react";
import Link from "next/link";

type Props = {
  mobile?: boolean;
};

const LogInButton = ({ mobile = false }: Props) => {
  return mobile ? (
    <Link href="/login">
      <button className="mb-4 aspect-square rounded-full border-2 border-green-500 bg-white fill-green-500 p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-6 w-6"
        >
          <path d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z" />
        </svg>
      </button>
    </Link>
  ) : (
    <Link href="/login">
      <button className="mr-4 rounded-full border-2 border-green-500  bg-white px-4 py-1 text-green-500 transition-all hover:bg-green-500/90 hover:text-white ">
        Log In
      </button>
    </Link>
  );
};

export default LogInButton;
