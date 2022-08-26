import { Recipe } from "./Recipe";

export interface UserInformation {
  email: string;
  age?: number;
  recipes?: Recipe[];
  height?: number;
  weight?: number;
  name?: string;
}
