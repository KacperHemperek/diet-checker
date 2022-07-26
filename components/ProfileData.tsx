import React from "react";
import Image from "next/image";
import profilePic from "../public/profile_pic.svg";

const ProfileData = () => {
  return (
    <div className="grid  gap-6 rounded-lg border p-10 md:col-span-5">
      <div>
        <div className="mx-auto w-2/5">
          <Image src={profilePic} alt="Profile Picture" />
        </div>
        <h1 className="mx-auto p-4 text-center text-4xl">Name</h1>
      </div>

      <div>
        <p className="text-gray-500">email</p>
        <h1 className="mb-4 text-2xl">cos@cos.cos</h1>

        <p className="text-gray-500">Age</p>
        <h1 className="mb-4 text-2xl">200</h1>

        <p className="text-gray-500">Height</p>
        <h1 className="mb-4 text-2xl">200 cm</h1>

        <p className="text-gray-500">Weight</p>
        <h1 className="mb-4 text-2xl">200 kg</h1>
      </div>
    </div>
  );
};

export default ProfileData;
