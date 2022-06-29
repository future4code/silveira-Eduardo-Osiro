import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/GenerateID";
import { HashManager } from '../services/HashManager'
import { User } from '../entities/User'
import { Authenticator } from "../services/Authenticator";

export async function signup (req: Request,res: Response ) {
    try {
        const { name, email, password, role} = req.body

        if (!name || !email || !password || !role ) {
            throw new Error("Please fill name, email, password and role correctly.");
            
        }

        if(password.lenght < 6) {
            throw new Error("Password must contaign at least 6 characters.");
            
        }

        const userDatabase = new UserDatabase()
        const user = userDatabase.findUserByEmail(email)

        if(user) {
            res.status(409).send("This email is already registered.")
        }

        const id: string = new IdGenerator().generateId()

        const cypherPassword: string = new HashManager().createHash(password)

        const newUser = new User (id, name, email, cypherPassword, role)

        await userDatabase.createUser(newUser)
        
        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id, role})

        res.status(201).send({message: 'User created successfully', token})

    } catch (error) {
        res.status(400).send(error.message)
    }
}