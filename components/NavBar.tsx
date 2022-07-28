import { useRouter } from "next/router";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../redux/features/searchData";
import LogInButton from "./LogInButton";
import NavLinksGroup from "./NavLinksGroup";
import NavLogo from "./NavLogo";
import SearchBar from "./SearchBar";
import SignUpButton from "./SignUpButton";
import { auth } from "../utils/firebase.utils";
import CustomButton from "./CustomButton";
import { signOut } from "@firebase/auth";
import { RootState } from "../redux/store";

const NavBar = () => {
  const dispatch = useDispatch();
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const uid = useSelector((state: RootState) => state.user.uid);
  const router = useRouter();

  const doNotShowSearchBar = ["search", "login", "register"].some(
    (el: string) => router.pathname.includes(el)
  );

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(setSearchValue(searchTerm));
    router.push(`/search`);
  };

  const handleLogout = async () => {
    console.log("click");
    try {
      await signOut(auth);
      await router.push("/login");
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <header className="fixed z-30 flex w-full bg-white/95 backdrop-blur">
      <div className="flex w-full justify-between  p-4 md:px-12 xl:px-32">
        <div className="flex items-center">
          <NavLogo />
          {!doNotShowSearchBar && (
            <SearchBar
              onSubmit={handleSubmit}
              onChange={handleSearchInput}
              className="ml-8 hidden md:block md:min-w-[300px] lg:min-w-[240px] xl:min-w-[360px]"
            />
          )}
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
          <div className="hidden lg:flex ">
            <NavLinksGroup />
            {uid ? (
              <CustomButton onClick={handleLogout}>Log Out</CustomButton>
            ) : (
              <>
                <LogInButton /> <SignUpButton />
              </>
            )}
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
        <div className="flex h-full flex-col justify-between p-4 md:px-12">
          <div className="flex flex-col">
            {!doNotShowSearchBar && (
              <SearchBar
                onSubmit={handleSubmit}
                onChange={handleSearchInput}
                className="mb-6 flex w-full md:hidden"
              />
            )}
            <NavLinksGroup />
          </div>
          <div className="w-full text-right">
            {uid ? (
              <CustomButton mobile={true} onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 fill-white"
                >
                  <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z" />
                </svg>
              </CustomButton>
            ) : (
              <SignUpButton mobile={true} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
