import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import NavLinksGroup from "./NavLinksGroup";
import NavLogo from "./NavLogo";

const NavBar = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    return (
        <header className="fixed z-50 flex w-full bg-white/95 backdrop-blur">
            <div className="flex w-full justify-between  p-4 md:px-12 xl:px-32">
                <div className="flex ">
                    <NavLogo />
                    <input
                        type="text"
                        className="ml-8 hidden rounded-lg border px-2 py-1 focus:outline-1 focus:outline-green-500 md:block md:min-w-[300px] lg:min-w-[400px]"
                        placeholder="Search"
                    />
                </div>
                <div className=" lg:flex lg:items-center">
                    <button
                        onClick={() => setNavOpen((prev) => !prev)}
                        className="lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-6 w-6"
                        >
                            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                        </svg>
                    </button>
                    <div className="hidden lg:block ">
                        <NavLinksGroup />
                    </div>
                </div>
            </div>
            <div
                className={`${
                    navOpen ? "translate-x-0" : "translate-x-full"
                }  fixed flex h-screen w-screen flex-col  border bg-white transition duration-500 lg:hidden`}
            >
                <div className="flex w-full justify-between bg-white p-4 md:px-12 xl:px-32">
                    <NavLogo />
                    <button onClick={() => setNavOpen((prev) => !prev)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            className="h-6 w-6"
                        >
                            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col p-4 md:px-12">
                    <input
                        type="text"
                        className="mb-3 rounded-lg border px-2 py-1 focus:outline-1 focus:outline-green-500 md:hidden "
                        placeholder="Search"
                    />
                    <NavLinksGroup />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
