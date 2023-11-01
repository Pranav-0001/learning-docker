import express from 'express'
import { addUser } from '../controller/indexController.js'
const router=express.Router()


router.get("/",(req,res)=>{
    res.json("status true")
})
router.post('/createuser',addUser)


export default  router