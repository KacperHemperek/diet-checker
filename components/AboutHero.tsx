import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import HeroImage from "../public/undraw_diet_ghvw.svg";
import { RootState } from "../redux/store";
import HeroComponent from "./HeroComponent";
import SquareCustomButton from "./SquareCustomButton";

const AboutHero = () => {
  const uid = useSelector((state: RootState) => state.user.uid);
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
        {uid ? (
          <SquareCustomButton text="Your Diets" href={`account/${uid}`} />
        ) : (
          <SquareCustomButton text="Create Account" href="/register" />
        )}
      </HeroComponent>
    </>
  );
};

export default AboutHero;
