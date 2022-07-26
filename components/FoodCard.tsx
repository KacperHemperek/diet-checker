import React from "react";

type Props = {
  image: string;
  name: string;
  type: string;
  calories: string;
};

const FoodCard = ({ image, name, type, calories }: Props) => {
  return (
    <div className="group transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          className="object-cover transition duration-500  group-hover:scale-105"
          src={image}
          alt="recipe thumbnail"
        />
      </div>

      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-700">{name}</h1>
        <div className="mt-2 w-fit rounded-lg border border-green-500 px-1  text-sm font-semibold text-green-500">
          {type}
        </div>
        <div className="mt-4 ">
          <div className="text-gray-700">{calories} kcal</div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
