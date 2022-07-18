import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/GenerateID";


export async function newRecipe (req: Request, res: Response) {
    try {
        
        const {title, description} = req.body

        const token = new Authenticator().getTokenData(req.headers.authorization as string)
        
        if (!title || !description) {
            throw new Error("Please fill title and description correctly.");
        }

        const recipeDatabase = new RecipeDatabase()

        const idGenarator = new IdGenerator()
        const id = idGenarator.generateId()

        const createdAt = new Date().toISOString().slice(0, 10)

        const newRecipe = new Recipe (id, title, description, createdAt)
        await recipeDatabase.createRecipe(newRecipe)

        res.status(201).send({message: "Recipe created successfully"})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
    
}