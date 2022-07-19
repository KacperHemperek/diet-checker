import type { NextPage } from "next";
import AboutHero from "../components/AboutHero";
import HomepageCards from "../components/HomepageCards";
import SearchHero from "../components/SearchHero";
import Layout from "../layouts/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <AboutHero />
            <SearchHero />
            <HomepageCards />
        </Layout>
    );
};

export default Home;
