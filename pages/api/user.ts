import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../utils/firebase.utils";
import { doc, getDoc } from "@firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const uid = req.query.uid;
  if (uid) {
    const usersRef = await doc(db, "users", String(uid));
    const user = await getDoc(usersRef);

    
    res.status(200).json({ ...user.data() });
  } else {
    res.status(400).json({ message: "must pass user id" });
  }
}
