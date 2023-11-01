import { userModel } from "../db/userModel.js";

const addUser=async(req,res)=>{
    try {
        console.log(req.body);
        const {name,age,place}= req.body
        await userModel.create({name,age,place})
        res.json("user created")
    } catch (error) {
        console.log(error);
    }
}

export {addUser}