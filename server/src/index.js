import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { testConnection } from './db/privateApi.js'

const app = express()
dotenv.config()

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log("Server iniciado en el puerto 3000")
} )

testConnection()