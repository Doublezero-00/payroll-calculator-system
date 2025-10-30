import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const mongoUrl = process.env.MONGO_URI;

export default async function MongodbConnect() {
    try {
        await mongoose.connect(mongoUrl);
        console.log("MongoDB connected successfully");
    }catch(error) {
        console.log("Error connecting to mongoDB:", error);
    }
}


