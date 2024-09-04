import express from 'express'
import connectdb from './database/db.js';
import cookieParser from 'cookie-parser';
import authRoutes  from '../Backend/routers/auth.router.js'
import BlogRoutes from './routers/blog.router.js';
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();
dotenv.config();
//create ainstance of that express as a server

const port = 3000 || 5000;


const corsOptions = {
  origin: ["http://localhost:5173"], // Replace with your front-end URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json()) // for using the componets , or data from the client side,that is send by the user
// app.use(express.urlencoded({ extended: true })); // for using the componets urlencoding , or data

app.use("/api/auth",authRoutes);
app.use("/api/blog",BlogRoutes)
app.listen(port,()=>{
    connectdb();
    console.log(`server is running on ${port}`);
})