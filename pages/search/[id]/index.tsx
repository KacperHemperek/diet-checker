import React from "react";
import Layout from "../../../layouts/Layout";
import data from "../../../public/recipe.json";
import Image from "next/image";
import RecipeTags from "../../../components/RecipeTags";

const About = () => {
  console.log(data.vegan);
  return (
    <Layout>
      <div className="mx-4 grid gap-12 pt-8 md:mx-12 md:grid-cols-12 xl:mx-32">
        <div className="grid gap-6 rounded-lg md:col-span-6 md:border md:p-10 lg:col-span-5 xl:col-span-4">
          <div>
            <img
              className="mx-auto mb-4 aspect-square w-1/2 rounded-full border-2 border-green-500 md:w-10/12 lg:w-3/4 xl:w-1/2"
              src={data.image}
              alt={data.title}
            />
            <h1 className="mx-auto w-full text-center text-3xl font-semibold">
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
        <div className="md:col-span-6 md:p-10 lg:col-span-7 xl:col-span-8 ">
          <h2 className="mb-6 text-2xl font-semibold">
            <span className="text-green-500">Recipe</span> summary
          </h2>
          <div dangerouslySetInnerHTML={{ __html: data.summary }} />
        </div>
      </div>
    </Layout>
  );
};

export default About;
