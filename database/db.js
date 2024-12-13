import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gmailclone-shard-00-00.a2fsy.mongodb.net:27017,gmailclone-shard-00-01.a2fsy.mongodb.net:27017,gmailclone-shard-00-02.a2fsy.mongodb.net:27017/?ssl=true&replicaSet=atlas-2sn627-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmailclone`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        console.log('Database connected sucessfully')
    } catch (error) {
        console.log('Error while connecting with the database ',error.message);
    }
}

export default Connection;