import postDatabase from "../data/PostDatabase";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/GenerateID";
import { IdTokenDTO } from "../types/idTokenDTO";
import { PostInputDTO } from "../types/postInputDTO";
import { AuthenticationData } from "../types/types";


export default class PostBusiness {

    constructor(
        private postDatabase: postDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}
    
    createPost = async (input: PostInputDTO, token: string) => {
        const {photo, description, type} = input

        if(!token) {
            throw new Error("Insira um token.");
        }

        if(!photo) {
            throw new Error("Insira um link da foto.")
        }

        if (!description || description.length < 2) {
            throw new Error("Insira uma descrição.");
        }

        if (!type) {
            throw new Error("Insira se é normal ou event");
        }

        const id = this.idGenerator.generateId()
        const tokenData = this.authenticator.getTokenData(token)

        if (!tokenData) {
            throw new Error("Torken inválido.")
        }

        const createdAt = new Date().toISOString().slice(0, 10)

        const post = new Post (id, photo, description, createdAt, type , tokenData.id)

        await this.postDatabase.createPost(post)

        return id

    }

    getPostById = async (input: IdTokenDTO) => {
        const {id, token} = input
        if(!token) {
            throw new Error("Envie o token.");
        }

        const tokenData = this.authenticator.getTokenData(token)
        if (!tokenData) {
            throw new Error("Token inválido.")
        }

        const result = await this.postDatabase.getPostById(id)
        

        return result
    }

}