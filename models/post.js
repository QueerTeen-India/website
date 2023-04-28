import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enums:["text", 'image', 'video'],
        required: true
    },
    comments:{
        type: [mongoose.Types.ObjectId],
        ref: 'comment',
        default: []
    },
    likes:{
        type: [mongoose.Types.ObjectId],
        ref: 'user',
        default: []
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    labels:{
        type: [String],
        default: []
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    }

});

postSchema.index({
    title: 'text',
    content: "text",
    labels: "text"
});

export default mongoose.models.post || mongoose.model('post', postSchema)