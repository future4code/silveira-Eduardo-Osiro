import { connection } from "./connections"
import { Request, Response} from "express"
import {user} from './types'



export const getUserByType = async (req: Request,res: Response) :Promise <any> => {
    try {
        const name = req.query.name as string
        const orderBy = req.query.orderBy as string || "email"
        const orderType = req.query.orderType as string || "ASC"
        const response = await connection ("aula49_exercicio")
        .select("*")
        .orderBy(orderBy, orderType)
        
        res.status(200).send(response)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}