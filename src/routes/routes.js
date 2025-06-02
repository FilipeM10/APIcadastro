import express from 'express'
import * as controllers from '../controllers/cadastroController.js'

const router = express.Router()

router.get('/', controllers.listar)
router.get('/:id', controllers.procuraPorId)
router.post('/', controllers.postar)
router.delete('/:id', controllers.deletar)

export default router
