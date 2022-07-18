import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { RootState } from "../../redux/store";
import { useEffect } from "react";

const search = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch(`/api/search_items`, {
          body: JSON.stringify({ token: accessToken }),
          method: "POST",
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchToken();
  }, []);
  return (
    <Layout>
      <div>Toast</div>
    </Layout>
  );
};

export default search;
