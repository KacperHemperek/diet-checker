import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { RootState } from "../../redux/store";

const search = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  return (
    <Layout>
      <div>Toast</div>
    </Layout>
  );
};

export default search;
