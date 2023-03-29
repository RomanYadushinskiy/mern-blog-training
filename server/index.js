import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Middleweare
app.use(cors())
app.use(express.json())

async function start() {
    try {
        await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.afplb8w.mongodb.net/${DB_NAME}`,
        )
        
        app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}
start()