import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        username: { type: String },
        title: { type: String, require: true },
        text: { type: String, require: true },
        imgURL: { type: String, default: '' },
        views: { type: Number, default: 0 },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    },
    { timestamps: true }
)

export default mongoose.model('Post', postSchema)

