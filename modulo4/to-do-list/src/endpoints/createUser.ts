import { Request, Response } from "express";
import insertUser from "../data/insertUser";


export default async function createUser (req:Request, res: Response) {
    try {

        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Invalid parameters.");
        }

        const id:string  = Date.now() + Math.random().toString()

        await insertUser ( 
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
          )

        res.status(201).send("Created successfully!")

    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}