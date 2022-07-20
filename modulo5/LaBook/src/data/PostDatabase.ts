import Post from "../model/Post";
import { Type } from "../types/types";
import { BaseDatabase } from "./BaseDatabase";


export default class postDatabase extends BaseDatabase {

    protected TABLE_NAME = "labook_posts"

    async createPost(post: Post) {
        try {

        await BaseDatabase.connection(this.TABLE_NAME)
        .insert(
            post
            // id: post.getId(), 
            // photo: post.getPhoto(), 
            // description: post.getDescription(), 
            // created_date: post.getCreatedAt(), 
            // type: post.getType(), 
            // user_id: post.getUserId() 
        )
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async getPostById (id: string) {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select("*")
            .where({id})
            
            if(!result){
                throw new Error("Dados não encontrados.");
            }

            const post = {
                id: result[0].id,
                photo: result[0].photo,
                description: result[0].description,
                creation_date: result[0].creation_date,
                type: result[0].type,
                user_id: result[0].user_id
            }
            
            return post
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}