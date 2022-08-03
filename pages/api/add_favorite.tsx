import { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../utils/firebase.utils";
import { Recipe } from "../../interface/Recipe";
import { arrayUnion } from "@firebase/firestore";

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
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${itemId}/information?apiKey=${process.env.SPOONACULAR_API_KEY}&includeNutrition=true`
    );
    const data = await response.json();

    try {
      const docRef = await doc(db, "users", String(uid));
      const userSnap = await getDoc(docRef);
      const userData = userSnap.data();

      if (userData?.recipes) {
        const ids = userData.recipes.map((item: Recipe) => item.id);
        console.log(ids);
        if (ids.includes(Number(itemId))) {
          res.status(200).json({ message: "recipe is already in favorite" });
          return;
        }
        const newRecipe: Recipe = {
          id: data.id,
          name: data.title,
          cal: data.nutrition.nutrients[0].amount,
          img: data.image,
          vegan: data.vegan,
          vegetarian: data.vegetarian,
          diets: data.diets,
        };

        await updateDoc(docRef, {
          recipes: arrayUnion(newRecipe),
        });

        res.status(200).json({ message: "successfully added recipe" });
        return;
      }
    } catch (e) {
      console.error(e);
      res
        .status(500)
        .json({ message: "couldn't add that recipe to favorites" });
    }

    return;
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "internal server error, couldn't fetch data from spoonacular",
    });
    return;
  }
}
