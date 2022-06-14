import { connection } from "./connections"
import { Request, Response} from "express"
import {user} from './types'

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
//        const users = await selectAllUsers()
 
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No users found")
//        }
 
//        res.status(200).send(users)
       
//     } catch (error:any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }


export const getAllUsers = async (req: Request,res: Response) :Promise <any> => {
    try {
        const name = req.query.name
        if(!name) {
            throw new Error("Name not found.");
        }
        const response = await connection ("aula49_exercicio")
        .select("*")
        .where("name", "LIKE", `%${name}%`)
        res.status(200).send(response)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}

export const getUserByType = async (req: Request,res: Response) :Promise <any> => {
    try {
        const orderBy = req.query.orderBy as string || "ASC"

        if(!orderBy) {
            throw new Error("Type not found")
        }
        
        const response = await connection ("aula49_exercicio")
        .select("*")
        .orderBy(orderBy)
        
        res.status(200).send(response)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}















