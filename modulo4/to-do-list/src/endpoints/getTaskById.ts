import { Request, Response } from "express";
import selectTaskById from "../data/selectTaskById";

export default async function getTaskById(req: Request, res: Response) {
    try {

        const id = await selectTaskById(req.params.id)

        if (!id) {
            throw new Error("Task not found.");
        }

        res.status(200).send(
            "Success"
        )

    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}