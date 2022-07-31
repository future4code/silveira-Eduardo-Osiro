import app from './Controller/app'
import { dogRouter } from './router/DogRouter'

app.use('/dogHero', dogRouter)