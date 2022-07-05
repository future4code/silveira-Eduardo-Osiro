import UserBusiness from "./business/UserBusiness";
import app from "./controller/app";
import UserController from "./controller/UserController";
import UserDatabase from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { IdGenerator } from "./services/GenerateID";
import { HashManager } from "./services/HashManager";

const userBusiness = new UserBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

const userController = new UserController(userBusiness)

app.post('/user/signup', userController.signup)
app.post('/user/login', userController.login)