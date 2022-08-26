import React, { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-4 flex flex-col justify-center py-20 md:mx-12 xl:mx-32">
      {children}
    </div>
  );
};

export default Container;
