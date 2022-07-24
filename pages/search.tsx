import React, { SyntheticEvent, useRef } from "react";
import { useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar";
import { setSearchValue } from "../redux/features/searchData";
import Image from "next/image";
import descImg from "../public/search_page_img.svg";
import SearchBarWithAdvanced from "../components/SearchBarWithAdvanced";

const search = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();
  const isMounted = useRef<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const initialSearchValue = useRef<string>("");

  const fetchSearchResults = async (search: string) => {
    try {
      const response = await fetch(`/api/search_items?query=${search}`, {
        method: "POST",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      initialSearchValue.current = searchValue;
      isMounted.current = true;
      console.log("render");
    } else if (!isMounted.current && searchValue !== "") {
      console.log("render with search value");
      //fetchSearchResults(searchValue);
    } else if (searchValue !== initialSearchValue.current) {
      console.log("search value changed");
      //fetchSearchResults(searchValue);
    }
  }, [searchValue]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (searchRef.current?.value) {
      dispatch(setSearchValue(searchRef.current?.value));
    }
  };

  return (
    <Layout>
      <div className="mx-auto w-1/2  md:w-3/12 lg:w-2/12">
        <Image src={descImg} />
      </div>
      <div className="flex flex-col items-center px-4 py-12 md:px-12 lg:px-32">
        <SearchBarWithAdvanced
          onSubmit={handleSubmit}
          ref={searchRef}
          className="w-full md:w-2/3 lg:w-1/2"
        />
      </div>
    </Layout>
  );
};

export default search;
