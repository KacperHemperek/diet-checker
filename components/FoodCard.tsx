import React, { useState } from "react";

type Props = {
  id: string;
  image: string;
  name: string;
  type: string;
  calories: number;
  favorite?: boolean;
};

const FoodCard = ({ id, image, name, type, calories, favorite }: Props) => {
  const [likeHovered, setLikeHovered] = useState<boolean>(false);

  const svgStyle = "w-4 h-4 transition";

  const toggleFavorite = () => {
    console.log("toggle favorite");
  };

  return (
    <div className="group transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-xl">
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
        <div className="mt-4 flex items-center justify-between">
          <div className="text-gray-700">{calories} kcal</div>
          <button
            onClick={toggleFavorite}
            className="fill-pink-600 transition hover:fill-pink-600/80"
            onMouseOver={() => setLikeHovered(true)}
            onMouseOut={() => setLikeHovered(false)}
          >
            {favorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={svgStyle}
              >
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
              </svg>
            ) : likeHovered ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={svgStyle}
              >
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={svgStyle}
              >
                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
