import React from "react";
import Layout from "../layouts/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
const login = () => {



    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            repeatPassword: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    console.log({ ...formik });
    return (
        <Layout>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.repeatPassword}
                />

                <button type="submit">Submit</button>
            </form>
        </Layout>
    );
};

export default login;
