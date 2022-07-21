import React from "react";
import Layout from "../layouts/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
const register = () => {
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

    return (
        <Layout>
            <div className="flex min-h-[90vh] items-center justify-center">
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex min-w-full flex-col p-6"
                >
                    <FormInput
                        label="Email"
                        name="email"
                        placeholder="email@example.com"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        type="email"
                        className="mb-8"
                    />
                    <div className="group flex items-center overflow-hidden rounded-lg border border-r transition focus-within:border-green-500 focus-within:outline focus-within:outline-green-500  ">
                        <label className="border-r bg-gray-100 px-2 py-1 transition ">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="email@example.com"
                            className=" h-full w-full px-2 focus:outline-none"
                        />
                    </div>

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
            </div>
        </Layout>
    );
};

export default register;
