import auth from "../../../middlewares/auth";
import News from "../../../models/news";
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
            type,
            title,
            content
        } = req.body;
        if (type === "text") {
            let news = new News({
                title,
                content,
                type,
                labels: title.split(' '),
                user: user._id
            })
            await news.save()
            return res.json({
                message: "news created successfully",
                news
            });
        } else if (type === "image" || type === "video") {
            let {
                link,
                tags
            } = await imageUpload(user, content)
            let news = new News({
                title,
                content: link,
                type,
                labels: [...title.split(' '), ...tags],
                user: user._id
            })
            await news.save()
            return res.json({
                message: "News created successfully",
                news
            });
        }
        return res.json(user)
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
        const news = await News.findById(id);
        if (news.user.toString() === user._id.toString()) {
            await news.delete()
            return res.json({
                message: "news deleted successfully",
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