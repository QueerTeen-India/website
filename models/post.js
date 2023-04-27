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
    likes:{
        type: [mongoose.Types.ObjectId],
        ref: 'user',
        default: []
    },

});

postSchema.index({
    title: 'text',
    content: "text"
});

export default mongoose.model('post', postSchema)