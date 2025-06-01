import express from 'express'
import * as controllers from '../controllers/cadastroController.js'

const router = express.Router()

router.get('/', controllers.listar)

export default router
