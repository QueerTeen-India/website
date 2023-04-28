import auth from "../../../middlewares/auth";
import Events from "../../../models/events";
import db from "../../../models/db";
import User from "../../../models/User";

const POST = async (req, res) => {
    try {
        db()
        const {
            id
        } = req.query;
        const event = await Events.findById(id).populate('user', 'name profilePic _id');
        if (event.subscribers.find(sub => sub.user.toString() === req.user.id.toString())) {
            let subs = event.subscribers.filter(sub => sub.user.toString() !== req.user.id.toString());
            event.subscribers = subs;
            await event.save();
        } else {
            event.subscribers.push({
                user: req.user.id
            });
            await event.save();
        }
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}
const GET = async (req, res) => {
    try {
        db()
        const {
            search,
            from
        } = req.query;
        if (search.length > 1) {
            const events = await Events.find({
                $text: {
                    $search: search
                }
            }).populate('user', 'name profilePic _id').skip(Number(from))
            return res.json({
                events
            });
        } else {
            const events = await Events.find().populate('user', 'name profilePic _id').skip(Number(from))
            return res.json({
                events
            });
        }
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

const handler = async (req, res) => {
    if (req.method === "GET") {
        return GET(req, res);
    } else if (req.method === "POST") {
        return POST(req, res)
    };

}

export default (handler)