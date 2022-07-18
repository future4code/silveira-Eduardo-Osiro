import { Request, Response } from "express";
import { connection } from "../data/BaseDataBase";
import { generateId } from "../services/generateId";
import Authenticator from "../services/Authenticator";
import { AuthenticationData } from "../types";


export default async function createUser (req: Request, res: Response): Promise<void> {
    try {
        
        const {email, password} = req.body

        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("'Email' field must be filled or missing '@'.");
        }

        if (!req.body.password || req.body.password.lenght < 6) {
            throw new Error("Password field must be fiiled and must have at least 6 characters.");
            
        }

        res.status(200).send('Token criado por jwt')

        const id = generateId()

        const newUser = {
            id,
            email,
            password
        }

        await connection('User')
        .insert(newUser)

        const payload: AuthenticationData  ={
            id: newUser.id
        }
        
        const token = new Authenticator().generateToken(payload)

        res.status(201).send({token})

    } catch (error:any) {
        res.status(400).send( error.message || error.sqlMessage )
    }
}