import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    public async createRecipe(recipe: Recipe) {
        try {

            await RecipeDatabase.connection("table_Cookenu_Recipes")
                .insert({
                   id: recipe.getId(),
                   title: recipe.getTitle(),
                   description: recipe.getDescription(),
                   created_At: recipe.getcreatedAt()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    }

    public async getRecipeById (id: string) {
        try {

            const result = await RecipeDatabase.connection("table_Cookenu_Recipes")
            .select("*")
            .where({id})

            return result[0]
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}