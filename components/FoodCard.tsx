import { useCallback, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import FavButton from "./FavButton";
import RecipeTags from "./RecipeTags";

type Props = {
  id: number;
  image: string;
  name: string;
  calories: number;
  vegan?: boolean;
  vegetarian?: boolean;
  cheap?: boolean;
  dairyfree?: boolean;
  glutenfree?: boolean;
  favorite?: boolean;
};

const FoodCard = ({
  id,
  image,
  name,
  calories,
  favorite = false,
  vegan = false,
  vegetarian = false,
  cheap = false,
  dairyfree = false,
  glutenfree = false,
}: Props) => {
  // const url = `/search/${id}`;
  const [loading, setLoading] = useState<boolean>(false);

  const uid = useSelector((state: RootState) => state.user.uid);

  const toggleFavorite = useCallback(async () => {
    setLoading(true);
    console.log(id);
    try {
      await fetch(`/api/toggle_favorite?uid=${uid}&itemId=${id}`, {
        method: "PUT",
      });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, []);

  return (
    <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          className="h-full object-fill transition duration-500 group-hover:scale-105"
          src={image}
          alt="recipe thumbnail"
        />
      </div>

      <div className="flex flex-grow flex-col justify-between p-4">
        <div>
          <h1 className="text-lg font-bold text-gray-700">{name}</h1>
          <RecipeTags
            isCheap={cheap}
            isDiaryFree={dairyfree}
            isGlutenFree={glutenfree}
            isVegan={vegan}
            isVegetarian={vegetarian}
            card={true}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-gray-700">{calories} kcal</div>

          <FavButton
            toggleFavorite={toggleFavorite}
            favoriteLoading={loading}
            favorite={favorite}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
