import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

import FoodCardList from "../../../components/FoodCardList";

import Layout from "../../../layouts/Layout";

import { Recipe } from "../../../interface/Recipe";
import SearchForm from "../../../components/SearchForm";
import Container from "../../../components/Container";

const Index: NextPage = () => {
  const router = useRouter();
  const searchValue = router.query.id;
  const [searchRes, setSearchRes] = useState<Recipe[]>([]);

  const fetchSearchResults = useCallback(async (search: string) => {
    try {
      const response = await fetch(`/api/search_items?query=${search}`, {
        method: "POST",
      });
      const data = (await response.json()).responseData as Recipe[];

      setSearchRes(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchSearchResults(String(searchValue));
  }, [searchValue]);

  return (
    <Layout>
      <Container>
        <div className="mb-8">
          <SearchForm />
        </div>
        <FoodCardList
          FoodCardList={searchRes}
          placeholderArray={[
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
          ]}
          size="lg"
        />
      </Container>
    </Layout>
  );
};

export default Index;
