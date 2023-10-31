import express from 'express'
import indexRouter from './Routes/indexRoutes.js'
const app=express()


app.use("/",indexRouter)

app.listen(3000,()=>console.log("Server connected to 3000"))