import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose, { ConnectOptions } from "mongoose";
import userRoutes from "./routes/userRoutes";
import vercelRoutes from "./routes/vercelRoutes";


const app = express();
const port = 3000;

app.use(express.json());

// mongoose.connect(`mongodb://localhost:27017/greenWorld`);

// mongoose.connect(`mongodb+srv://poulakarem:I9Mo2yABmg3zpgqO@green-world-db.4znn6.mongodb.net/database`);

// mongoose.connect(`mongodb+srv://poulakarem:I9Mo2yABmg3zpgqO@green-world-db.4znn6.mongodb.net`);

// const db = mongoose.connection;

// db.on("error", () => console.log("Connection Error!"));
// db.once("open", () => console.log("Connected to mongoDB..."));




// const uri = "mongodb+srv://poulakarem:I9Mo2yABmg3zpgqO@green-world-db.4znn6.mongodb.net/?retryWrites=true&w=majority&appName=green-world-db";


// Track the connection status globally to reuse connections
let isConnected: boolean = false;

/**
 * Connect to MongoDB.
 */

mongoose.connect(process.env.MONGODB_URI || '');

app.use(vercelRoutes)
app.use(userRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}...`));