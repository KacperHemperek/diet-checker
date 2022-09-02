import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

import FoodCardList from "../../../components/FoodCardList";

import Layout from "../../../layouts/Layout";

import { Recipe } from "../../../interface/Recipe";
import SearchForm from "../../../components/SearchForm";
import Container from "../../../components/Container";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../utils/firebase.utils";
import { FoodCardProps } from "../../../components/FoodCard";
import { UserInformation } from "../../../interface/UserInformation";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Index: NextPage = () => {
  const router = useRouter();
  const searchValue = router.query.id;
  const [loading, setLoading] = useState<boolean>(true);
  const [searchRes, setSearchRes] = useState<Recipe[]>([]);
  const [listFavorite, setListFavorite] = useState<FoodCardProps[]>([]);
  const uid = useSelector((state: RootState) => state.user.uid);

  const fetchSearchResults = useCallback(
    async (search: string) => {
      console.log("setting true");
      setLoading(true);
      try {
        const response = await fetch(`/api/search_items?query=${search}`, {
          method: "POST",
        });
        const data = (await response.json()).responseData as Recipe[];

        setSearchRes(data);
      } catch (error) {
        console.error(error);
      }
    },
    [searchValue]
  );

  useEffect(() => {
    fetchSearchResults(String(searchValue));
  }, []);

  useEffect(() => {
    const userRef = doc(db, "users", String(uid));

    const unsub = onSnapshot(userRef, async (doc) => {
      try {
        console.log("setting true");
        setLoading(true);
        const data = doc.data() as UserInformation;

        if (!data?.recipes) {
          console.log("setting false");

          setLoading(false);
          return;
        }
        const ids = data?.recipes.map((item) => item.id);

        const temp: FoodCardProps[] =
          searchRes?.map((item) => {
            return { ...item, favorite: ids.includes(item.id) };
          }) ?? searchRes;

        setListFavorite(temp);
        console.log("setting false");
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    });

    return () => {
      unsub();
    };
  }, [searchValue, searchRes, fetchSearchResults]);

  return (
    <Layout>
      <Container>
        <div className="mb-8">
          <SearchForm />
        </div>
        <FoodCardList
          FoodCardList={listFavorite}
          loading={loading}
          alignLeft={false}
          placeholderArray={[
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
          ]}
          size="lg"
        />
      </Container>
    </Layout>
  );
};

export default Index;
