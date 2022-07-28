import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uid, itemId } = req.query;

  if (!uid) {
    res.status(400).json({ message: "user id is required" });
    return;
  }
  if (!itemId) {
    res.status(400).json({ message: "product id is required" });
    return;
  }
}
