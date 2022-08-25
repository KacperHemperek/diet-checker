export default interface RecipePage {
  img: string;
  name: string;
  cheap: boolean;
  diaryFree: boolean;
  glutenFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
  cal: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  extendedIngredients: any[];
  steps: any[] | string;
}
