import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { RootState } from "../../redux/store";
import { useEffect } from "react";

const search = () => {
    const accessToken = useSelector(
        (state: RootState) => state.auth.accessToken
    );
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await fetch(
                    "https://platform.fatsecret.com/rest/server.api",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${accessToken}`,
                        },
                        method: "POST",
                        // body: `method=foods.search&search_expression=jogurt&format=json`,
                        body: JSON.stringify({
                            method: "foods.search",
                        }),
                    }
                );
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchToken();
    }, []);
    return (
        <Layout>
            <div>Toast</div>
        </Layout>
    );
};

export default search;
