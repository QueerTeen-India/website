import auth from "../../../middlewares/auth";
import Post from "../../../models/post";
import db from "../../../models/db";

const GET = async (req, res) => {
    try {
        db()
        let {
            search, 
            from
        } = req.query;
        const post = await Post.find({
            $text: {
                $search: search
            }
        }).populate('user', 'name profilePic _id').populate({
            path: 'comments',
            populate: {
                path: "comments"
            }
        }).skip(Number(from)).limit(10);
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