import express from 'express'
import router from './routes/routes.js'

const app = express()

app.use(express.json())
app.use('/cadastro', router)

export default app

// quando for trabalhar o view mostrar como fica o (__dirname) e type:module