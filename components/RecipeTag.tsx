import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

function RecipeTag({ title, children }: Props) {
  return (
    <div className="flex min-w-max items-center justify-center gap-2 text-sm">
      {children}
      <p>{title}</p>
    </div>
  );
}

export default RecipeTag;
