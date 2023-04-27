import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    likes: {
        type: [mongoose.Types.ObjectId],
        ref: 'user',
        default: []
    },
    referring: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    type: {
        type: String,
        required:true,
        enums: ["onPost", 'onComment']
    }
});

commentSchema.index({
    title: 'text',
    content: "text"
});

export default mongoose.model('comment', commentSchema)