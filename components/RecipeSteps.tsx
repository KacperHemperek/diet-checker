import React from "react";

type Props = {
  array: any[];
};

const RecipeSteps = ({ array }: Props) => {
  return (
    <div className="py-4 md:col-span-6 lg:col-span-7">
      <h2 className="mb-6 text-2xl font-semibold xl:text-3xl">
        <span className="text-green-500">Recipe</span> steps
      </h2>
      <ol>
        {array.map((item, index) => (
          <li className="mb-1 xl:text-lg">
            <span className="font-semibold text-green-500 ">
              {index + 1 + ". "}
            </span>{" "}
            {item.step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeSteps;
