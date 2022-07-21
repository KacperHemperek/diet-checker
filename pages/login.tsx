import React from "react";
import Layout from "../layouts/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "../components/FormInput";

const login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    console.log({ ...formik });
    return (
        <Layout>
            <div className="mt-12 flex justify-center p-4">
                <form
                    className="w-full text-center md:w-1/2"
                    onSubmit={formik.handleSubmit}
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
                        className="rounded-full bg-green-500 px-4 py-2 text-white"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default login;
