import express from 'express'
import { getDataAnController, getDataDesController, getDataProController } from '../controllers/data.controller.js'

const dataRouter = express.Router()

dataRouter.get("/getProgrammer", getDataProController)
dataRouter.get("/getDesigner", getDataDesController)
dataRouter.get("/getAnalist", getDataAnController)

export default dataRouter;