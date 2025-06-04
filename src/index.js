import express from 'express'
import AdmRouter from './routes/AdmRoutes.js'
import cadastroRouter from './routes/cadastrosRoute.js'

const app = express()

app.use(express.json())
app.use('/CadastradosADM', AdmRouter)
app.use('/cadastrar', cadastroRouter)

export default app

// quando for trabalhar o view mostrar como fica o (__dirname) e type:module