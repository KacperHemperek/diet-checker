import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "../public/undraw_shopping_app_flsj.svg";
import HeroComponent from "./HeroComponent";
const SearchHero = () => {
    return (
        <HeroComponent reverse={true} dark={true} img={HeroImage}>
            <h1 className=" mb-4 text-4xl text-green-500 md:mb-6 lg:text-6xl">
                Search
            </h1>
            <p>
                Find your new favourite products out of thousands of items on
                our site,{" "}
                <span className="text-green-500 underline">completly free</span>
            </p>
            <Link href="/">
                <button className="group mt-6 flex items-baseline gap-2 rounded-lg border border-green-500 fill-green-500 px-4 py-1 text-green-500 transition-all hover:bg-green-500 hover:fill-white hover:text-white">
                    Go{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-3 w-3 transition-transform duration-1000 group-hover:translate-x-1"
                    >
                        <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                    </svg>
                </button>
            </Link>
        </HeroComponent>
    );
};

export default SearchHero;
