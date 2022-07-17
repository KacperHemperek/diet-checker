import Link from "next/link";
import React from "react";
import HeroImage from "../public/undraw_diet_ghvw.svg";
import HeroComponent from "./HeroComponent";

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

        <Link href="/">
          <button className="group mt-8 flex items-baseline gap-2 rounded-lg border border-green-500 fill-green-500 px-4 py-1 text-green-500 transition-all hover:bg-green-500 hover:fill-white hover:text-white">
            Create Account{" "}
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
      <div className="mt-5 grid items-center gap-4 md:grid-cols-3">
        <div className="p-12 text-center text-base  md:pr-8 md:pb-0 lg:text-xl">
          <div className="w-2/4 fill-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 112V128C256 136.8 248.8 144 240 144C195.8 144 160 108.2 160 64V48C160 39.16 167.2 32 176 32C220.2 32 256 67.82 256 112zM104 64C117.3 64 128 74.75 128 88C128 101.3 117.3 112 104 112H56C42.75 112 32 101.3 32 88C32 74.75 42.75 64 56 64H104zM136 136C149.3 136 160 146.7 160 160C160 173.3 149.3 184 136 184H24C10.75 184 0 173.3 0 160C0 146.7 10.75 136 24 136H136zM32 232C32 218.7 42.75 208 56 208H104C117.3 208 128 218.7 128 232C128 245.3 117.3 256 104 256H56C42.75 256 32 245.3 32 232zM272 48C272 39.16 279.2 32 288 32C332.2 32 368 67.82 368 112V128C368 136.8 360.8 144 352 144C307.8 144 272 108.2 272 64V48zM480 112V128C480 136.8 472.8 144 464 144C419.8 144 384 108.2 384 64V48C384 39.16 391.2 32 400 32C444.2 32 480 67.82 480 112zM480 208C480 252.2 444.2 288 400 288C391.2 288 384 280.8 384 272V256C384 211.8 419.8 176 464 176C472.8 176 480 183.2 480 192V208zM352 176C360.8 176 368 183.2 368 192V208C368 252.2 332.2 288 288 288C279.2 288 272 280.8 272 272V256C272 211.8 307.8 176 352 176zM256 208C256 252.2 220.2 288 176 288C167.2 288 160 280.8 160 272V256C160 211.8 195.8 176 240 176C248.8 176 256 183.2 256 192V208zM0 352C0 334.3 14.33 320 32 320H480C497.7 320 512 334.3 512 352C512 411.7 471.1 461.9 415.8 476C415.9 477.3 416 478.7 416 480C416 497.7 401.7 512 384 512H128C110.3 512 96 497.7 96 480C96 478.7 96.08 477.3 96.24 476C40.91 461.9 0 411.7 0 352V352z" />
            </svg>
          </div>
          <h1 className=" mb-4 text-4xl text-green-500 md:mb-6 lg:text-5xl">
            Lorem ipsum
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="p-12 text-center text-base  md:pr-8 md:pb-0 lg:text-xl">
          <h1 className=" mb-4 text-4xl text-green-500 md:mb-6 lg:text-5xl">
            Lorem ipsum
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="p-12 text-center text-base  md:pr-8 md:pb-0 lg:text-xl">
          <h1 className=" mb-4 text-4xl text-green-500 md:mb-6 lg:text-5xl">
            Lorem ipsum
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
