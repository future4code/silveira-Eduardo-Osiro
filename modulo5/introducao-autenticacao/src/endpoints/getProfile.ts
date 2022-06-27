import { Request, Response } from "express";
import { getData } from "../data/functionGetData";
import { functionGetUserById } from "../data/functionGetUserbyId";
import Authenticator from "../services/Authenticator";


export default async function profile (req: Request,res: Response): Promise <void> {
    try {
        
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator()

        const AuthenticationData = authenticator.getTokenData(token)

        const user = await functionGetUserById(AuthenticationData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })

    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}