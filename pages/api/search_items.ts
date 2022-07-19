import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            console.log(req.query.query);
            const response = await fetch(
                `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${req.query.query}`,
                {
                    headers: {
                        "X-RapidAPI-Key": `${process.env.NEXT_APP_API_KEY}`,
                        "X-RapidAPI-Host": `${process.env.NEXT_APP_API_HOST}`,
                    },
                }
            );

            const data = await response.json();
            res.status(200).json({ ...data });
        } catch (error: any) {
            console.error(error);
            if (error?.message) {
                res.status(500).json({ error: error.message });
            }
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
