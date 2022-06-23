import express, { request } from "express";
import bodyParser from "body-parser";
import { ObjectId } from "mongodb";
import {mongoose} from 'mongoose';
import router from "./router.js";

const PORT = 3000;
const app = express();
const DB_URL = "mongodb+srv://user:user@cluster0.zdx0bj6.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())
app.use('/api',router)

async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, function(){
            console.log("listening on 8080")
        })
    }
    catch(e){
        console.log(e)
    }
}

startApp()




