import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateID } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { authenticationData } from "../types";

export class UserController {

    public createUser = async (req: Request, res: Response) => {
        try {
            const { email, password, role } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("Dados insuficientes, passe email e senha")
            }

            if (email.indexOf("@") === -1) {
                res.statusCode = 400
                throw new Error("Email inválido, acrescente @")
            }

            if (password.length < 6) {
                res.statusCode = 400
                throw new Error("Senha muito curta, mínimo 6 caracteres")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserByEmail(email)

            if (user) {
                res.statusCode = 400
                throw new Error("Usuário já existe")
            }

            const id = new GenerateID().generateID()

            const hashManager = new HashManager()

            const senhaCriptografada = hashManager.createHash(password)

            const newUser = new User(
                id,
                email,
                senhaCriptografada,
                role
            )

            await userDB.insertUser(newUser)

            const token = new Authenticator().generateToken({
                id,
                role
            })

            res.status(200).send({
                message: "Usuário criado com sucesso",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("Dados insuficientes, passe email e senha")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserByEmail(email)

            // const isPasswordCorrect: boolean = new HashManager().compareHash(password, userDB.password)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            const token = new Authenticator().generateToken({
                id: user!.getId(),
                role: user!.getRole()
            })

            res.status(200).send({
                message: "Usuário logado com sucesso",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    public getUserProfile = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            if (!tokenData) {
                res.statusCode = 401
                throw new Error("Não autorizado, token inválido")
            }

            if (tokenData.role !== "normal") {
                throw new Error("Only a normal user can access this funcionality");
              }

            console.log(tokenData.id)

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(tokenData.id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            res.status(200).send({
                id: user.getId(),
                email: user.getEmail(),
                role: user.getRole()
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}