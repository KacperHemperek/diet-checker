import React from "react";
import { NextPage } from "next";
import Layout from "../../../layouts/Layout";

const Account: NextPage = () => {
  return (
    <Layout>
      <div>account</div>
    </Layout>
  );
};

export default Account;

//get user info from  (create endpoint that will get info from firebase) and use getStaticProps and getStaticPaths to fetch data
