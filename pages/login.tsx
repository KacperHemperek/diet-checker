import React from "react";
import Layout from "../layouts/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "../components/FormInput";

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

    console.log({ ...formik });
    return (
        <Layout>
            <form className="p-4" onSubmit={formik.handleSubmit}>
                <FormInput
                    label="Email"
                    name="email"
                    type="email"
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

                <button
                    type="submit"
                    className="rounded-full bg-green-500 px-4 py-2 text-white"
                >
                    Submit
                </button>
            </form>
        </Layout>
    );
};

export default login;
