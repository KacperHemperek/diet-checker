import React, { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import Layout from "../../../layouts/Layout";
import ProfileData from "../../../components/ProfileData";
import FoodCard from "../../../components/FoodCard";
import { UserInformation } from "../../../interface/UserInformation";
import { Recipe } from "../../../interface/Recipe";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../../utils/firebase.utils";
import { useRouter } from "next/router";
import autoAnimate from "@formkit/auto-animate";
import FoodCardList from "../../../components/FoodCardList";

const Account: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userData, setUserData] = useState<UserInformation>();

  const listRef = useRef<HTMLDivElement>(null);
  //animate list of favorites
  if (listRef.current) {
    autoAnimate(listRef.current);
  }

  useEffect(() => {
    const docRef = doc(db, "users", String(id));

    const unsub = onSnapshot(
      docRef,
      (doc) => {
        const data = doc.data();
        console.log(data?.recipes);
        setUserData({
          name: data?.name,
          email: data?.email,
          age: data?.age,
          recipes: data?.recipes,
          height: data?.height,
          weight: data?.weight,
        });
      },
      (e) => {
        console.error(e.message);
      }
    );
    return () => {
      unsub();
    };
  }, [id]);

  return (
    <Layout>
      <div className="mx-4 grid gap-12 pt-8 md:mx-12 md:grid-cols-12  xl:mx-32">
        <ProfileData
          email={userData?.email}
          name={userData?.name}
          age={userData?.age}
          height={userData?.height}
          weight={userData?.weight}
        />
        <div className=" md:col-span-6 lg:col-span-7 xl:col-span-8">
          <h2 className="mb-6 text-2xl font-semibold">
            <span className="text-green-500">Your</span> favorite recipes
          </h2>
          <FoodCardList FoodCardList={userData?.recipes ?? []} />
        </div>
      </div>
    </Layout>
  );
};

export default Account;
