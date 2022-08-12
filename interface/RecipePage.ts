export default interface RecipePage {
  image: string;
  title: string;
  cheap: boolean;
  dairyFree: boolean;
  glutenFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  extendedIngredients: any[];
  steps: any[];
}
