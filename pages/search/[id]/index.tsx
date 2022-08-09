import React from "react";
import Layout from "../../../layouts/Layout";
import data from "../../../public/recipe.json";
import RecipeTags from "../../../components/RecipeTags";
import { NextPage } from "next";
import IngredientsList from "../../../components/IngredientsList";
import RecipeSteps from "../../../components/RecipeSteps";
import CustomPieChart from "../../../components/CustomPieChart";

const RecipePage: NextPage = () => {
  console.log(data.vegan);
  return (
    <Layout>
      <div className="mx-4  md:mx-12 xl:mx-32">
        <div className="flex flex-col py-8 lg:flex-row">
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <div className="max-w-1/2 lg: flex flex-col items-center justify-center">
              <img
                className="mb-2 aspect-square w-28 rounded-full lg:mb-4 "
                src={data.image}
                alt={data.title}
              />
              <h1 className="max-w-[250px] text-center text-xl font-semibold lg:text-2xl">
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
          <div className="flex flex-grow flex-row flex-wrap justify-center md:justify-around">
            <div className="mx-3 my-4 h-32 w-32 xl:h-40  ">
              <CustomPieChart
                name="Calories"
                demand={2000}
                content={
                  data.nutrition.nutrients.find(
                    (item) => item.name === "Calories"
                  )?.amount
                }
                color="#22c55e"
              />
            </div>
            <div className="mx-3 my-4 h-32 w-32 xl:h-40  ">
              <CustomPieChart
                name="Proteins"
                demand={50}
                content={
                  data.nutrition.nutrients.find(
                    (item) => item.name === "Protein"
                  )?.amount
                }
                color="#FF0000"
              />
            </div>
            <div className="mx-3 my-4 h-32 w-32 xl:h-40  ">
              <CustomPieChart
                name="Carbohydrates"
                demand={275}
                content={
                  data.nutrition.nutrients.find(
                    (item) => item.name === "Carbohydrates"
                  )?.amount
                }
                color="#8B008B"
              />
            </div>
            <div className="mx-3 my-4 h-32 w-32 xl:h-40  ">
              <CustomPieChart
                name="Fat"
                demand={100}
                content={
                  data.nutrition.nutrients.find((item) => item.name === "Fat")
                    ?.amount
                }
                color="#F9512D"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 md:gap-12 ">
          <IngredientsList array={data.extendedIngredients} />
          <RecipeSteps array={data.analyzedInstructions[0].steps} />
        </div>
      </div>
    </Layout>
  );
};

export default RecipePage;
