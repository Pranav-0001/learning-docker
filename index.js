import express from 'express'
import indexRouter from './Routes/indexRoutes.js'
import { db } from './db/config.js'
const app=express()
db()
app.use(express.json())
app.use("/",indexRouter)



app.listen(3000,()=>console.log("Server connected to 3000"))