import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { RootState } from "../../redux/store";
import { useEffect } from "react";

const search = () => {
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
        console.log("lol");
    };
    const searchValue = useSelector((state: RootState) => state.search.value);
    const isMounted = useRef<boolean>(false);
    useEffect(() => {
        if (isMounted.current) return;
        isMounted.current = true;
        fetchSearchResults();
    }, []);

    return (
        <Layout>
            <div>Toast</div>
        </Layout>
    );
};

export default search;
