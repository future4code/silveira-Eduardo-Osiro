import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";


export async function getRecipeById (req: Request, res: Response) {
    try {
        
        const recipeId = req.params.id
        const token = new Authenticator().getTokenData(req.headers.authorization as string)

        if (!token) {
            throw new Error("Invalid token.");            
        }

        const recipe = await new RecipeDatabase().getRecipeById(recipeId)

        res.status(200).send(recipe)

    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}