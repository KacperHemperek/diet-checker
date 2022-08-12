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
      async (snapshot) => {
        setUserData({
          name: snapshot.data()?.name,
          email: snapshot.data()?.email,
          age: snapshot.data()?.age,
          recipes: snapshot.data()?.recipes,
          height: snapshot.data()?.height,
          weight: snapshot.data()?.weight,
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
          <div
            className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            ref={listRef}
          >
            {userData?.recipes &&
              userData.recipes.map((item: Recipe) => (
                <FoodCard
                  id={item.id}
                  key={item.id}
                  image={item.img}
                  name={item.name}
                  calories={item.cal}
                  favorite={true}
                  vegan={item.vegan}
                  vegetarian={item.vegetarian}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
