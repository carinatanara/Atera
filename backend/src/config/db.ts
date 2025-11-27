import mongoose from "mongoose";
import { MongoClient } from "mongodb";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed: ', error);
        process.exit(1);
    }
}

// const url = "mongodb+srv://carinatanara:carinatanara123@cluster0.l4ccqit.mongodb.net/?appName=Cluster0"
// const client = new MongoClient(url);

// const db_name = ""

// async function main() {
//     try {
//         await client.connect();
//         console.log('Success');
//     } catch (error) {
//         console.error('MongoDB connection failed: ', error);
//         process.exit(1);
//     }
// }

// main();