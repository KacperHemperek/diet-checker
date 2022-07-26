import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${req.query.query}`
      );

      const data = await response.json();
      const ids = data.results.map((result: any) => result.id).join(",");

      const bulkResponse = await fetch(
        `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.SPOONACULAR_API_KEY}&ids=${ids}`
      );

      const bulkData = await bulkResponse.json();

      res.status(200).json({ ...bulkData });
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
