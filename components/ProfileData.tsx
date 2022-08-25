import React, { useState } from "react";
import Image from "next/image";
import profilePic from "../public/profile_pic.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ProfileEditModal from "./ProfileEditModal";
import CustomButton from "./CustomButton";
import Skeleton from "react-loading-skeleton";

type Props = {
  email: string | undefined;
  name?: string | undefined;
  age?: number | undefined;
  height?: number | undefined;
  weight?: number | undefined;
};

const ProfileData = ({ email, name, age, height, weight }: Props) => {
  const uid = useSelector((state: RootState) => state.user.uid);

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <div className="grid gap-6 rounded-lg md:col-span-6 md:border md:p-10 lg:col-span-5 xl:col-span-4 ">
      <div className="z-0">
        <div className="mx-auto mb-4 aspect-square w-2/5  overflow-hidden rounded-full">
          {email ? (
            <Image src={profilePic} alt="Profile Picture" />
          ) : (
            <Skeleton width="100%" height="100%" circle={true} />
          )}
        </div>
        <div className="flex items-center ">
          <h1 className="mx-auto w-full text-center text-3xl font-semibold">
            {name ?? <Skeleton width="80%" />}
          </h1>
        </div>
      </div>

      <div>
        <p className="mb-2 text-base text-gray-500">
          {email ? "Email" : <Skeleton width="20%" />}
        </p>
        <h2 className="mb-4 text-xl">{email ?? <Skeleton width="50%" />}</h2>
        <p className="text-gray-500">
          {age ? "Age" : <Skeleton width="10%" />}
        </p>
        <h2 className="mb-4 text-xl">{age ?? <Skeleton width="30%" />}</h2>
        <p className="text-gray-500">
          {height ? "Height" : <Skeleton width="20%" />}
        </p>
        <h2 className="mb-4 text-xl">
          {height ? height + " cm" : <Skeleton width="30%" />}
        </h2>
        <p className="text-gray-500">
          {weight ? "Weight" : <Skeleton width="20%" />}
        </p>
        <h2 className="mb-8 text-xl">
          {weight ? weight + " kg" : <Skeleton width="25%" />}
        </h2>

        <CustomButton empty={true} onClick={() => setDialogOpen(true)}>
          <p>Edit</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-4 w-4 "
          >
            <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
          </svg>
        </CustomButton>
      </div>
      <ProfileEditModal isOpen={dialogOpen} setIsOpen={setDialogOpen} />
    </div>
  );
};

export default ProfileData;
