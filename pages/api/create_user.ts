import { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "../../utils/firebase.utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uid, email } = req.query;

  if (uid) {
    const docRef = await doc(db, "users", String(uid));
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", String(uid)), {
        email,
      });
      res.status(200).json({ message: "user created successfully" });
    } else {
      res.status(200).json({ message: "user already existed" });
    }
  } else {
    res.status(400).json({ message: "provide uid and email" });
  }
}
