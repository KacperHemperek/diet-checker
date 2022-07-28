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
        const res = await fetch(`/api/get_user_by_id?uid=${uid}`);
        const data = await res.json();
        console.log({ ...data });
        setUserData({
          ...data,
        });
      } catch (e: any) {
        console.error(e);
      }
    };

    if (!isOpen) return;
    Object.entries(formik.values).forEach((item) => {
      console.log(item);
    });

    fetchUserInfo();
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="p-10">
        <button
          className="absolute right-5 top-5"
          onClick={() => {
            Object.entries(formik.values).forEach((item) => {});
            setIsOpen(false);
          }}
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
          type="text"
          onChange={formik.handleChange}
          value={`${formik.values.age ? formik.values.age : ""}`}
        />
        <FormInput
          label="Height"
          name="height"
          type="text"
          onChange={formik.handleChange}
          value={`${formik.values.height ? formik.values.height : ""}`}
        />
        <FormInput
          label="Weight"
          name="weight"
          type="text"
          onChange={formik.handleChange}
          value={`${formik.values.weight ? formik.values.weight : ""}`}
        />
      </div>
    </Modal>
  );
};

export default ProfileEditModal;
