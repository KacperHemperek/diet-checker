import React from "react";
import Layout from "../layouts/Layout";
import { useFormik } from "formik";
import FormInput from "../components/FormInput";
import CustomFormWrapper from "../components/CustomFormWrapper";
import Link from "next/link";
import descImg from "../public/login_form_img.svg";
import Image from "next/image";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const description = (
    <div className="flex flex-col p-8">
      <h1 className=" mb-4 text-xl font-semibold">
        <span className="text-green-500">Welcome</span> Back!
      </h1>
      <p className="mb-4">Log in to access your personalised diet plans. </p>
      <div className="flex w-full ">
        <div className="w-full">
          <Image src={descImg} alt="register page image"/>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="mt-12 flex justify-center p-4">
        <CustomFormWrapper
          onSubmit={formik.handleSubmit}
          description={description}
        >
          <FormInput
            label="Email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <button
            type="submit"
            className="mb-6 rounded-full bg-green-500 px-4 py-2 text-white"
          >
            Log In
          </button>
          <p className="text-sm">
            If you don&apos;t have an account you can{" "}
            <Link href="/register">
              <span className=" cursor-pointer whitespace-nowrap text-green-500 underline hover:text-green-400">
                sign up here
              </span>
            </Link>
          </p>
        </CustomFormWrapper>
      </div>
    </Layout>
  );
};

export default Login;
