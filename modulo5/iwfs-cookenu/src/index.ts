import app from './app'
import { newRecipe } from './endpoints/createRecipe'
import { getUserProfile } from './endpoints/getProfile'
import { getUserById } from './endpoints/getProfileById'
import { login } from './endpoints/login'
import { signup } from './endpoints/signup'

app.post('/signup', signup)
app.post('/login', login)
app.post('/recipe', newRecipe)

app.get('/user/profile', getUserProfile)
app.get('/user/:id', getUserById)