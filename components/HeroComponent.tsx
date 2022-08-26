import Image from "next/image";
import React, { PropsWithChildren } from "react";

type Props = {
  img: any;
  dark?: boolean;
  reverse?: boolean;
};

const HeroComponent = ({
  children,
  img,
  dark = false,
  reverse = false,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`${
        dark ? "bg-slate-800 text-white" : ""
      }  grid min-h-[50vh] gap-12 p-12 px-4 md:grid-cols-8 md:p-12 lg:min-h-[80vh] xl:px-32`}
    >
      <div className="flex items-center justify-center md:col-span-3  lg:justify-start xl:col-span-4">
        <div className="  text-base md:pb-0 lg:text-xl ">{children}</div>
      </div>
      <div
        className={`${
          reverse ? "md:order-first " : " md:justify-center"
        } flex items-center justify-start md:col-span-5 xl:col-span-4`}
      >
        <div className="flex h-3/4">
          <Image src={img} alt="Search Food" />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
