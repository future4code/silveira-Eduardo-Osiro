import { Request, Response } from "express";
import insertTask from '../data/insertTask'

export default async function createTask (req:Request, res: Response) {
    const {title, description, deadline, authorId} = req.body

    try {

        if (!req.body.title || !req.body.description || !req.body.deadline || !req.body.authorId) {
            throw new Error("Params not filled.");

        }
        
        await insertTask (
            
            title,
            description,
            deadline,
            authorId
        )

        res.status(201).send("Task created successfully!")

    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}