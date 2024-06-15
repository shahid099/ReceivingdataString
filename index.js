import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Importing Routes 
import postdata from './routes/postdata.js';

const app = express();
const  PORT = 5000 || process.env.PORT;
app.use(cors());
dotenv.config();

app.use(express.json());
app.use('/postdata', postdata);

try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        .then(()=> { app.listen(PORT, ()=> { console.log(`Server is listening at : ${PORT}`) })
    })
} catch (error) {
    console.log(error.message, "Unfortunately, Error accur during connecting to DB. Please check your connecting.");
}
