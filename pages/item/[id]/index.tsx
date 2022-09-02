import { useCallback, useEffect, useState } from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { doc, onSnapshot } from "firebase/firestore";

import RecipePage from "../../../interface/RecipePage";

import { getRecipePage } from "../../api/recipe_page";
import { db } from "../../../utils/firebase.utils";

import Layout from "../../../layouts/Layout";

import RecipeTags from "../../../components/RecipeTags";
import IngredientsList from "../../../components/IngredientsList";
import RecipeSteps from "../../../components/RecipeSteps";
import CustomPieChart from "../../../components/CustomPieChart";
import FavButton from "../../../components/FavButton";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { UserInformation } from "../../../interface/UserInformation";
import { Recipe } from "../../../interface/Recipe";
import Image from "next/image";

const Recipe: NextPage<RecipePage> = (props) => {
  const router = useRouter();
  const uid = useSelector((state: RootState) => state.user.uid);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [favoriteLoading, setFavoriteLoading] = useState<boolean>(true);
  const recipeId = Number(router.query.id);

  useEffect(() => {
    const userRef = doc(db, "users", String(uid));

    const unsub = onSnapshot(userRef, (doc) => {
      setFavoriteLoading(true);
      const data = doc.data() as UserInformation;

      if (data.recipes?.some((item: Recipe) => item.id === recipeId)) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
      setFavoriteLoading(false);
    });
    return () => {
      unsub();
    };
  }, [recipeId]);

  const toggleFavorite = useCallback(async () => {
    setFavoriteLoading(true);
    try {
      await fetch(`/api/toggle_favorite?uid=${uid}&itemId=${recipeId}`, {
        method: "PUT",
      });
    } catch (error) {
      console.error(error);
    }
    setFavoriteLoading(false);
  }, []);

  return (
    <Layout>
      <div className="mx-4 pb-20 md:mx-12 xl:mx-32">
        <div className="flex flex-col py-8 lg:flex-row">
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <div className="max-w-1/2   flex flex-col items-center justify-center">
              <div className="relative mb-2 lg:mb-4">
                <Image
                  src={props.img}
                  alt={props.name}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  className=" rounded-full "
                />

                <div className="absolute bottom-0 right-0 z-10 flex aspect-square rounded-full bg-white p-1.5 ">
                  <FavButton
                    favorite={favorite}
                    favoriteLoading={favoriteLoading}
                    toggleFavorite={toggleFavorite}
                  />
                </div>
              </div>
              <h1 className="max-w-[250px] text-center text-lg font-semibold md:text-xl">
                {props.name}
              </h1>
            </div>
            <RecipeTags
              isCheap={props.cheap}
              isDiaryFree={props.diaryFree}
              isGlutenFree={props.glutenFree}
              isVegan={props.vegan}
              isVegetarian={props.vegetarian}
            />
          </div>
          <div className="flex flex-grow flex-row flex-wrap justify-center md:justify-around">
            <div className="mx-3 my-4 h-32 w-32 xl:h-40  ">
              <CustomPieChart
                name="Calories"
                demand={2000}
                content={props.cal}
                color="#22c55e"
              />
            </div>
            <div className="mx-3 my-4 h-32 w-32 xl:h-40  ">
              <CustomPieChart
                name="Proteins"
                demand={50}
                content={props.protein}
                color="#FF0000"
              />
            </div>
            <div className="mx-3 my-4 h-32 w-32 xl:h-40  ">
              <CustomPieChart
                name="Carbohydrates"
                demand={275}
                content={props.carbohydrates}
                color="#8B008B"
              />
            </div>
            <div className="mx-3 my-4 h-32 w-32 xl:h-40  ">
              <CustomPieChart
                name="Fat"
                demand={100}
                content={props.fat}
                color="#F9512D"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 md:gap-12 ">
          <IngredientsList array={props.extendedIngredients} />
          <RecipeSteps steps={props.steps} />
        </div>
      </div>
    </Layout>
  );
};

export default Recipe;

export async function getServerSideProps(ctx: NextPageContext) {
  const data = await getRecipePage(String(ctx.query.id));

  return {
    props: data,
  };
}
