import React from "react";
import { NextPage, NextPageContext } from "next";
import Layout from "../../../layouts/Layout";
import ProfileData from "../../../components/ProfileData";
import FoodCard from "../../../components/FoodCard";

export interface Recipe {
  name: string;
  cal: number;
}

type Props = {
  email: string;
  age?: number;
  recipes?: Recipe[];
  height?: number;
  weight?: number;
  name?: string;
};

const Account: NextPage<Props> = (props) => {
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
            {/*https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg*/}
            {props.recipes &&
              props.recipes.map((item: Recipe, index) => (
                <FoodCard
                  key={index}
                  image={
                    "https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
                  }
                  name={item.name}
                  type={"Vegan"}
                  calories={item.cal}
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
