import React, { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../utils/firebase.utils";
import { useDispatch } from "react-redux";
import { clearUserInfo, setUser } from "../redux/features/userData";

type Props = {
  children: any;
};

const AppWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      console.log("auth changed");
      if (auth.currentUser) {
        dispatch(setUser(auth.currentUser));
      } else {
        dispatch(clearUserInfo());
      }
    });

    return unsubscribe();
  });

  return <div>{children}</div>;
};

export default AppWrapper;
