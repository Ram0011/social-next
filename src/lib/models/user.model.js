import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        username: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        followers: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
            default: [],
        },
        following: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
export default User;
