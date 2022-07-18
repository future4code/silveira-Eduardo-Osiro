import { connection } from "..";

export default async function selectTaskById(
    id: string
) {
    const result = await connection("to_do_list_task")
    .select('*')
    .where({ id })

    return result[0]
}