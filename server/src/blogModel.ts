import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title: String,
    message: String,
    timeStamp: String,
    author: String
});

export default mongoose.model("Blogs", blogSchema);