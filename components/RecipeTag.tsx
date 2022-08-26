import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
  label: boolean;
};

function RecipeTag({ title, children, label }: PropsWithChildren<Props>) {
  return (
    <div className="flex min-w-max items-center justify-center gap-2 text-sm">
      {children}
      {label && <p>{title}</p>}
    </div>
  );
}

export default RecipeTag;
