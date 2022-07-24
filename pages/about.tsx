import React from "react";
import Layout from "../layouts/Layout";
import AboutAccordion from "../components/AboutAccordion";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../public/undraw_diet_ghvw.svg";

const about = () => {
  return (
    <Layout>
      <div className="p-10">
        <AboutAccordion />
      </div>
    </Layout>
  );
};

export default about;
