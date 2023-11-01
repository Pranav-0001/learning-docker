import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    name:{
        type:'string',
        required:true
    },
    age:{
        type:'number'
    },
    place:{
        type:'string'
    }
})

export const userModel=mongoose.connection.model('user',userSchema)