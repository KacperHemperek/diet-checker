import React from "react";
import Layout from "../layouts/Layout";
import { useFormik, ErrorMessage } from "formik";
import * as yup from "yup";

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
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        {formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="password">Password</label>
        {formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <label htmlFor="repeatPassword">Repeat Password</label>
        {formik.errors.repeatPassword && (
          <div className="error">{formik.errors.repeatPassword}</div>
        )}
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
