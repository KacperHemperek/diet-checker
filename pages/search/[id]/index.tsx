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

        <div className="md:col-span-6 md:p-10 lg:col-span-7 xl:col-span-8 ">
          <h2 className="mb-6 text-2xl font-semibold">
            <span className="text-green-500">Recipe</span> summary
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default RecipePage;
