import type { NextApiRequest, NextApiResponse } from "next";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { token, name } = req.body;
      const response = await fetch(
        "https://platform.fatsecret.com/rest/server.api",
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: `method=food.get.v2&search_expression=${name}&format=json&max_results=6`,
        }
      );
      const data = await response.json();
      console.log(data);
      res.status(200).json({ ...data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
