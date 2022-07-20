import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import HeroImage from "../public/undraw_diet_ghvw.svg";
import { RootState } from "../redux/store";
import HeroComponent from "./HeroComponent";
import LogInButton from "./LogInButton";

const AboutHero = () => {
  return (
    <>
      <HeroComponent img={HeroImage}>
        <h1 className=" mb-4 text-4xl text-green-500 md:mb-6 lg:text-5xl">
          Create Your Diet
        </h1>
        <p>
          This easy-to-use application saves you a lot of time by bringing the
          creation of a diet down to simply adding items to a list. You also
          don't have to count all the micro and macro elements yourself, we'll
          do it for you!
        </p>

        <LogInButton />
      </HeroComponent>
    </>
  );
};

export default AboutHero;
