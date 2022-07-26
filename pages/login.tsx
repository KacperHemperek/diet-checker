import React from "react";
import Layout from "../layouts/Layout";
import { useFormik } from "formik";
import FormInput from "../components/FormInput";
import CustomFormWrapper from "../components/CustomFormWrapper";
import Link from "next/link";
import descImg from "../public/login_form_img.svg";
import Image from "next/image";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.utils";
import { useRouter } from "next/router";
import { setLoginError } from "../redux/features/userData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Login = () => {
  const dispatch = useDispatch();
  const userError = useSelector((state: RootState) => state.user.loginError);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const userCred = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log({ userCred });

        dispatch(setLoginError(""));
        await fetch(
          `/api/create_user?uid=${userCred.user.uid}&email=${userCred.user.email}`
        );
        await router.push("/");
      } catch (e: any) {
        console.log(e.code);
        values.password = "";
        dispatch(setLoginError(e.code));
      }
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
          <Image src={descImg} alt="register page image" />
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
          <div className="flex flex-col lg:hidden">
            <h1 className=" mb-4 text-xl font-semibold">
              <span className="text-green-500">Welcome</span> Back!
            </h1>
            <p className="mb-8">
              Log in to access your personalised diet plans.{" "}
            </p>
          </div>
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
          <p className="mb-8 text-sm">
            {/*chnage login to remember password page*/}
            Forgot your password?{" "}
            <Link href="/login">
              <a className="text-green-500 underline hover:text-green-400">
                Remember it here
              </a>
            </Link>
          </p>
          {userError && (
            <p className="mb-6 w-full rounded-lg border border-red-500 bg-red-200 p-2 text-center text-red-500 first-letter:uppercase">
              {userError}
            </p>
          )}
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className=" mb-6 rounded-full bg-green-500 px-4 py-2 text-white"
            >
              Log In
            </button>
          </div>
          <p className="text-sm">
            If you don&apos;t have an account you can{" "}
            <Link href="/register">
              <a className=" cursor-pointer whitespace-nowrap text-green-500 underline hover:text-green-400">
                sign up here
              </a>
            </Link>
          </p>
        </CustomFormWrapper>
      </div>
    </Layout>
  );
};

export default Login;
