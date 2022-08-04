import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../utils/firebase.utils";

export const useFirebaseSnap = (collection: string, id: string) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState("");
  const docRef = doc(db, `${collection}`, `${id}`);
  useEffect(() => {
    onSnapshot(
      docRef,
      (snapshot) => {
        const data = snapshot.data();
        console.log({ data });

        setData({ data });
      },
      (error) => {
        setError(error.message);
      }
    );
  }, [id, collection, docRef]);

  return { data, error };
};
