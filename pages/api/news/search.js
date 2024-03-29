import auth from "../../../middlewares/auth";
import News from "../../../models/news";
import db from "../../../models/db";

const GET = async (req, res) => {
    try {
        db()
        const {
            search, from
        } = req.query;
        const news = await News.find({
            $text: {
                $search: search
            }
        }).populate('user', 'name profilePic _id').populate({
            path: 'comments',
            populate: {
                path: "comments"
            }
        }).skip(Number(from))
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