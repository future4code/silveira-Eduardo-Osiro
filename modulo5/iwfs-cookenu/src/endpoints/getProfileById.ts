import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


export async function getUserById (req: Request, res: Response) {
    try {
        
        const token = new Authenticator().getTokenData(req.headers.authorization as string)
        const userId = req.params.id

        if(!token) {
            throw new Error("Invalid token.");            
        }

        const user = await new UserDatabase().getProfile(userId)
        

        res.status(200).send(user)

    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}