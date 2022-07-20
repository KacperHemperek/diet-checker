import React, { SyntheticEvent, useRef } from "react";
import { useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import SearchBar from "../../components/SearchBar";
import { setSearchValue } from "../../redux/features/searchData";

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
            fetchSearchResults(searchValue);
        } else if (searchValue !== initialSearchValue.current) {
            fetchSearchResults(searchValue);
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
            <div className="flex flex-col items-center px-4 py-12 md:px-12 lg:px-32">
                <SearchBar
                    onSubmit={handleSubmit}
                    ref={searchRef}
                    className="w-1/2"
                />
            </div>
        </Layout>
    );
};

export default search;
