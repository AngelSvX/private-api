import express from 'express'
import { getDataAnController, getDataDesController, getDataProController } from '../controllers/data.controller.js'
import { authenticatedToken, requireRole } from '../middlewares/authMiddleware.js'

const dataRouter = express.Router()

dataRouter.get("/getProgrammer", authenticatedToken, requireRole("Programador"), getDataProController)
dataRouter.get("/getDesigner", authenticatedToken, requireRole("Diseñador"), getDataDesController)
dataRouter.get("/getAnalist", authenticatedToken, requireRole("Analista"), getDataAnController)

export default dataRouter;