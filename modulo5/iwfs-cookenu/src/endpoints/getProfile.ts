import { Response, Request } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getUserProfile (req: Request, res: Response) {

    try {

        const token = new Authenticator().getTokenData(req.headers.authorization as string)

        if (!token) {
            res.status(422).send("A token is required.")
        }

        const userData = await new UserDatabase().getProfile(token.id)

        res.status(200).send(userData)

    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}