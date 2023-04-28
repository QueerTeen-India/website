import auth from "../../../middlewares/auth";
import News from "../../../models/news";
import db from "../../../models/db";

const GET = async (req, res) => {
    try {
        db()
        const news = await News.find().populate('user', 'name profilePic _id').populate({
            path: 'comments',
            populate: {
                path: "comments"
            }
        })
        return res.json({
            news
        });
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

export default GET