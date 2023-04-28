import auth from "../../../middlewares/auth";
import Post from "../../../models/post";
import db from "../../../models/db";
import News from "../../../models/news";


const GET = async (req, res) => {
    try {
        let {
            id
        } = req.query;
        const news = await News.findById(id).populate('user', 'name profilePic _id').populate({
            path: 'comments',
            populate: {
                path: "comments"
            }
        })

        if (!news) {
            return res.status(404).json({
                errorMessage: "Post not found"
            });
        }
        return res.json({
            message: "Post fetched successfully",
            news
        });
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}





const handler = async (req, res) => {
    await db()

    return GET(req, res)

}

export default (handler)