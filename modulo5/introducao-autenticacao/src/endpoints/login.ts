import { Request, Response } from "express"
import { functionGetUserByEmail } from "../data/functionGetUserByEmail";
import Authenticator from "../services/Authenticator";
import { AuthenticationData } from "../types";


export default async function login (req: Request, res: Response): Promise <void> {
    try {

        const {email, password} = req.body

        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("'Email' field must be filled or missing '@'.");
        }

        const userData = {
            email: req.body.email, 
            password: req.body.password
        }

        const user = await functionGetUserByEmail(userData.email)

        if (!user || user.password !== userData.password) {
            throw new Error("Invalid password.");
        }
        
        res.status(200).send('Token criado por jwt')

        const token = new Authenticator().generateToken({id: user.id})

        res.status(201).send({token})

    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}