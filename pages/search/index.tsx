import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { RootState } from "../../redux/store";
import { useEffect } from "react";

const search = () => {
    const searchValue = useSelector((state: RootState) => state.search.value);
    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(
                    `/api/search_items?query=${searchValue}`,
                    {
                        method: "POST",
                    }
                );
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSearchResults();
    }, [searchValue]);

    return (
        <Layout>
            <div>Toast</div>
        </Layout>
    );
};

export default search;
