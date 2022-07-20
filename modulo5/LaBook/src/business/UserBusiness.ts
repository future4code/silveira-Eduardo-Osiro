import UserDatabase from "../data/UserDatabase";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class UserBusiness {

    constructor (
        private userDatabase: UserDatabase, 
        private idGenerator: IdGenerator, 
        private hashManager: HashManager, 
        private authenticator: Authenticator
        ) {}

    signup = async (input: SignupInputDTO) => {
        const {name, email, password} = input

        if (!name || !email || !password) {
            throw new Error("Campos Inválidos.");
        }

        const registeredUser = await this.userDatabase.getUserByEmail(email)

        if (registeredUser) {
            throw new Error("Usuário já registrado.");
        }

        const id = this.idGenerator.generateId()

        const hashPassword = this.hashManager.createHash(password)

        const token = this.authenticator.generateToken({id})
        
        await this.userDatabase.insertUser(id, name, email, hashPassword)

        return token
    }

    login = async (input: LoginInputDTO) => {
        const {email, password} = input

        if (!email || !password) {
            throw new Error("Informe o email e senha.");
        }

        const registeredUser = await this.userDatabase.getUserByEmail(email)

        if (!registeredUser) {
            throw new Error("Usuário não registrado.");
        }

        const correctPassword = this.hashManager.compareHash(password, registeredUser.password)

        if (!correctPassword) {
            throw new Error("Email ou senha incorretos.");
        }

        const token = this.authenticator.generateToken({id: registeredUser.id})

        return token
    }

}