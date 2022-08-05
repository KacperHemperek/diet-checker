import React from "react";
import Layout from "../../../layouts/Layout";
import data from "../../../public/recipe.json";
import RecipeTags from "../../../components/RecipeTags";
import { NextPage } from "next";

const RecipePage: NextPage = () => {
  console.log(data.vegan);
  return (
    <Layout>
      <div className="mx-4  md:mx-12 xl:mx-32">
        <div className="flex flex-col py-8">
          <div className="">
            <div className="max-w-1/2 flex flex-col items-center">
              <img
                className="mb-2 aspect-square w-28 rounded-full border-2 border-green-500 "
                src={data.image}
                alt={data.title}
              />
              <h1 className="text-center font-semibold">{data.title}</h1>
            </div>
            <RecipeTags
              isCheap={data.cheap}
              isDiaryFree={data.dairyFree}
              isGlutenFree={data.glutenFree}
              isVegan={data.vegan}
              isVegetarian={data.vegetarian}
            />
          </div>
          <div className="flex-grow border border-red-500">{/* charts */}</div>
        </div>

        <div className="grid grid-cols-12 gap-12 ">
          <div className="col-span-5 rounded-lg border p-4">
            <h2 className="mb-6 text-2xl font-semibold">Ingredients</h2>
            {data.extendedIngredients.map((item, index) => (
              <li
                className="mb-1 flex items-baseline gap-2 fill-green-500"
                key={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-4 w-4 translate-y-[2px]"
                >
                  <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                </svg>
                {item.original}
              </li>
            ))}
          </div>
          <div className="col-span-7 rounded-lg border p-4">
            <h2 className="mb-6 text-2xl font-semibold">
              <span className="text-green-500">Recipe</span> summary
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipePage;
