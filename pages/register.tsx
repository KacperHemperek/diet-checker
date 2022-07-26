import React from "react";
import Layout from "../layouts/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "../components/FormInput";
import CustomFormWrapper from "../components/CustomFormWrapper";
import Link from "next/link";
import Image from "next/image";
import descImg from "../public/sign_up_form_img.svg";
import { auth } from "../utils/firebase.utils";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setRegistrationError } from "../redux/features/userData";
import { useRouter } from "next/router";

const Register = () => {
  const dispatch = useDispatch();
  const userError = useSelector((state: RootState) => state.user.registerError);
  const router = useRouter();

  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter correct email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("No password provided")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_-])[A-Za-z\d@$!#%*?&_-]{8,}$/,
        "Password is too weak"
      ),
    repeatPassword: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: async (values) => {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        await fetch(
          `/api/create_user?uid=${userCred.user.uid}&email=${userCred.user.email}`
        );
        dispatch(setRegistrationError(""));
        await router.push("/");
      } catch (e: any) {
        console.log(e.code);
        values.password = "";
        values.repeatPassword = "";
        dispatch(setRegistrationError(e.code));
      }
    },
    validationSchema: schema,
  });

  const passwordRules = [
    "at least eight characters",
    "at least one number",
    "at least one special character",
    "at least one capital letter",
    "at least one lowercase letter",
  ];

  const benefits = [
    "search for your favourite food products",
    "find awesome recipes",
    "keep your nutrients in check",
    "control your daily caloric intake",
  ];

  const description = (
    <div className="flex flex-col p-8">
      <h1 className=" mb-4 text-xl font-semibold">
        <span className="text-green-500">Create</span> Account
      </h1>

      <p className="mb-4">
        Save your diet plans to access them whenever you need to.{" "}
      </p>
      <h2 className="mb-2 text-lg">
        <span className="font-semibold text-green-500">Main</span> features:{" "}
      </h2>
      <ul className="mb-8 ml-2">
        {benefits.map((item, index) => (
          <li
            className="mb-1 flex items-baseline gap-2 fill-green-500"
            key={index}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-4 w-4 translate-y-[2px]"
            >
              <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex w-full ">
        <div className="w-full xl:w-3/4">
          <Image src={descImg} alt="register image" />
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="mt-6 flex justify-center p-4">
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
            error={formik.errors.email}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />
          <FormInput
            label="Confirm"
            name="repeatPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}
          />

          {userError && (
            <p className="mb-6 w-full rounded-lg border border-red-500 bg-red-200 p-2 text-center text-red-500 first-letter:uppercase">
              {userError}
            </p>
          )}

          <p className="mb-2 text-sm">Your password must contain: </p>
          <ul className="ml-2 mb-6 fill-green-500 text-sm">
            {passwordRules.map((rule, index) => (
              <li className="flex items-baseline gap-2" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-3 w-3"
                >
                  <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                </svg>
                {rule}
              </li>
            ))}
          </ul>

          <div className="flex w-full justify-center ">
            <button
              type="submit"
              className={`${
                formik.isValid
                  ? "bg-green-500"
                  : "cursor-not-allowed bg-green-500/70"
              } mb-6 rounded-full px-4 py-2 text-white`}
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm">
            If you already have an account you can{" "}
            <Link href="/login">
              <a className="whitespace-nowrap text-green-500 underline hover:text-green-400">
                log in here
              </a>
            </Link>
          </p>
        </CustomFormWrapper>
      </div>
    </Layout>
  );
};

export default Register;
