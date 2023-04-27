import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ""
    },
    following: {
        type: [mongoose.Types.ObjectId],
        ref: 'user',
        default: []
    }
});

userSchema.index({
    name: 'text',
    bio: "text"
});

export default mongoose.model('user', userSchema)
