import React from "react";
import Layout from "../layouts/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "../components/FormInput";
import CustomFormWrapper from "../components/CustomFormWrapper";

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
                <CustomFormWrapper onSubmit={formik.handleSubmit}>
                    <h1>Log In</h1>
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
                </CustomFormWrapper>
            </div>
        </Layout>
    );
};

export default login;
