import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

import FoodCardList from "../../../components/FoodCardList";

import Layout from "../../../layouts/Layout";

import { Recipe } from "../../../interface/Recipe";

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
      console.log(data);
      setSearchRes(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchSearchResults(String(searchValue));
  }, [searchValue]);
  // for testing purposes
  const mockCardlist = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <Layout>
      <div className="mx-4 flex justify-center py-20 md:mx-12 xl:mx-32">
        <FoodCardList FoodCardList={mockCardlist as Recipe[]} size="md" />
        <FoodCardList FoodCardList={searchRes} size="md" />
      </div>
    </Layout>
  );
};

export default Index;
