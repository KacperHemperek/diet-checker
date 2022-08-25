import React from "react";

import { NextPage } from "next";

import Layout from "../../layouts/Layout";

import SearchForm from "../../components/SearchForm";

const Search: NextPage = () => {
  return (
    <Layout>
      <SearchForm />
    </Layout>
  );
};

export default Search;
