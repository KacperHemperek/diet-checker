import React from "react";
import { NextPage, NextPageContext } from "next";
import Layout from "../../../layouts/Layout";
import ProfileData from "../../../components/ProfileData";
import FoodCard from "../../../components/FoodCard";
import { UserInformation } from "../../../interface/UserInformation";
import { Recipe } from "../../../interface/Recipe";

const Account: NextPage<UserInformation> = (props) => {
  return (
    <Layout>
      <div className="mx-4 grid gap-12 pt-8 md:mx-12 md:grid-cols-12  xl:mx-32">
        <ProfileData
          email={props.email}
          name={props.name}
          age={props.age}
          height={props.height}
          weight={props.weight}
        />
        <div className=" md:col-span-6 lg:col-span-7 xl:col-span-8">
          <h2 className="mb-6 text-2xl font-semibold">
            <span className="text-green-500">Your</span> favorite recipes
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {props.recipes &&
              props.recipes.map((item: Recipe) => (
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

export const getServerSideProps = async (context: NextPageContext) => {
  const { id } = context.query;
  const response = await fetch(
    `${process.env.APP_URL}/api/get_user_by_id?uid=${id}`
  );
  const data = await response.json();

  return {
    props: { ...data },
  };
};
