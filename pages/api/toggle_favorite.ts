import { NextApiRequest, NextApiResponse } from "next";
import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "@firebase/firestore";
import { db } from "../../utils/firebase.utils";
import { Recipe } from "../../interface/Recipe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uid, itemId } = req.query;

  console.log(req.method);

  if (!uid) {
    res.status(400).json({ message: "user id is required" });
    return;
  }
  if (!itemId) {
    res.status(400).json({ message: "product id is required" });
    return;
  }
  if (req.method !== "PUT") {
    res.status(405).json({ message: "method not allowed" });
    return;
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${itemId}/information?apiKey=${process.env.SPOONACULAR_API_KEY}&includeNutrition=true`
    );
    const data = await response.json();

    const newRecipe: Recipe = {
      id: data.id,
      name: data.title,
      cal: data.nutrition.nutrients[0].amount,
      img: data.image,
      vegan: data.vegan,
      vegetarian: data.vegetarian,
      cheap: data.cheap,
      dairyfree: data.dairyFree,
      glutenfree: data.glutenFree,
      diets: data.diets,
    };

    try {
      const docRef = doc(db, "users", String(uid));
      const userSnap = await getDoc(docRef);
      const userData = userSnap.data();

      if (userData?.recipes) {
        const ids = userData.recipes.map((item: Recipe) => item.id);

        if (ids.includes(Number(itemId))) {
          await updateDoc(docRef, { recipes: arrayRemove(newRecipe) });

          res.status(200).json({ message: "recipe was removed from favorite" });
          return;
        } else {
          await updateDoc(docRef, {
            recipes: arrayUnion(newRecipe),
          });

          res.status(200).json({ ...data });
          return;
        }
      }
    } catch (e) {
      console.error(e);
      res
        .status(500)
        .json({ message: "couldn't add that recipe to favorites" });
      return;
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
