import React from "react";

type Props = {
  array: any[];
};

const IngredientsList = ({ array }: Props) => {
  return (
    <div className="py-4 md:col-span-6 lg:col-span-5">
      <h2 className="mb-6 text-2xl font-semibold xl:text-3xl">Ingredients</h2>
      {array.map((item, index) => (
        <li
          className="mb-1 flex items-baseline gap-2 fill-green-500 xl:text-lg"
          key={index}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-4 w-4 translate-y-[2px]"
            >
              <path d="M192 16c-106 0-192 182-192 288c0 106 85.1 192 192 192c105.1 0 192-85.1 192-192C384 198 297.1 16 192 16zM160.1 138C128.6 177.1 96 249.8 96 304C96 312.8 88.84 320 80 320S64 312.8 64 304c0-63.56 36.7-143.3 71.22-186c5.562-6.906 15.64-7.969 22.5-2.406C164.6 121.1 165.7 131.2 160.1 138z" />
            </svg>
          </div>
          {item}
        </li>
      ))}
    </div>
  );
};

export default IngredientsList;
