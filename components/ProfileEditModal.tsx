import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "./FormInput";

import Modal from "./Modal";
import CustomButton from "./CustomButton";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../utils/firebase.utils";
import { useRouter } from "next/router";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type InitialFormikValues = {
  name: string;
  age: number;
  height: number;
  weight: number;
};

const ProfileEditModal = ({ isOpen, setIsOpen }: Props) => {
  const router = useRouter();
  const uid = router.query.id;
  const [userData, setUserData] = useState<any>({});

  let schema = yup.object().shape({
    name: yup.string().required("No name provided"),
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
      name: userData.name,
      age: userData.age,
      height: userData.height,
      weight: userData.weight,
    } as InitialFormikValues,
    onSubmit: async (values) => {
      try {
        await fetch(`/api/update_user?uid=${uid}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        setIsOpen(false);
      } catch (e) {
        console.error(e);
      }
    },
    validationSchema: schema,
    enableReinitialize: true,
  });

  useEffect(() => {
    const userRef = doc(db, "users", String(uid));
    const unsub = onSnapshot(
      userRef,
      (doc) => {
        const data = doc.data();
        setUserData({ ...data });
      },
      (e) => {
        console.error(e.message);
      }
    );
    return () => {
      unsub();
    };
  }, [uid]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-[90vw] flex-col justify-center rounded-lg bg-white p-5 md:w-[60vw] lg:w-[40vw]"
      >
        <div className="pr-10">
          <h1 className=" mb-4 text-left text-xl font-semibold">
            <span className="text-green-500">Update</span> Your Data
          </h1>
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
        </div>
        <FormInput
          label="Name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={`${formik.values.name ? formik.values.name : ""}`}
        />
        <FormInput
          label="Age"
          name="age"
          type="text"
          onChange={formik.handleChange}
          value={`${formik.values.age ? formik.values.age : ""}`}
          error={formik.errors.age}
        />
        <FormInput
          label="Height"
          name="height"
          type="text"
          onChange={formik.handleChange}
          value={`${formik.values.height ? formik.values.height : ""}`}
          error={formik.errors.height}
        />
        <FormInput
          label="Weight"
          name="weight"
          type="text"
          onChange={formik.handleChange}
          value={`${formik.values.weight ? formik.values.weight : ""}`}
          error={formik.errors.weight}
        />
        <div>
          <CustomButton type="submit">Submit</CustomButton>
        </div>
      </form>
    </Modal>
  );
};

export default ProfileEditModal;
