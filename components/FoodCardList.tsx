import autoAnimate from "@formkit/auto-animate";
import { doc, DocumentSnapshot, onSnapshot } from "firebase/firestore";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Recipe } from "../interface/Recipe";
import { UserInformation } from "../interface/UserInformation";
import { RootState } from "../redux/store";
import { db } from "../utils/firebase.utils";
import FoodCard, { FoodCardProps } from "./FoodCard";

type Props = {
  FoodCardList: Recipe[];
  smCols?: number;
  mdCols?: number;
  lgCols?: number;
  xlCols?: number;
};

const FoodCardList = ({
  FoodCardList,
  mdCols = 2,
  lgCols = 2,
  smCols = 3,
  xlCols = 4,
}: Props) => {
  const [listWithFavorite, setListWithFavorite] = useState<FoodCardProps[]>([]);
  const uid = useSelector((state: RootState) => state.user.uid);

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
      className={`grid grid-cols-${smCols} gap-6 md:grid-cols-${mdCols}  lg:grid-cols-${lgCols} xl:grid-cols-${xlCols}`}
      ref={listRef}
    >
      {listWithFavorite.map((item) => (
        <FoodCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FoodCardList;
