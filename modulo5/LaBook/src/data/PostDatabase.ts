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

}