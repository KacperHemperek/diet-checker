import React from "react";
import Image from "next/image";
import profilePic from "../public/profile_pic.svg";

const ProfileData = () => {
  return (
    <div className="grid gap-6 rounded-lg md:col-span-6 md:border md:p-10 lg:col-span-5 xl:col-span-4 ">
      <div>
        <div className="mx-auto w-2/5">
          <Image src={profilePic} alt="Profile Picture" />
        </div>
        <h1 className="mx-auto p-4 text-center text-3xl font-semibold">Name</h1>
      </div>

      <div>
        <p className="text-base text-gray-500">email</p>
        <h2 className="mb-4 text-xl">cos@cos.cos</h2>

        <p className="text-gray-500">Age</p>
        <h2 className="mb-4 text-xl">200</h2>

        <p className="text-gray-500">Height</p>
        <h2 className="mb-4 text-xl">200 cm</h2>

        <p className="text-gray-500">Weight</p>
        <h2 className="mb-4 text-xl">200 kg</h2>
      </div>
    </div>
  );
};

export default ProfileData;
