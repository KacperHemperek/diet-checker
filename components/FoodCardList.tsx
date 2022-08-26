import autoAnimate from "@formkit/auto-animate";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Recipe } from "../interface/Recipe";
import { UserInformation } from "../interface/UserInformation";
import { RootState } from "../redux/store";
import { db } from "../utils/firebase.utils";
import FoodCard, { FoodCardProps } from "./FoodCard";

type Props = {
  FoodCardList: Recipe[];
  placeholderArray?: { id: number }[];
  size?: Sizes;
};

type Sizes = "sm" | "md" | "lg";

const FoodCardList = ({
  FoodCardList,
  // array for loading skeletons
  placeholderArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  size = "sm",
}: Props) => {
  const [listWithFavorite, setListWithFavorite] = useState<FoodCardProps[]>([]);
  const uid = useSelector((state: RootState) => state.user.uid);

  const gridClasses = [
    {
      name: "sm",
      className: " grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ",
    },
    {
      name: "md",
      className: " grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
    },
    {
      name: "lg",
      className: " grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ",
    },
  ] as { name: Sizes; className: string }[];

  useEffect(() => {
    console.log(FoodCardList);

    const userRef = doc(db, "users", String(uid));
    const unsub = onSnapshot(userRef, (doc) => {
      const data = doc.data() as UserInformation;

      if (!data?.recipes) {
        return;
      }
      const ids = data?.recipes.map((item) => item.id);

      const temp: FoodCardProps[] = FoodCardList?.map((item) => {
        return { ...item, favorite: ids.includes(item.id) };
      });
      setListWithFavorite(temp);
    });

    return () => {
      unsub();
    };
  }, [FoodCardList]);

  const listRef = useRef<HTMLDivElement>(null);
  //animate list of favorites
  if (listRef.current) {
    autoAnimate(listRef.current);
  }

  return (
    <div
      className={`grid w-full gap-6 ${
        gridClasses.find((item) => item.name === size)?.className
      } `}
      ref={listRef}
    >
      {listWithFavorite?.length > 0
        ? listWithFavorite.map((item) => <FoodCard key={item.id} {...item} />)
        : placeholderArray.map((item) => <FoodCard {...item} key={item.id} />)}
    </div>
  );
};

export default FoodCardList;
