import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = 4202
const app = express();
const dbURL = process.env.DB_URL

app.use(express.json())
app.use(cors())

const connectDb = async () => {
    try {
        await mongoose.connect(dbURL || '')
        console.log('Connected to DB')
    } catch (e) {
       console.error(e)
       console.log('Connection to mongoDB failed')
    }
}

const startServer = async () => {
    try {
        await connectDb()
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
       console.log(`Connection to server on port ${PORT} failed `)
       throw new Error(e.message)
    }
}

startServer()