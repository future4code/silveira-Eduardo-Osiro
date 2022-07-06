import { Response, Request } from "express";
import PostBusiness from "../business/PostBusiness";
import { PostInputDTO } from "../types/postInputDTO";

export default class PostController {
    constructor (private postBusiness: PostBusiness) {}

    post = async (req: Request, res: Response) => {
        const { photo, description, type } = req.body
        const token = req.headers.authorization as string

        const input: PostInputDTO = {
            photo, 
            description,
            type
        }

        const postId = this.postBusiness.createPost(input, token)

        res.status(201).send({message: "Post criado!"})
    }

    
}