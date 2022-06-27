import { connection } from "./connections"
import { Request, Response} from "express"
import {user} from './types'

export const getLimitPage = async (req: Request,res: Response) :Promise <any> => {
    try {
        const page = Number(req.query.page) || 1
        const offset = 5 * (page -1)

        const response = await connection ("aula49_exercicio")
        .limit(5)
        .offset(offset)
        
        res.status(200).send(response)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}