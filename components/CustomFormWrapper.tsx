import React, { PropsWithChildren } from "react";

type Props = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  description?: React.ReactNode;
};

const CustomFormWrapper = ({
  children,
  onSubmit,
  description,
}: PropsWithChildren<Props>) => {
  return (
    <form
      className={`${
        description ? "lg:w-4/5 xl:w-1/2" : "lg:w-1/2 xl:w-1/5"
      } mb-8 flex w-full md:mb-0 md:w-3/5`}
      onSubmit={onSubmit}
    >
      {description && (
        <div className="hidden w-1/2 rounded-l-lg border-y border-l lg:flex">
          {description}
        </div>
      )}
      <div
        className={`${
          description ? "lg:w-1/2 lg:rounded-l-none" : "lg:w-full"
        } w-full rounded-lg md:border md:p-8`}
      >
        {children}
      </div>
    </form>
  );
};

export default CustomFormWrapper;
