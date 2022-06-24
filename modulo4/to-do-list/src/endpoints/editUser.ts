import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response) {
    try {

        if (req.body.name === "" || req.body.nickname === "" || req.body.email === "") {
            throw new Error("One of the fields must be filled.")
        }

        if (!req.body.name && !req.body.nickname && !req.body.email) {
            throw new Error("Pick one.");
        }

        await updateUser (
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send("User updated.")

    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}