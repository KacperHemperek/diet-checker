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
              <div className="relative">
                <img
                  className="mb-2 aspect-square w-28 rounded-full lg:mb-4"
                  src={data.image}
                  alt={data.title}
                />
                <div className="absolute bottom-2 right-2 z-10 rounded-full bg-white px-1.5 pt-1 lg:bottom-3.5 lg:right-3">
                  <button className="  fill-pink-600 transition hover:fill-pink-600/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-6 w-6 transition"
                    >
                      <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                    </svg>
                  </button>
                </div>
              </div>
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
