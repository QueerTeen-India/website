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
    adminLevel: {
        type: Number,
        enums: [0, 1, 2], //0: not an admin, 1: admin, 2:super admin 
        default: 0
    },
    googleId: {
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
    followers:{
        type: [mongoose.Types.ObjectId],
        ref: 'user',
        default: []
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

export default mongoose.models.user || mongoose.model('user', userSchema);