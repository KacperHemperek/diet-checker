// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { url } from "inspector";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        console.log(process.env.FAT_SECRET_CLIENT_ID);
        console.log(process.env.FAT_SECRET_CLIENT_SECRET);
        const response = await fetch(
            "https://oauth.fatsecret.com/connect/token",
            {
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                },
                method: "POST",
                body: `grant_type:client_credentials&client_id=5afd0822cfd346bab5c17403d8d05bed&client_secret=9ca3e7cb5d2a4965995245e31b45ff67&scope=premier`,
            }
        );
        console.log(response);
        const data = await response.json();
        res.status(200).json({ ...data });
    } catch (error) {
        res.status(500).json({ error });
    }
}
