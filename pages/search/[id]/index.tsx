import React from "react";
import Layout from "../../../layouts/Layout";
import data from "../../../public/recipe.json";
import RecipeTags from "../../../components/RecipeTags";
import { NextPage } from "next";
import IngredientsList from "../../../components/IngredientsList";
import RecipeSummary from "../../../components/RecipeSummary";

const RecipePage: NextPage = () => {
  console.log(data.vegan);
  return (
    <Layout>
      <div className="mx-4  md:mx-12 xl:mx-32">
        <div className="flex flex-col py-8 lg:flex-row">
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-1/2 flex flex-col items-center">
              <img
                className="mb-2 aspect-square w-28 rounded-full border-2 border-green-500 lg:mb-4 "
                src={data.image}
                alt={data.title}
              />
              <h1 className="text-center font-semibold lg:text-xl">
                {data.title}
              </h1>
            </div>
            <RecipeTags
              isCheap={data.cheap}
              isDiaryFree={data.dairyFree}
              isGlutenFree={data.glutenFree}
              isVegan={data.vegan}
              isVegetarian={data.vegetarian}
            />
          </div>
          <div className="flex flex-grow flex-row flex-wrap justify-center  lg:justify-around">
            {/* charts */}
            <div className="mx-5 my-4 h-32 w-32 border border-green-500"></div>
            <div className="mx-5 my-4 h-32 w-32 border border-green-500"></div>
            <div className="mx-5 my-4 h-32 w-32 border border-green-500"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 md:gap-12 ">
          <IngredientsList array={data.extendedIngredients} />
          <RecipeSummary />
        </div>
      </div>
    </Layout>
  );
};

export default RecipePage;
