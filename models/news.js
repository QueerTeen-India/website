import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enums: ["text", 'image', 'video'],
        required: true
    },
    comments: {
        type: [mongoose.Types.ObjectId],
        ref: 'comment',
        default: []
    },
    likes: {
        type: [mongoose.Types.ObjectId],
        ref: 'user',
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    labels: {
        type: [String],
        default: []
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    }

});

newsSchema.index({
    title: 'text',
    labels: "text"
});

export default mongoose.model('news', newsSchema)