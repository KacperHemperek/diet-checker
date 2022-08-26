import type { NextApiRequest, NextApiResponse } from "next";
import { Recipe } from "../../interface/Recipe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${req.query.query}&addRecipeNutrition=true`
    );

    const data = await response.json();

  

    const responseData: Recipe[] = data.results.map(
      (item: any) =>
        ({
          cal: (item.nutrition.nutrients as any[]).find(
            (item: any) => item.name === "Calories"
          ).amount as number,
          cheap: item.cheap as boolean,
          dairyfree: item.dairyFree as boolean,
          diets: item.diets as string[],
          glutenfree: item.glutenFree as boolean,
          id: item.id as number,
          img: item.image as string,
          name: item.title as string,
          vegan: item.vegan as boolean,
          vegetarian: item.vegetarian as boolean,
        } as Recipe)
    );

    res.status(200).json({ responseData });
  } catch (error: any) {
    console.error(error);
    if (error?.message) {
      res.status(500).json({ error: error.message });
    }
  }
}
