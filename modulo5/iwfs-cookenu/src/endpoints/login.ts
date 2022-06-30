import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/GenerateID";
import { HashManager } from '../services/HashManager'
import { User } from '../entities/User'
import { Authenticator } from "../services/Authenticator";

export async function login (req: Request,res: Response ) {
    try {
        const {email, password} = req.body

        if (!email || !password) {
            throw new Error("Please fill name, email, password and role correctly.");
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if(!user) {
            throw new Error("This email is not registered.");
        }

        const hashManager = new HashManager()
        const correctPassword = hashManager.compareHash(password, user.getPassword())

        if (!correctPassword) {
            throw new Error("Email or password not correct.");
        }
       
        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id: user.getId(), role: user.getRole() })

        res.status(201).send({message: 'Logged!', token})

    } catch (error) {
        res.status(400).send(error.message)
    }
}