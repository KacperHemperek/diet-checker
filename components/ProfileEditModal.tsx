import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "./FormInput";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Modal from "./Modal";
import { UserInformations } from "../interface/UserInformations";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileEditModal = ({ isOpen, setIsOpen }: Props) => {
  const uid = useSelector((state: RootState) => state.user.uid);
  const [userData, setUserData] = useState<UserInformations>();

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
      age: userData?.age ?? "",
      height: userData?.height ?? "",
      weight: userData?.weight ?? "",
    },
    onSubmit: async (values) => {},
    validationSchema: schema,
    enableReinitialize: true,
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch(
          `/api/get_user_by_id?uid=G9Fe7V2hOocz7yLseNWOsQS1Rmg2`
        );
        const data = await res.json();
        setUserData({
          ...data,
        });
        formik.values.age = data.age;
        formik.values.height = data.height;
        formik.values.weight = data.weight;
      } catch (e: any) {
        console.error(e);
      }
    };

    fetchUserInfo();
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-[90vw] flex-col justify-center rounded-lg bg-white p-5 md:w-[60vw] lg:w-[40vw]">
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
        <button
          type="submit"
          className={`${
            formik.isValid
              ? "bg-green-500"
              : "cursor-not-allowed bg-green-500/70"
          } mx-auto rounded-full px-4 py-2 text-white`}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default ProfileEditModal;
