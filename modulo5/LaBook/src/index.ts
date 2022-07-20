import PostBusiness from "./business/PostBusiness";
import UserBusiness from "./business/UserBusiness";
import app from "./controller/app";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import PostDatabase from "./data/PostDatabase";
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


const postBusiness = new PostBusiness(
    new PostDatabase(),
    new IdGenerator(),
    new Authenticator()
)

const postController = new PostController(postBusiness)

app.post('/post/create', postController.post)
app.get('/post/:id', postController.postById)
