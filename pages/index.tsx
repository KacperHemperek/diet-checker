import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutHero from "../components/AboutHero";
import HomepageCards from "../components/HomepageCards";
import SearchHero from "../components/SearchHero";
import Layout from "../layouts/Layout";
import { getAuthAccesToken, updateData } from "../redux/features/authData";

const Home: NextPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const res = await fetch(`/api/search`);
                const data = await res.json();

                dispatch(updateData(data));
                dispatch(getAuthAccesToken());
            } catch (error) {
                console.error(error);
            }
        };

        fetchToken();
    }, []);

    return (
        <Layout>
            <AboutHero />
            <SearchHero />
            <HomepageCards />
        </Layout>
    );
};

export default Home;
