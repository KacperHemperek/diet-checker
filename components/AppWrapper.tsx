import React, { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../utils/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { clearUserInfo, setUser } from "../redux/features/userData";
import { RootState } from "../redux/store";

type Props = {
  children: any;
};

const AppWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();
  const uid = useSelector((state: RootState) => state.user.uid);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      if (auth.currentUser) {
        if (!uid) {
          dispatch(setUser(auth.currentUser));
        }
      } else {
        if (uid) {
          dispatch(clearUserInfo());
        }
      }
    });

    return unsubscribe();
  });

  return <>{children}</>;
};

export default AppWrapper;
