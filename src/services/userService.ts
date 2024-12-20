import User from '../models/user';
import { AES } from '../lib/AES';

const secretKey = "my-strong-secret-key"; // A user-defined secret key
const aes = new AES(secretKey);

export const getUserService = async (params: any, body: any) => {
    const user = await User.find({
        username: params.username,
        _id: body._id
    }, { __v: false });
    return user;
}

export const loginService = async (body: any) => {
    const user = await User.find({
        email: body.email
        // password: body.password
    }, { __v: false });
    return user;
}

export const signupService = async (body: any) => {
    const user = await User.create(body);
    return user;
}

export const updateUserService = async (params: any, body: any) => {
    const user = await User.updateOne({
        username: params.username,
        _id: body._id
    }, { $set: body });
    return user;
}