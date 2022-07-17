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
      <div className="grid items-start gap-4 md:grid-cols-3">
        <div className="grid p-4 text-center  text-base  md:grid-rows-2 md:pb-4 lg:grid-rows-3">
          <div className="mx-auto w-1/4 fill-green-500 md:w-2/4 lg:w-1/4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 112V128C256 136.8 248.8 144 240 144C195.8 144 160 108.2 160 64V48C160 39.16 167.2 32 176 32C220.2 32 256 67.82 256 112zM104 64C117.3 64 128 74.75 128 88C128 101.3 117.3 112 104 112H56C42.75 112 32 101.3 32 88C32 74.75 42.75 64 56 64H104zM136 136C149.3 136 160 146.7 160 160C160 173.3 149.3 184 136 184H24C10.75 184 0 173.3 0 160C0 146.7 10.75 136 24 136H136zM32 232C32 218.7 42.75 208 56 208H104C117.3 208 128 218.7 128 232C128 245.3 117.3 256 104 256H56C42.75 256 32 245.3 32 232zM272 48C272 39.16 279.2 32 288 32C332.2 32 368 67.82 368 112V128C368 136.8 360.8 144 352 144C307.8 144 272 108.2 272 64V48zM480 112V128C480 136.8 472.8 144 464 144C419.8 144 384 108.2 384 64V48C384 39.16 391.2 32 400 32C444.2 32 480 67.82 480 112zM480 208C480 252.2 444.2 288 400 288C391.2 288 384 280.8 384 272V256C384 211.8 419.8 176 464 176C472.8 176 480 183.2 480 192V208zM352 176C360.8 176 368 183.2 368 192V208C368 252.2 332.2 288 288 288C279.2 288 272 280.8 272 272V256C272 211.8 307.8 176 352 176zM256 208C256 252.2 220.2 288 176 288C167.2 288 160 280.8 160 272V256C160 211.8 195.8 176 240 176C248.8 176 256 183.2 256 192V208zM0 352C0 334.3 14.33 320 32 320H480C497.7 320 512 334.3 512 352C512 411.7 471.1 461.9 415.8 476C415.9 477.3 416 478.7 416 480C416 497.7 401.7 512 384 512H128C110.3 512 96 497.7 96 480C96 478.7 96.08 477.3 96.24 476C40.91 461.9 0 411.7 0 352V352z" />
            </svg>
          </div>
          <h3 className=" text-4xl font-semibold text-green-500 md:mb-6 lg:text-5xl">
            Fill Nutritional Goals
          </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid p-4 text-center  text-base  md:grid-rows-2 md:pb-4 lg:grid-rows-3">
          <div className="mx-auto w-1/4 fill-green-500 pb-2.5 md:w-2/4 lg:w-1/4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M416.1 128.1C407.6 138.3 392.4 138.3 383 128.1C373.7 119.6 373.7 104.4 383 95.03L471 7.03C480.4-2.343 495.6-2.343 504.1 7.03C514.3 16.4 514.3 31.6 504.1 40.97L416.1 128.1zM327.2 230.1L295.3 261.1C312.5 263.6 329.5 268.8 345 277.4C329.1 303.9 320 334.9 320 368C320 369 320 370.1 320 371.1C290.9 375.6 260 366.6 237.6 344.1L225.4 331.9L193.5 363.8C221.1 366.5 249.7 378.8 271.5 400.7L294.2 423.3L271.5 445.9C234 483.4 173.3 483.4 135.8 445.9L123.5 433.7L54.63 502.6C42.13 515.1 21.87 515.1 9.372 502.6C-3.124 490.1-3.124 469.9 9.372 457.4L78.29 388.5L67.88 378C30.39 340.6 30.39 279.8 67.88 242.3L90.51 219.6L113.1 242.3C134.1 263.3 146.3 289.7 149.7 317.1L180.1 286.6L169.7 276.2C132.2 238.7 132.2 177.9 169.7 140.5L192.3 117.8L214.1 140.5C235.1 161.4 248.1 187.9 251.5 215.3L281.9 184.8L271.5 174.4C234 136.9 234 76.12 271.5 38.63L294.2 15.1L316.8 38.63C321.3 43.15 325.4 47.94 329.1 52.93L375 7.029C384.4-2.343 399.6-2.343 408.1 7.029C418.3 16.4 418.3 31.6 408.1 40.97L350.7 99.2C355.9 120.7 355.4 143.2 349.3 164.5C369.6 158.7 391.1 157.1 411.7 162.4L471 103C480.4 93.66 495.6 93.66 504.1 103C514.3 112.4 514.3 127.6 504.1 136.1L458.8 183.1C463.3 186.3 467.6 189.8 471.7 193.7C426.4 199.9 386.5 223.5 359.1 257.4C352 253.3 345.4 248.3 339.4 242.3L327.2 230.1zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464zM479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288z" />
            </svg>
          </div>
          <h3 className=" text-4xl font-semibold text-green-500 md:mb-6 lg:text-5xl">
            Diet Any Way You Want
          </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid p-4 text-center  text-base  md:grid-rows-2 md:pb-4 lg:grid-rows-3 ">
          <div className="mx-auto w-1/4 fill-green-500 md:w-2/4 lg:w-1/4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z" />
            </svg>
          </div>
          <h3 className=" text-4xl font-semibold text-green-500 lg:text-5xl">
            Easy To Use
          </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
