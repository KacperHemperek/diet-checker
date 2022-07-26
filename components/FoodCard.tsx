import React from "react";

type Props = {
  image: string;
  name: string;
  type: string;
  calories: string;
};

const FoodCard = ({ image, name, type, calories }: Props) => {
  return (
    <div className="items-center justify-center bg-gray-100">
      <div className="w- transform rounded-xl bg-white p-6 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <img className="rounded-t-md object-cover" src={image} alt="" />
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-700">{name}</h1>
          <p className="mt-2 text-sm text-gray-700">{type}</p>
          <div className="mt-4 mb-2 grid-cols-2 justify-between pl-4 pr-2">
            <div className="text-xl font-semibold text-gray-700">
              {calories} kcal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
