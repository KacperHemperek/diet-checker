import React from "react";

import { NextPage } from "next";

import Layout from "../../layouts/Layout";

import SearchForm from "../../components/SearchForm";
import Container from "../../components/Container";

const Search: NextPage = () => {
  return (
    <Layout>
      <Container>
        <SearchForm />
      </Container>
    </Layout>
  );
};

export default Search;
