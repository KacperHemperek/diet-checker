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
                <img
                  src={props.img}
                  alt={props.name}
                  className="  h-28 w-28 rounded-full "
                />

                <div className="absolute bottom-0 right-0 z-10 flex aspect-square rounded-full bg-white p-1.5 ">
                  <button
                    disabled={favoriteLoading}
                    className="  h-6 w-6 fill-pink-600 transition hover:fill-pink-600/80"
                    onClick={toggleFavorite}
                  >
                    {favoriteLoading ? (
                      <FavButton
                        recipeId={recipeId}
                        uid={uid}
                        favorite={favorite}
                        favoriteLoading={favoriteLoading}
                        toggleFavorite={toggleFavorite}
                      />
                    ) : favorite ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-6 w-6 transition"
                      >
                        <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-6 w-6 transition"
                      >
                        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <h1 className="max-w-[250px] text-center text-lg font-semibold md:text-xl">
                {props.name}
              </h1>
            </div>
            <RecipeTags
              isCheap={props.cheap}
              isDiaryFree={props.dairyFree}
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
  console.log({ id: ctx.query.id });
  const data = await getRecipePage(String(ctx.query.id));

  return {
    props: data,
  };
}
