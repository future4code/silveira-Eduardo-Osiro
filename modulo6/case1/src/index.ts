import app from './controller/app'
import { paymentRouter } from './router/router'



app.use('/wirecard', paymentRouter)