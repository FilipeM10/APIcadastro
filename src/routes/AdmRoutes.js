import express from 'express'
import * as controllers from '../controllers/AdmController.js'

const AdmRouter = express.Router()

AdmRouter.get('/', controllers.listar)
AdmRouter.get('/:id', controllers.procuraPorId)
AdmRouter.delete('/:id', controllers.deletar)

export default AdmRouter
