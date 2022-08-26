export interface Recipe {
  id: number;
  name: string;
  cal: number;
  img: string;
  vegan: boolean;
  vegetarian: boolean;
  cheap: boolean;
  glutenfree: boolean;
  dairyfree: boolean;
  diets: string[];
}
