import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
dotenv.config()

const port = process.env.PORT || 5000;
const app = express()

app.use(cors({
    origin:"https://codewithpragati.onrender.com",
    // origin:"http://localhost:5173",
    methods:["GET","POST"],
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())
app.use(authRouter)





app.listen(port,()=>{
    connectDB()
    console.log(`SERVER IS LISTEN ${port}`)
})