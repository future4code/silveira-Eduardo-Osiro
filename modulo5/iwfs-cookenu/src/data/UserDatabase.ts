import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    public async createUser(user: User) {
        try {
            
            await UserDatabase.connection("table_Cookenu")
            .insert ({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    public async findUserByEmail (email: string): Promise<User> {
        try {

            const user = await BaseDatabase.connection("table_Cookenu")
            .select("*")
            .where({email})

            return user[0] && User.toUserModel(user[0]);
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
}