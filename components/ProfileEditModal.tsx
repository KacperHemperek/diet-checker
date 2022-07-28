import React, { Dispatch, SetStateAction, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRouter } from "next/router";
import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileEditModal = ({ isOpen, setIsOpen }: Props) => {
  const dispatch = useDispatch();
  const userError = useSelector((state: RootState) => state.user.registerError);
  const router = useRouter();

  let schema = yup.object().shape({
    age: yup.number().required("No age provided").moreThan(0).integer(),
    height: yup.number().required("No height provided").moreThan(0).integer(),
    weight: yup
      .number()
      .required("No weight provided")
      .moreThan(0)
      .round("round"),
  });

  const formik = useFormik({
    initialValues: {
      age: "",
      height: "",
      weight: "",
    },
    onSubmit: async (values) => {},
    validationSchema: schema,
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="p-10">
        <button
          className="absolute right-5 top-5"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="h-7 w-7 fill-gray-500"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </button>
        <FormInput
          label="Age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          value={`${formik.values.age ? formik.values.age : ""}`}
        />
        <FormInput
          label="Height"
          name="height"
          type="number"
          onChange={formik.handleChange}
          value={`${formik.values.height ? formik.values.height : ""}`}
        />
        <FormInput
          label="Weight"
          name="weight"
          type="number"
          onChange={formik.handleChange}
          value={`${formik.values.weight ? formik.values.weight : ""}`}
        />
      </div>
    </Modal>
  );
};

export default ProfileEditModal;
