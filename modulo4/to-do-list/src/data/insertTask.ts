import { connection } from "..";


export default async function insertUser(
    title: string,
    description: string,
    deadline: string,
    authorId: string    
    ) {

    const revertData = deadline.split('/').reverse().join('-')

    await connection.insert(
        {
            title,
            description,
            deadline: revertData,
            authorId,
            id: Date.now()
        }
    ).into("to_do_list_tasks")

}