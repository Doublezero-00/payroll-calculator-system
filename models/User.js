import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true, minLength: 6},
    //role: 1-> admin, 2 -> user
    role: {type: Number, default: 2},
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;