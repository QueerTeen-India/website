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
    image: {
        type: String,
        required: true
    },
    labels: {
        type: [String],
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
    description: "text",
    address: "text",
    labels: "text"
});

export default mongoose.models.event || mongoose.model('event', eventSchema)