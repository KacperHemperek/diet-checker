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
  FoodCardList: FoodCardProps[];
  placeholderArray?: { id: number }[];
  size?: Sizes;
  loading?: boolean;
  alignLeft?: boolean;
};

type Sizes = "sm" | "md" | "lg";

const FoodCardList = ({
  FoodCardList,
  // array for loading skeletons
  placeholderArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  size = "sm",
  loading = false,
  alignLeft = true,
}: Props) => {
  const gridClasses = [
    {
      name: "sm",
      className: " grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ",
      colspan: " col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 ",
    },
    {
      name: "md",
      className: " grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
      colspan: " col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 ",
    },
    {
      name: "lg",
      className: " grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ",
      colspan: " col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-6 ",
    },
  ] as { name: Sizes; className: string; colspan: string }[];

  const listRef = useRef<HTMLDivElement>(null);

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
      {FoodCardList?.length > 0 ? (
        FoodCardList.map((item) => <FoodCard key={item.id} {...item} />)
      ) : loading ? (
        placeholderArray.map((item) => <FoodCard key={item.id} {...item} />)
      ) : (
        <div
          className={
            gridClasses.find((item) => item.name === size)?.colspan +
            (alignLeft ? " justify-start " : " justify-center ") +
            "flex w-full text-xl"
          }
        >
          <div className="flex gap-2">
            <p>
              Couldn&apos;t find any{" "}
              <span className="text-green-500"> recipes</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 w-6 translate-y-1 fill-green-500"
            >
              <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodCardList;
