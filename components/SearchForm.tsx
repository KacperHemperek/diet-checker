import Image from "next/image";
import React from "react";

import descImg from "../public/images/search_page_img.svg";

import SearchBar from "./SearchBar";

const SearchForm = () => {
  return (
    <>
      <div className="mx-auto w-1/2  md:w-3/12 lg:w-2/12">
        <Image src={descImg} alt="search image" />
      </div>
      <div className="flex flex-col items-center px-4 py-12 md:px-12 lg:px-32">
        <SearchBar className="w-full md:w-2/3 lg:w-1/2" />
      </div>
    </>
  );
};

export default SearchForm;
