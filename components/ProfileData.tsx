import React from "react";
import Image from "next/image";
import profilePic from "../public/profile_pic.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {
  email: string | undefined;
  name?: string | undefined;
  age?: number | undefined;
  height?: number | undefined;
  weight?: number | undefined;
};

const ProfileData = ({ email, name, age, height, weight }: Props) => {
  const uid = useSelector((state: RootState) => state.user.uid);

  return (
    <div className="grid gap-6 rounded-lg md:col-span-6 md:border md:p-10 lg:col-span-5 xl:col-span-4 ">
      <div>
        <div className="mx-auto w-2/5">
          <Image src={profilePic} alt="Profile Picture" />
        </div>
        <h1 className="mx-auto mt-4 w-full text-center text-3xl font-semibold">
          {name ?? `user${uid.slice(0, 8)}...`}
        </h1>
      </div>

      <div>
        <p className="text-base text-gray-500">email</p>
        <h2 className="mb-4 text-xl">{email}</h2>

        <p className="text-gray-500">Age</p>
        <h2 className="mb-4 text-xl">{age ?? "Add your age "}</h2>

        <p className="text-gray-500">Height</p>
        <h2 className="mb-4 text-xl">
          {height ? height + " cm" : "Add your height"}
        </h2>

        <p className="text-gray-500">Weight</p>
        <h2 className="mb-4 text-xl">
          {weight ? weight + " kg" : "Add your weight"}
        </h2>
      </div>
    </div>
  );
};

export default ProfileData;
