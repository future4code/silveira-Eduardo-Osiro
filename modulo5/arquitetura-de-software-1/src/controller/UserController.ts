import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {
    async signUp (req: Request, res: Response) {
        try {
            const {name, email, password, role} = req.body

            const token = await new UserBusiness().createUser(name, email, password, role)

            res.status(200).send({token})
        } catch (error:any) {
            res.status(400).send({message: error.message || error.sqlMessage})
        }
    }

    async loginUser (req: Request, res: Response) {
        try {
            const {email, password} = req.body

            const token = await new UserBusiness().login(email, password)

            res.status(200).send({token})
        } catch (error:any) {
            res.status(400).send({message: error.message || error.sqlMessage})
        }
    }
}