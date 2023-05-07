import auth from "../../../middlewares/auth";
import Post from "../../../models/post";
import db from "../../../config/db";
import comment from '../../../models/comments';
const GET = async (req, res) => {
    try {
        const from = req.query;
        console.log(from)
        await db()
        const post = await Post.find().populate('user', 'name profilePic _id').populate({
            path: 'comments',
            populate: {
                path: "comments"
            }
        }).skip(Number(from)).limit(10)
        return res.json({
            post
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

export default GET