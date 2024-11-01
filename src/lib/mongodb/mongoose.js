import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set("strictQuery", true);
    if (initialized) {
        console.log("Already connected to MongoDb");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "socials",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connectd to MongoDb");
    } catch (error) {
        console.log("Error connectiong to MongoDb -MongoDb", error);
    }
};
