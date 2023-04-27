import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    subscribers: {
        type: [mongoose.Types.ObjectId],
        ref: 'user',
        default: []
    },

});

eventSchema.index({
    title: 'text',
    description: "text"
});

export default mongoose.model('event', eventSchema)