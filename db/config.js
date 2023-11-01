import mongoose from 'mongoose';

export const db=()=>{
    mongoose.connect('mongodb://mongo:27017/docker_demo').then(()=>{
        console.log("Database connected");
    })
}