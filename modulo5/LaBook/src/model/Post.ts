import { Type } from "../types/types"

export default class Post {
    constructor (
        private id: string,
        private photo: string,
        private description: string,
        private creation_date: string,
        private type: Type,
        private user_id: string

    ) {}
    // getId() {
    //     return this.id
    // }
    // getPhoto() {
    //     return this.photo
    // }
    // getDescription() {
    //     return this.description
    // }
    // getType() {
    //     return this.type
    // }
    // getCreatedAt() {
    //     return this.created_date
    // }    
    // getUserId() {
    //     return this.user_id
    // }


    // static toPostModel(data:any): Post {
    //     return new Post(data.id, data.photo, data.description, data.type, data.created_at, data.author_id)
    // }
}