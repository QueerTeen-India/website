import auth from "../../../middlewares/auth";
import Events from "../../../models/events";
import db from "../../../models/db";

const POST = async (req, res) => {
    try {
        let user = req.user
        if (user.adminLevel < 1) {
            return res.status(401).json({
                errorMessage: "Unauthorized"
            });
        }
        let {
            title,
            address,
            image,
            date,
            description
        } = req.body;

        let {
            link,
            tags
        } = await imageUpload(user, image)
        let event = new Events({
            title,
            address,
            image: link,
            date,
            description,
            labels: [...title.split(' '), ...description.split(' '), ...tags],
            user: user._id
        })
        await event.save()
        return res.json({
            message: "Event created successfully",
            event
        });

    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

const DELETE = async (req, res) => {
    try {
        let {
            id
        } = req.query;
        const user = req.user;
        const event = await Events.findById(id);
        if (event.user.toString() === user._id.toString()) {
            await event.delete()
            return res.json({
                message: "Events deleted successfully",
            });
        } else {
            return res.status(401).json({
                errorMessage: "Unauthorized"
            });
        }
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}




const handler = async (req, res) => {
    await db()
    if (req.method === 'POST') {
        return auth(POST(req, res))
    } else if (req.method === "DELETE") {
        return auth(DELETE(req, res))
    } else {
        res.status(404).json({
            errorMessage: "Invalid Request Method"
        })
    }
}

export default (handler)