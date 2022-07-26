import React from "react";
import { NextPage } from "next";
import Layout from "../../../layouts/Layout";
import ProfileData from "../../../components/ProfileData";
import FoodCard from "../../../components/FoodCard";

const Account: NextPage = () => {
  return (
    <Layout>
      <div className="mx-4 grid gap-12 pt-8 md:mx-12 md:grid-cols-12 xl:mx-32">
        <ProfileData />
        <div className="my-4 grid grid-cols-1 gap-4 md:col-span-7 md:grid-cols-2 xl:grid-cols-3">
          <FoodCard
            name="Pizza"
            type="recipe"
            calories="2000"
            image="https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
          />
          <FoodCard
            name="Pizza"
            type="recipe"
            calories="2000"
            image="https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
          />
          <FoodCard
            name="Pizza"
            type="recipe"
            calories="2000"
            image="https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
          />
          <FoodCard
            name="Pizza"
            type="recipe"
            calories="2000"
            image="https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Account;

//get user info from  (create endpoint that will get info from firebase) and use getStaticProps and getStaticPaths to fetch data
