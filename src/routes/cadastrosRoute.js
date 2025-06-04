import express from 'express'
import cadastrarUsuario from '../controllers/cadastrarController.js'

const cadastroRouter = express.Router()

cadastroRouter.post('/', cadastrarUsuario)

export default cadastroRouter
