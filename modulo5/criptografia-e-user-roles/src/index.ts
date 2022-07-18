import app from "./app";
import { UserController } from "./endpoints/UserController";
import { HashManager } from "./services/HashManager";

const senhaCriptografada = new HashManager().createHash("batata")

console.log(senhaCriptografada)

const compare = new HashManager().compareHash("tomate", senhaCriptografada)

console.log(compare)

const userController = new UserController()

app.get("/user/profile", userController.getUserProfile)
app.post("/user/signup", userController.createUser)
app.post('/user/login', userController.login)