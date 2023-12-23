console.log("working");
import express from "express"
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
const app = express();
dotenv.config();


app.use(express.json())
app.use(morgan('dev'))
app.use(router);

mongoose.connect(process.env.MONGO)
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("DB error=>",err))


app.listen(8000, ()=> console.log(`working on port 8000`))