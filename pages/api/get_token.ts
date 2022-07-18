// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("https://oauth.fatsecret.com/connect/token", {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: `grant_type=client_credentials&client_id=${process.env.FAT_SECRET_CLIENT_ID}&client_secret=${process.env.FAT_SECRET_CLIENT_SECRET}&scope=basic`,
    });
    console.log(response);
    const data = await response.json();
    res.status(200).json({ ...data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
