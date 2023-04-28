import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    likes: {
        type: [mongoose.Types.ObjectId],
        ref: 'user',
        default: []
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    comments: {
        type: [mongoose.Types.ObjectId],
        ref: 'comment',
        default: []
    },
    referringComment: {
        type: mongoose.Types.ObjectId,
        ref: 'comment'
    },
    referringPost: {
        type: mongoose.Types.ObjectId,
        ref: 'post',
    },
    type: {
        type: String,
        required: true,
        enums: ["onPost", 'onComment']
    }
});

commentSchema.index({
    title: 'text',
    content: "text"
});

export default mongoose.model('comment', commentSchema)