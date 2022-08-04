import { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../utils/firebase.utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uid } = req.query;

  if (!(req.method === "POST")) {
    res.status(405).json({ message: "method not allowed" });
    return;
  }
  if (!uid) {
    res.status(400).json({ message: "uid is required in query" });
    return;
  }
  const docRef = await doc(db, "users", String(uid));
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, {
      ...req.body,
    });
    res.status(200).json({ message: "user updated successfully" });
  } else {
    res.status(404).json({ message: "user doesn't exist" });
  }
}
