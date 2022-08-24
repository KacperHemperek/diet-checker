import { NextApiRequest, NextApiResponse } from "next";
import RecipePage from "../../interface/RecipePage";

export const getRecipePage = async (id: string) => {
  try {
    const url = `${process.env.APP_URL}/api/recipe_page?itemId=${id}`;
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (e) {
    console.log(e);
    throw Error("Couldn't retrieve data");
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { itemId } = req.query;

  if (!itemId) {
    res.status(400).json({ message: "must pass item id" });
    return;
  }
  try {
    const recipeResponse = await fetch(
      `https://api.spoonacular.com/recipes/${itemId}/information?apiKey=${process.env.SPOONACULAR_API_KEY}&includeNutrition=true`
    );

    const recipeData = await recipeResponse.json();

    res.status(200).json({
      img: recipeData.image,
      name: recipeData.title,
      cheap: recipeData.cheap,
      diaryFree: recipeData.diaryFree,
      glutenFree: recipeData.glutenFree,
      vegan: recipeData.vegan,
      vegetarian: recipeData.vegetarian,
      cal: recipeData.nutrition.nutrients.find(
        (item: any) => item.name === "Calories"
      ).amount,
      protein: recipeData.nutrition.nutrients.find(
        (item: any) => item.name === "Protein"
      ).amount,
      carbohydrates: recipeData.nutrition.nutrients.find(
        (item: any) => item.name === "Carbohydrates"
      ).amount,
      fat: recipeData.nutrition.nutrients.find(
        (item: any) => item.name === "Fat"
      ).amount,
      extendedIngredients: recipeData.extendedIngredients.map(
        (item: any) => item.original
      ),
      steps: recipeData.analyzedInstructions[0]?.steps ?? recipeData.summary,
    });
    return;
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: "couldn't retrieve data from spoonacular",
      error: e,
    });
  }
}
