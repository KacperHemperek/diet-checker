import type { NextPage } from "next";
import HomeHero from "../components/HomeHero";
import HomepageCards from "../components/HomepageCards";
import SearchHero from "../components/SearchHero";
import Layout from "../layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeHero />
      <SearchHero />
      <HomepageCards />
    </Layout>
  );
};

export default Home;
