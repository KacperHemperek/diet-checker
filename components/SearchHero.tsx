import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "../public/undraw_shopping_app_flsj.svg";
import HeroComponent from "./HeroComponent";
import SquareCustomButton from "./SquareCustomButton";
const SearchHero = () => {
  return (
    <HeroComponent reverse={true} dark={true} img={HeroImage}>
      <h1 className=" mb-4 text-4xl text-green-500 md:mb-6 lg:text-6xl">
        Search
      </h1>
      <p>
        Find your new favourite products out of thousands of items on our site,{" "}
        <span className="text-green-500">completly free</span>
      </p>
      <SquareCustomButton text="Go" href="/search" />
    </HeroComponent>
  );
};

export default SearchHero;
