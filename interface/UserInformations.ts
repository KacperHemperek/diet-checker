import { Recipe } from "./Recipe";

export interface UserInformations {
  email: string;
  age?: number;
  recipes?: Recipe[];
  height?: number;
  weight?: number;
  name?: string;
}
