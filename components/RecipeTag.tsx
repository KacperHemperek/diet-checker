import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  label: boolean;
};

function RecipeTag({ title, children, label }: Props) {
  return (
    <div className="flex min-w-max items-center justify-center gap-2 text-sm">
      {children}
      {label && <p>{title}</p>}
    </div>
  );
}

export default RecipeTag;
