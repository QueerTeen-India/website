import auth from "../../../middlewares/auth";
import Post from "../../../models/post";
import db from "../../../models/db";

const GET = async (req, res) => {
    try {
        const {from} = req.query;
        db()
        const post = await Post.find().populate('user', 'name profilePic _id').populate({
            path: 'comments',
            populate: {
                path: "comments"
            }
        }).skip(Number(from))
        return res.json({
            post
        });
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

export default GET