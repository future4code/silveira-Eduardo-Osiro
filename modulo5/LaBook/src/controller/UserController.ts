import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class UserController {

    constructor (private userBusiness: UserBusiness) {}

    signup = async (req: Request, res: Response) => {
        const {name, email, password} = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }

        try {
            
            const token = await this.userBusiness.signup(input)

            res.status(201).send({message: "Usuário cadastrado!", token})
        } catch (error:any) {
            res.status(400).send({message: error.message || error.sqlMessage})
        }

    }
}