import mongoose, { Types } from "mongoose";

export interface User {
    _id: Types.ObjectId;
    firstName: String;
    lastName: String;
    username: String;
    email: String;
    phoneNumber: String;
    age: Number;
    gender: String;
    password: String;
}

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    age: { type: Number, default: null, min: 16, max: 100 },
    gender: { type: String, default: null },
    password: { type: String, required: true }
});

export default mongoose.model('User', userSchema, "users");