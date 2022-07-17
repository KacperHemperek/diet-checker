import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutHero from "../components/AboutHero";
import SearchHero from "../components/SearchHero";
import Layout from "../layouts/Layout";
import HeroImage from "../public/undraw_shopping_app_flsj.svg";
const Home: NextPage = () => {
    return (
        <Layout>
            <AboutHero />
            <SearchHero />
        </Layout>
    );
};

export default Home;
