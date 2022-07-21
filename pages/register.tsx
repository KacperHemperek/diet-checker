import React from "react";
import Layout from "../layouts/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "../components/FormInput";
import CustomFormWrapper from "../components/CustomFormWrapper";
import Link from "next/link";
import Image from "next/image";
import descImg from "../public/sign_up_form_img.svg";

const login = () => {
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
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
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
        "search for your favorite food products",
        "find awesome recipies",
        "keep your nutrients in check",
        "control your daily caloric intake",
    ];

    const description = (
        <div className="flex flex-col p-8">
            <h1 className=" mb-4 text-xl font-semibold">
                <span className="text-green-500">Create</span> Account
            </h1>

            <p className="mb-4">
                Save your diet plans to access them whenever you need them.{" "}
            </p>
            <h2 className="mb-2 text-lg">
                <span className="font-semibold text-green-500">Main</span>{" "}
                features:{" "}
            </h2>
            <ul className="mb-8 ml-2">
                {benefits.map((item) => (
                    <li className="mb-1 flex items-baseline gap-2 fill-green-500">
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
                    <Image src={descImg} />
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
                    <h1 className="mb-6 w-full text-start text-xl font-semibold lg:hidden">
                        <span className=" text-green-500 underline-offset-2">
                            Sign
                        </span>{" "}
                        Up
                    </h1>
                    <div className="block lg:hidden">
                        <h1 className=" mb-4 text-xl ">
                            <span className="text-green-500">Create</span>{" "}
                            Account
                        </h1>

                        <p className="mb-4">
                            Save your diet plans to access them whenever you
                            need them.{" "}
                        </p>
                        <h2 className="mb-2 text-lg">
                            <span className=" text-green-500">Main</span>{" "}
                            features:{" "}
                        </h2>
                        <ul className="mb-8 ml-2">
                            {benefits.map((item) => (
                                <li className="mb-1 flex items-baseline gap-2 fill-green-500">
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
                    </div>

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
                        label="Confirm "
                        name="repeatPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.repeatPassword}
                        error={formik.errors.repeatPassword}
                    />

                    <p className="mb-2 text-sm">Your password must contain: </p>
                    <ul className="ml-2 mb-6 fill-green-500 text-sm">
                        {passwordRules.map((rule) => (
                            <li className="flex items-baseline gap-2">
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
                            <span className=" cursor-pointer whitespace-nowrap text-green-500 underline hover:text-green-400">
                                log in here
                            </span>
                        </Link>
                    </p>
                </CustomFormWrapper>
            </div>
        </Layout>
    );
};

export default login;
